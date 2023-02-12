import { Body, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(
    @Body()
    {
      name,
      category,
      purchase_date,
      place_purchase,
      regular_price,
      promotional_price,
      tags,
    }: CreateProductDto,
  ) {
    const nameNormalized = name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();

    const categoryNormalized = category
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();

    return this.prisma.product.create({
      data: {
        name: nameNormalized,
        category: categoryNormalized,
        purchase_date: new Date(purchase_date),
        place_purchase,
        regular_price,
        promotional_price,
        tags,
      },
    });
  }

  async findUnique(name: string) {
    const nameNormalized = name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();

    const products = await this.prisma.product.findMany({
      where: { name: { contains: nameNormalized } },
    });

    if (!products) throw new Error('Product do not exists.');

    return products.reduce((acc, curr) => {
      if (parseFloat(acc.regular_price) < parseFloat(curr.regular_price))
        return acc;

      return curr;
    });
  }
}
