import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../app/shared/PRODUCTS';

const initialState = {
  productsArray: PRODUCTS
};

const productsSlice = createSlice({
  name: 'products',
  initialState
});

export const productsReducer = productsSlice.reducer;

export const selectAll = (state) => {
  return state.products.productsArray;
};

export const selectById = (id) => (state) => {
  return state.products.productsArray.find(
    (product) => product.id === parseInt(id)
  );
};

export const selectFeatured = (state) => {
  return state.products.productsArray.find((product) => product.featured);
};
