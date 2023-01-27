import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';
import { Medicament } from './entities/medicament.entity';
import { randomUUID } from 'crypto';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class MedicamentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMedicamentDto: CreateMedicamentDto): Promise<Medicament> {
    const medicament: Medicament = { ...createMedicamentDto, id: randomUUID() };

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

  findOne(id: string) {
    return `This action returns a #${id} medicament`;
  }

  update(id: string, updateMedicamentDto: UpdateMedicamentDto) {
    return `This action updates a #${id} medicament`;
  }

  remove(id: string) {
    return `This action removes a #${id} medicament`;
  }
}
