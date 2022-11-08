import { createSlice } from "@reduxjs/toolkit";
import productsAPI, { apronAPI, bagAPI, footAPI } from "../database";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: productsAPI,
    bagProducts: bagAPI,
    footProducts: footAPI,
    apronProducts: apronAPI,
  },
  reducers: {
    showProducts: (state, action) => {
      state.allProducts = [state.allProducts, action.payload];
    },
    showProductsBag: (state, action) => {
      state.bagProducts = [state.bagProducts, action.payload];
    },
    showProductsFoot: (state, action) => {
      state.footProducts = [state.footProducts, action.payload];
    },
    showProductsApron: (state, action) => {
      state.apronProducts = [state.apronProducts, action.payload];
    },
  },
});
export const { showProducts } = productSlice.actions;
export default productSlice.reducer;
