import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateMedicamentDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do medicamento',
    example: 'Dipirona',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Quantidade do medicamento',
    example: '20 gotas',
  })
  quantity: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Intervalo de horas para cada dose do medicamento',
    example: 2,
  })
  repeatHour: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Intervalo de minutos para cada dose do medicamento',
    example: 30,
  })
  repeatMinutes: number;
}
