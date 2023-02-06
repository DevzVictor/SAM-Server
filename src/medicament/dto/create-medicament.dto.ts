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
    example: '1',
  })
  quantity: string;

  @IsString()
  @ApiProperty({
    description: 'Tipo do medicamento',
    example: 'Comprimido',
  })
  type?: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Intervalo para cada dose do medicamento',
    example: 2,
  })
  repeatTime: number;

  @IsPositive()
  @ApiProperty({
    description: 'Detalhes para se atentar antes de se medicar',
    example: 'Se alimentar antes de tomar o medicamento',
  })
  comments?: string;
}
