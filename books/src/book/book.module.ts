import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { RabbitMQModule } from '../rabbitmq.module';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), RabbitMQModule],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
