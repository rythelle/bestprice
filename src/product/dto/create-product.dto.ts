import { ApiProperty } from '@nestjs/swagger';
import type { Prisma } from '@prisma/client';

export class CreateProductDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  category: string;

  @ApiProperty({ required: true })
  purchase_date: string;

  @ApiProperty({ required: true })
  regular_price: string;

  @ApiProperty({ required: false })
  promotional_price?: string;

  @ApiProperty({ required: true })
  place_purchase: string;

  @ApiProperty({ required: false })
  tags?: Prisma.JsonValue;
}
