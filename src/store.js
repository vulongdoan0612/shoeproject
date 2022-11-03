// phải tạo store trong Redux ( bắt buộc )
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/productSlice";
import addReducer from "./redux/addToCart";
export default configureStore({
  reducer: {
    //đặt tên user, userReducer từ thằng userSlice, userReducer mún đặt tên gì cũng được
    products: productReducer,
    add: addReducer,
  },
});
