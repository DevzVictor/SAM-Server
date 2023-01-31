import { Module } from '@nestjs/common';
import { MedicamentService } from './medicament.service';
import { MedicamentController } from './medicament.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [MedicamentController],
  providers: [MedicamentService],
})
export class MedicamentModule {}
