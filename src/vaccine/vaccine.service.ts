import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { Vaccine } from './entities/vaccine.entity';

@Injectable()
export class VaccineService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    const vaccine: Vaccine = { ...createVaccineDto, id: randomUUID() };
    return this.prisma.vaccine
      .create({
        data: vaccine,
      })
      .catch(handleError);
  }

  findAll(): Promise<Vaccine[]> {
    return this.prisma.vaccine.findMany();
  }

  async findById(id: string): Promise<Vaccine> {
    const record = await this.prisma.vaccine.findUnique({
      where: {
        id: id,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  findOne(id: string): Promise<Vaccine> {
    return this.findById(id);
  }

  async update(
    id: string,
    updateVaccineDto: UpdateVaccineDto,
  ): Promise<Vaccine> {
    await this.findById(id);

    const vaccine: Partial<Vaccine> = { ...updateVaccineDto };

    return this.prisma.vaccine
      .update({
        where: {
          id: id,
        },
        data: vaccine,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.vaccine.delete({
      where: {
        id: id,
      },
    });
  }
}
