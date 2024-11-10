import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOK_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://qfbdmcji:K-JNRdggmtf2rL2ASbFCnfK_pT8Iuxgf@rat.rmq2.cloudamqp.com/qfbdmcji',
          ],
          queue: 'book_queue',
          queueOptions: { durable: false },
        },
      },
      {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://qfbdmcji:K-JNRdggmtf2rL2ASbFCnfK_pT8Iuxgf@rat.rmq2.cloudamqp.com/qfbdmcji',
          ],
          queue: 'customer_queue',
          queueOptions: { durable: false },
        },
      },
      {
        name: 'ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://qfbdmcji:K-JNRdggmtf2rL2ASbFCnfK_pT8Iuxgf@rat.rmq2.cloudamqp.com/qfbdmcji',
          ],
          queue: 'order_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RabbitMQModule {}
