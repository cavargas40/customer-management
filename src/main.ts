import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get('ConfigService').get('app.port');

  const config = new DocumentBuilder()
    .setTitle('Customer Management Documentation')
    .setDescription('Propellerhead Test - Customer Management Documentation')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}

bootstrap();
