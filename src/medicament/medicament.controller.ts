import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MedicamentService } from './medicament.service';
import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('medicament')
@Controller('medicament')
export class MedicamentController {
  constructor(private readonly medicamentService: MedicamentService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar controle de medicação',
  })
  create(@Body() createMedicamentDto: CreateMedicamentDto) {
    return this.medicamentService.create(createMedicamentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os controles de medicação',
  })
  findAll() {
    return this.medicamentService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Mostrar um controle de medicação pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.medicamentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um controle de medicação pelo ID',
  })
  update(
    @Param('id') id: string,
    @Body() updateMedicamentDto: UpdateMedicamentDto,
  ) {
    return this.medicamentService.update(id, updateMedicamentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um controle de medicação pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.medicamentService.delete(id);
  }
}
