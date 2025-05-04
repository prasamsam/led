import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,PATCH,DELETE,HEAD',
    allowedHeaders: 'content-type, Authorization',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
