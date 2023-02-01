import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Patient } from './entities/patient.entity';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('Patient')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiOperation({
    summary: 'Adicionar um paciente',
  })
  create(@LoggedUser() user: User, @Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(user.id, createPatientDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os pacientes',
  })
  async findAll(): Promise<Patient[]> {
    return await this.patientService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um pacientes',
  })
  findOne(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  // @Patch(':id')
  // @ApiOperation({
  //   summary: 'Atualizar dados de um pacientes',
  // })
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePatientDto: UpdatePatientDto,
  // ): Promise<Patient> {
  //   return this.patientService.update(id, updatePatientDto);
  // }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um pacientes',
  })
  delete(@Param('id') id: string) {
    this.patientService.delete(id);
  }
}
