import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { PaginationParams } from './dto/params.dto';
import { QueryProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async findAll(
    @Query() dto?: QueryProductDto,
    @Query() params?: PaginationParams,
  ): Promise<object> {
    const allProducts = await this.productService.findAll(
      dto.category,
      dto.sort,
      +params.page,
    );

    return allProducts;
  }

  @Get('/categories')
  async findCategories() {
    return await this.productService.Categories();
  }
}
