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

    this.prisma.patient
      .create({
        data: patient,
        select: {
          user: {
            select: {
              email: true,
              name: true,
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

  // async update(
  //   id: string,
  //   updatePatientDto: UpdatePatientDto,
  // ): Promise<Patient> {
  //   await this.findById(id);

  //   const patient: Partial<Patient> = {
  //     ...updatePatientDto,
  //   };

  //   return this.prisma.patient
  //     .update({
  //       where: {
  //         id: id,
  //       },
  //       data: patient,
  //     })
  //     .catch(handleError);
  // }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.patient.delete({
      where: {
        id,
      },
    });
  }
}
