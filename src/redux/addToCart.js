import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "add",
  initialState: {
    cart: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },

  reducers: {
    // addColor: (state, action) => {

    //   state.info = [...state.cart, action.payload];
    // },

    addProduct: (state, action) => {
      //function quantity
      //function findIndex dùng để chỉ đích danh hành động card nào đó
      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cart[existingIndex] = {
          ...state.cart[existingIndex],
          cartQuantity: state.cart[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cart.push(tempProductItem);
      }
    },
    decreaseProduct: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = nextCart;
      }
    },
    getTotals(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});
export const { addProduct, decreaseProduct, getTotals, addColor } =
  productSlice.actions;
export default productSlice.reducer;
