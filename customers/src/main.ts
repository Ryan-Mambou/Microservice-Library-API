import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const RABBITMQ_URL = configService.get<string>('RABBITMQ_URL');
  app.enableCors();
  await app.listen(3000);

  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: 'customer_queue',
      queueOptions: { durable: false },
    },
  });

  await microservice.listen();
}
bootstrap();
