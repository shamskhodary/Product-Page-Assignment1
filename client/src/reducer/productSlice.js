import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: null,
  fields: [],
  error: null,
  page: 0,
  expire: null,
  price: '',
  category: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      const { category, price, page } = action.payload;

      const cacheKey = `products-${category}-${price}-${page}`
      const expiration = new Date();

      expiration.setMinutes(expiration.getMinutes() + 30); // data expired after 30 minutes
      localStorage.setItem(cacheKey, JSON.stringify(action.payload));
      localStorage.setItem(`${cacheKey}-expiration`, expiration);


      state.products = action.payload;
      state.expire = expiration.toISOString();
    },
    errorHandler: (state, action) => {
      state.error = action.payload;
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
  extraReducers: (builder) => {
    builder.addCase('GET_ALL_PRODUCTS', (state, action) => {
      const { category, price, page } = action.payload;

      const cacheKey = `products-${category}-${price}-${page}`;
      const expiration = localStorage.getItem(`${cacheKey}-expiration`);

      if (expiration && new Date() < new Date(expiration)) {
        state.products = JSON.parse(localStorage.getItem(cacheKey));
        state.expire = expiration.toISOString();
      }
    })
  }
});


export const {
  getAllProducts,
  errorHandler,
  setCategory,
  setPrice,
  setFields,
  setPage
} = productSlice.actions;
export default productSlice.reducer;
