import { Body, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

function NormalizeString(data: string) {
  return data
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();
}

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(
    @Body()
    {
      name,
      brand,
      type,
      value_type,
      unit,
      category,
      purchase_date,
      price,
      place_purchase,
      tags,
    }: CreateProductDto,
  ) {
    const nameNormalized = NormalizeString(name);
    const brandNormalized = NormalizeString(brand);
    const categoryNormalized = NormalizeString(category);
    const categoryNormalized = NormalizeString(category);

    return this.prisma.product.create({
      data: {
        name: nameNormalized,
        category: categoryNormalized,
        purchase_date: new Date(purchase_date),
        place_purchase,
        price,
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
      if (parseFloat(acc.price) < parseFloat(curr.price)) return acc;

      return curr;
    });
  }
}
