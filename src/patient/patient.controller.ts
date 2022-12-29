import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist/decorators';
import { Patient } from './entities/patient.entity';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiOperation({
    summary: 'Adicionar um paciente',
  })
  create(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os pacientes',
  })
  findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um pacientes',
  })
  findOne(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar dados de um pacientes',
  })
  update(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    return this.patientService.update(id, updatePatientDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.patientService.remove(id);
  // }
}
