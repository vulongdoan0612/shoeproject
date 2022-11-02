import { createSlice } from "@reduxjs/toolkit";
import productsAPI from "../database";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: productsAPI,
  },
  reducers: {
    showProducts: (state, action) => {
      state.allProducts = [state.allProducts, action.payload];
    },
  },
});
export const { showProducts } = productSlice.actions;
export default productSlice.reducer;
