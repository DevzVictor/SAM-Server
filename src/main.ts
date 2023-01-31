import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.set('trust proxy', 1);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('SAM')
    .setDescription('Sistema para Administração de Medicamentos')
    .setVersion('1.0.0')
    .addTag('Status')
    .addTag('Auth')
    .addTag('User')
    .addTag('Patient')
    .addTag('Medicament')
    .addTag('Exam')
    .addTag('Vaccine')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
