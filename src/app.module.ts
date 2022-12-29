import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PatientModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
