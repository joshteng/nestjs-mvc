import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.setViewEngine('pug');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove non whitelisted keys
      forbidNonWhitelisted: true, // only keys that are defined in DTO will be allowed or reject request completely
      transform: true, // tranform Body, Params of a request to an instance of our DTO class rather than plain JS object
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  )

  await app.listen(3000);
}
bootstrap();
