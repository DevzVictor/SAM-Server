import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('exam')
@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  @ApiOperation({
    summary: 'Agendar um exame',
  })
  create(@Body() createExamDto: CreateExamDto) {
    return this.examService.create(createExamDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os exames',
  })
  findAll() {
    return this.examService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Mostrar um exame pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.examService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um agendamento de exame pelo ID',
  })
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examService.update(+id, updateExamDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um agendamento de exame pelo ID',
  })
  remove(@Param('id') id: string) {
    return this.examService.remove(+id);
  }
}
