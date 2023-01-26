import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
