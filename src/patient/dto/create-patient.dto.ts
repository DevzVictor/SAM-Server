import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsString } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do Paciente',
    example: 'Roberto Augusto',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'CPF do Paciente',
    example: '12457854689',
  })
  cpf: string;

  @IsString()
  @ApiProperty({
    description: 'Data de nascimento do Paciente',
    example: '31/03/1960',
  })
  bithDate?: string;

  @IsString()
  @ApiProperty({
    description: 'Telefone do familiar mais proximo do Paciente',
    example: '(38) 99999-9999',
  })
  homePhoneNumber1?: string;

  @IsString()
  @ApiProperty({
    description: 'Telefone de outro familiar proximo do Paciente',
    example: '(38) 88888-9999',
  })
  homePhoneNumber2?: string;

  @IsString()
  @ApiProperty({
    description: 'Foto do Paciente',
    example: 'https://avatars.githubusercontent.com/u/91481122?v=4',
  })
  image?: string;

  @IsString()
  @ApiProperty({
    description: 'Detalhes sobre o paciente',
    example:
      'Paciente intolerante a lactose, necessita comer de 3 em 3 horas devido diabetes',
  })
  comments?: string;
}
