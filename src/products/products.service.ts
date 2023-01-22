import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { col, fn } from 'sequelize';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async findAll(category?: string, sort?: string): Promise<object> {
    const whereObj = {};
    let order: any = [];

    if (category) {
      whereObj['category'] = category;
    }

    if (sort === 'lowest') {
      order = [['price', 'ASC']];
    } else if (sort === 'highest') {
      order = [['price', 'DESC']];
    }

    const products = await this.productModel.findAll({
      where: whereObj,
      order,
    });

    const totalValue = products.reduce(
      (acc, product) => acc + product.price,
      0,
    );

    return { products, count: totalValue, length: products.length };
  }
}
