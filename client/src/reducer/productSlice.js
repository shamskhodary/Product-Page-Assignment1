import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  cached: {},
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
  },
});

export const { getAllProducts, errorHandler, cachedAPI } = productSlice.actions;
export default productSlice.reducer;
