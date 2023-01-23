import { Module, CacheInterceptor } from '@nestjs/common';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  providers: [
    ProductsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
