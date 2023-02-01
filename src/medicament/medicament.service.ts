import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';
import { Medicament } from './entities/medicament.entity';
import { randomUUID } from 'crypto';
import { handleError } from 'src/utils/handle-error.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class MedicamentService {
  constructor(private readonly prisma: PrismaService) {}

  create(patientId: string, createMedicamentDto: CreateMedicamentDto) {
    // const medicament: Medicament = { ...createMedicamentDto, id: randomUUID() };
    const medicament: Prisma.MedicamentCreateInput = {
      patient: {
        connect: {
          id: patientId,
        },
      },
      ...createMedicamentDto,
      id: randomUUID(),
    };

    return this.prisma.medicament
      .create({
        data: medicament,
      })
      .catch(handleError);
  }

  findAll(): Promise<Medicament[]> {
    return this.prisma.medicament.findMany();
  }

  async findById(id: string): Promise<Medicament> {
    const record = await this.prisma.medicament.findUnique({
      where: {
        id: id,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  findOne(id: string): Promise<Medicament> {
    return this.findById(id);
  }

  async update(
    id: string,
    updateMedicamentDto: UpdateMedicamentDto,
  ): Promise<Medicament> {
    await this.findById(id);

    // const medicament: Partial<Medicament> = { ...updateMedicamentDto };

    return this.prisma.medicament
      .update({
        where: {
          id: id,
        },
        // data: medicament,
        data: {
          name: updateMedicamentDto.name,
          quantity: updateMedicamentDto.quantity,
          repeatHour: updateMedicamentDto.repeatHour,
          repeatMinutes: updateMedicamentDto.repeatMinutes,
        },
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.medicament.delete({
      where: {
        id: id,
      },
    });
  }
}
