import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { col, fn } from 'sequelize';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async findAll(
    category?: string,
    sort?: string,
    page?: number,
  ): Promise<object> {
    try {
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
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async Categories() {
    try {
      const category = await this.productModel.findAll({
        attributes: [[fn('DISTINCT', col('category')), 'category']],
      });

      return category.map((e, i) => ({
        label: e.category,
        key: i,
      }));
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
