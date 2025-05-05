import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      transform:true,
    }),
  );

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,PATCH,DELETE,HEAD',
    allowedHeaders: 'content-type, Authorization',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
