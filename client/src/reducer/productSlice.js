import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  fields: [],
  error: null,
  cached: {},
  length: 0,
  total: 0,
  page: 0,
  price: '',
  category: '',
};

const productSlice = createSlice({
  name: 'products',
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
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setFields: (state, action) => {
      state.fields = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  getAllProducts,
  errorHandler,
  cachedAPI,
  productsLength,
  totalValue,
  setCategory,
  setPrice,
  setFields,
  setPage
} = productSlice.actions;
export default productSlice.reducer;
