import { Module } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [VaccineController],
  providers: [VaccineService],
})
export class VaccineModule {}
