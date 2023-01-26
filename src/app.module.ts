import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MedicamentModule } from './medicament/medicament.module';

@Module({
  imports: [PatientModule, PrismaModule, UserModule, MedicamentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
