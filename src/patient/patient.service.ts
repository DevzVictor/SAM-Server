import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPatientDto: CreatePatientDto) {
    const patient: Patient = { ...createPatientDto, id: randomUUID() };
    return this.prisma.patient.create({
      data: patient,
    });
  }

  findAll() {
    return this.prisma.patient.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
