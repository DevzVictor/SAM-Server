import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateExamDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do exame',
    example: 'Exame de sangue',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Data marcada para realizar exame',
    example: '21/10/2023',
  })
  date: string;

  @IsString()
  @ApiProperty({
    description: 'Hora marcada para realizar exame',
    example: '14',
  })
  hour: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do laboratório que irá realizar o exame',
    example: 'laboratório BloodX',
  })
  lab?: string;

  @IsString()
  @ApiProperty({
    description: 'Detalhes para serem anotados antes do exame',
    example: 'lr fazer o exame com 8 horas de jejum',
  })
  comments?: string;
}
