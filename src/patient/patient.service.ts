import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const patient: Patient = { ...createPatientDto, id: randomUUID() };
    return this.prisma.patient.create({
      data: patient,
    });
  }

  findAll(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  findOne(id: string): Promise<Patient> {
    return this.prisma.patient.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
