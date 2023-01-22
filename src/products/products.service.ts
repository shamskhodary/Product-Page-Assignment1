import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async findAll(
    category?: string,
    sort?: string,
    page?: number,
  ): Promise<object> {
    const whereObj = {};
    let order: any = [];
    let offset = 0;
    const limit = 8;

    if (category) {
      whereObj['category'] = category;
    }

    if (sort === 'lowest') {
      order = [['price', 'ASC']];
    } else if (sort === 'highest') {
      order = [['price', 'DESC']];
    }

    if (page) {
      offset = limit * (page - 1);
    }

    const products = await this.productModel.findAll({
      where: whereObj,
      order,
      offset,
      limit,
    });

    const totalValue = products.reduce(
      (acc, product) => acc + product.price,
      0,
    );

    return { products, count: totalValue, length: products.length };
  }
}
