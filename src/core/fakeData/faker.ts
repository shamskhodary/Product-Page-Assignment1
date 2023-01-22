import { faker } from '@faker-js/faker';

export const products = [];

export function fakeProducts() {
  return {
    title: faker.commerce.productName(),
    image: faker.image.fashion(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

Array.from({ length: 40 }).forEach(() => {
  products.push(fakeProducts());
});
