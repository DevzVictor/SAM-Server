/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class loginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'TOKEN_GERADO_AUTOMATICAMENTE',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
