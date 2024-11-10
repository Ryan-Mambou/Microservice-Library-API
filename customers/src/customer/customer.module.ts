import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { RabbitMQModule } from '../rabbitmq.module';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), RabbitMQModule],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}