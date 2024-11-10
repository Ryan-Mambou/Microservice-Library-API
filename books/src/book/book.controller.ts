import { Controller, Get, Inject, Param, Body, Patch } from '@nestjs/common';
import { BookService } from './book.service';
import {
  ClientProxy,
  Payload,
  MessagePattern,
  EventPattern,
} from '@nestjs/microservices';
import { Book } from './book.entity';

const GET_BOOK = 'getBook';
const IS_BOOK_IN_STOCK = 'isBookInStock';
const DECREASE_STOCK = 'DecreaseStock';
const INCREASE_STOCK = 'IncreaseStock';

@Controller('book')
export class BookController {
  constructor(
    private readonly bookService: BookService,
    @Inject('BOOK_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get('/:id')
  async getBook(@Param('id') bookId: string) {
    return await this.bookService.getBook(bookId);
  }

  @MessagePattern(GET_BOOK)
  async handleGetBook(@Payload() data: { bookId: string }) {
    const { bookId } = data;
    return await this.bookService.getBook(bookId);
  }

  @MessagePattern(IS_BOOK_IN_STOCK)
  async handleIsBookInStock(
    @Payload() data: { bookId: string; quantity: number },
  ): Promise<boolean> {
    const { bookId, quantity } = data;
    return await this.bookService.isBookInStock(bookId, quantity);
  }

  @EventPattern(DECREASE_STOCK)
  async handleDecreaseStock(
    @Payload() data: { bookId: string; quantity: number },
  ): Promise<Book> {
    const { bookId, quantity } = data;
    return await this.bookService.decreaseStock(bookId, quantity);
  }

  @EventPattern(INCREASE_STOCK)
  async handleIncreaseStock(
    @Payload() data: { bookId: string; quantity: number },
  ): Promise<Book> {
    const { bookId, quantity } = data;
    return await this.bookService.increaseStock(bookId, quantity);
  }

  @Patch('/:id')
  async increaseStock(
    @Param('id') bookId: string,
    @Body() body: { quantity: number },
  ) {
    const { quantity } = body;
    console.log('Increase stock request received:', bookId, quantity);
    return await this.bookService.increaseStock(bookId, quantity);
  }
}
