import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartArray: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
});

export const cartReducer = cartSlice.reducer;

export const selectAll = (state) => {
  return state.cart.cartArray;
};
