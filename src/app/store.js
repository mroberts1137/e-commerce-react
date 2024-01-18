import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat([logger])
});
