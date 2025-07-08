import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";

const store = configureStore({
    reducer:{
        shopReducer,
    }
})

export default store