import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [PrismaModule, ProductModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
