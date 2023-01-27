import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamService {
  constructor(private readonly prisma: PrismaService) {}

  create(createExamDto: CreateExamDto): Promise<Exam> {
    const exam: Exam = { ...createExamDto, id: randomUUID() };
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

    const exam: Partial<Exam> = { ...updateExamDto };

    return this.prisma.exam
      .update({
        where: {
          id: id,
        },
        data: exam,
      })
      .catch(handleError);
  }

  remove(id: number) {
    return `This action removes a #${id} exam`;
  }
}
