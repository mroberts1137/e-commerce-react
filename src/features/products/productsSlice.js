import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { appendProductsData } from '../../utils/appendProductsData';
//import { PRODUCTS } from '../../app/shared/PRODUCTS';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(baseUrl + 'products');
    if (!response.ok) {
      return Promise.reject('Unable to fetch. Status: ' + response.status);
    }
    const products = await response.json();
    return products;
  }
);

const initialState = {
  productsArray: [],
  isLoading: true,
  errMsg: ''
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.productsArray = appendProductsData(action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Failed to fetch.';
    }
  }
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
  return {
    featuredItem: state.products.productsArray.find(
      (product) => product.featured
    ),
    isLoading: state.products.isLoading,
    errMsg: state.products.errMsg
  };
};
