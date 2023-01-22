import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  cached: {},
  length: 0,
  total: 0
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
    errorHandler: (state, action) => {
      state.error = action.payload;
    },
    cachedAPI: (state, action) => {
      state.cached.products = action.payload;
    },
    productsLength: (state, action) => {
      state.length = action.payload;
    },
    totalValue: (state, action) => {
      state.total = action.payload;
    }


  },
});

export const { getAllProducts, errorHandler, cachedAPI, productsLength, totalValue } = productSlice.actions;
export default productSlice.reducer;
