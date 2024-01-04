import { PRODUCTS } from '../../app/shared/PRODUCTS';

export const selectAll = () => {
  return PRODUCTS;
};

export const selectRandom = () => {
  return PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
};

export const selectById = (id) => {
  return PRODUCTS.find((product) => product.id === parseInt(id));
};

export const selectFeatured = () => {
  return PRODUCTS.find((product) => product.featured);
};
