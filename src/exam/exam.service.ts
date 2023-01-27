import { Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all exam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exam`;
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return `This action updates a #${id} exam`;
  }

  remove(id: number) {
    return `This action removes a #${id} exam`;
  }
}
