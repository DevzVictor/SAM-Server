import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVaccineDto {
  @IsString()
  @ApiProperty({
    description: 'Nome da Vacina',
    example: 'Vacina COVID-19 primeira dose',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Data para primeira dose',
    example: '18/04/23',
  })
  firstDoseDate: string;

  @IsString()
  @ApiProperty({
    description: 'Data para segunda dose',
    example: '20/06/23',
  })
  nextDoseDate: string;
}
