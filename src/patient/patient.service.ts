import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { handleError } from 'src/utils/handle-error.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class PatientService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: string, createPatientDto: CreatePatientDto) {
    const patient: Prisma.PatientCreateInput = {
      user: {
        connect: {
          id: userId,
        },
      },
      ...createPatientDto,
      id: randomUUID(),
    };

    return this.prisma.patient
      .create({
        data: patient,
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  async findAll(): Promise<Patient[]> {
    return await this.prisma.patient.findMany();
  }

  async findById(id: string): Promise<Patient> {
    const record = await this.prisma.patient.findUnique({
      where: {
        id: id,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Patient> {
    return this.findById(id);
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    await this.findById(id);

    return this.prisma.patient
      .update({
        where: {
          id: id,
        },
        data: {
          bithDate: updatePatientDto.bithDate,
          comments: updatePatientDto.comments,
          cpf: updatePatientDto.cpf,
          homePhoneNumber1: updatePatientDto.homePhoneNumber1,
          homePhoneNumber2: updatePatientDto.homePhoneNumber2,
          image: updatePatientDto.image,
          name: updatePatientDto.name,
        },
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.patient.delete({
      where: {
        id,
      },
    });
  }

  async findMedicamentByPatient(id: string) {
    await this.findById(id);
    return await this.prisma.patient.findUnique({
      where: { id },
      select: {
        medicaments: true,
      },
    });
  }

  async findExamByPatient(id: string) {
    await this.findById(id);
    return await this.prisma.patient.findUnique({
      where: { id },
      select: {
        exams: true,
      },
    });
  }

  async findVaccineByPatient(id: string) {
    await this.findById(id);
    return await this.prisma.patient.findUnique({
      where: { id },
      select: {
        vacinnes: true,
      },
    });
  }
}
