import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { QueryProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async findAll(@Query() dto?: QueryProductDto): Promise<object> {
    const allProducts = await this.productService.findAll(
      dto.category,
      dto.sort,
    );

    return allProducts;
  }
}
