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
import { VaccineService } from './vaccine.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Vaccine')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('vaccine')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Post(':id')
  @ApiOperation({
    summary: 'Agendar uma vacina',
  })
  create(
    @Param('id') patientId: string,
    @Body() createVaccineDto: CreateVaccineDto,
  ) {
    return this.vaccineService.create(patientId, createVaccineDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as vacinas agendadas',
  })
  findAll() {
    return this.vaccineService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Mostrar uma vacina pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.vaccineService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um agendamento de vacina pelo ID',
  })
  update(@Param('id') id: string, @Body() updateVaccineDto: UpdateVaccineDto) {
    return this.vaccineService.update(id, updateVaccineDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um agendamento de vacina',
  })
  delete(@Param('id') id: string) {
    return this.vaccineService.delete(id);
  }
}
