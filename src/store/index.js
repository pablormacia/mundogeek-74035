import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice"

const store = configureStore({
    reducer:{
        shopReducer,
        cartReducer
    }
})

export default store