import { IsNotEmpty, IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsUUID()
  id?: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  bookId: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  customerId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}
