import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { loginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<loginResponseDto> {
    const { email, password } = loginDto;

    // verifica se o user existe pelo email
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Usuário é/ou Senha inválidos');
    }

    // validar senha se são correta
    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException('Usuário é/ou Senha inválidos');
    }

    delete user.password;

    return {
      token: this.jwtService.sign({ email }),
      user,
    };
  }
}
