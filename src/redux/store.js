import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feachers/cartSlice";
import profileRedcer from "./feachers/profile";



export const store = configureStore({
    reducer:{
        cart:cartReducer,
        Profile:profileRedcer,
    },
})