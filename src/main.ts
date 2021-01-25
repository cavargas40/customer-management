import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get('ConfigService').get('app.port');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}

bootstrap();
