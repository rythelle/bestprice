import { ApiProperty } from '@nestjs/swagger';
import type { Prisma, Type } from '@prisma/client';

export class CreateProductDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  brand: string;

  @ApiProperty({ required: false })
  type: Type;

  @ApiProperty({ required: false })
  value_type: string;

  @ApiProperty({ required: false })
  unit: boolean;

  @ApiProperty({ required: true })
  category: string;

  @ApiProperty({ required: true })
  purchase_date: string;

  @ApiProperty({ required: true })
  price: string;

  @ApiProperty({ required: true })
  place_purchase: string;

  @ApiProperty({ required: false })
  tags?: Prisma.JsonValue;
}
