import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import { CORS } from './constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  app.use(morgan('dev'));
  app.setGlobalPrefix('api');
  app.enableCors(CORS);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Silp API')
    .setDescription('Documentación sobre api Litoplas')
    .setVersion('1.0')
    .addTag('Litoplas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document,{
    explorer:true,
    swaggerOptions:{
      filter:true,
      showRequestDuration: true
    }
  })


  await app.listen(process.env.PORT);
  console.log(`Aplication running on: ${await app.getUrl()}`)
}
bootstrap();
