import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamService {
  constructor(private readonly prisma: PrismaService) {}

  create(patientId: string, createExamDto: CreateExamDto): Promise<Exam> {
    // const exam: Exam = { ...createExamDto, id: randomUUID() };
    const exam: Prisma.ExamCreateInput = {
      patient: {
        connect: {
          id: patientId,
        },
      },
      ...createExamDto,
      id: randomUUID(),
    };
    return this.prisma.exam
      .create({
        data: exam,
      })
      .catch(handleError);
  }

  findAll(): Promise<Exam[]> {
    return this.prisma.exam.findMany();
  }

  async findById(id: string): Promise<Exam> {
    const record = await this.prisma.exam.findUnique({
      where: {
        id: id,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  findOne(id: string): Promise<Exam> {
    return this.findById(id);
  }

  async update(id: string, updateExamDto: UpdateExamDto): Promise<Exam> {
    await this.findById(id);

    // const exam: Partial<Exam> = { ...updateExamDto };

    return this.prisma.exam
      .update({
        where: {
          id: id,
        },
        data: {
          name: updateExamDto.name,
          lab: updateExamDto.lab,
          date: updateExamDto.date,
          hour: updateExamDto.hour,
        },
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.exam.delete({
      where: {
        id: id,
      },
    });
  }
}
