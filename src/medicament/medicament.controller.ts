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
  UseGuards,
} from '@nestjs/common';
import { MedicamentService } from './medicament.service';
import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Medicament')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('medicament')
export class MedicamentController {
  constructor(private readonly medicamentService: MedicamentService) {}

  @Post(':id')
  @ApiOperation({
    summary: 'Criar controle de medicação',
  })
  create(
    @Param('id') patientId: string,
    @Body() createMedicamentDto: CreateMedicamentDto,
  ) {
    return this.medicamentService.create(patientId, createMedicamentDto);
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
