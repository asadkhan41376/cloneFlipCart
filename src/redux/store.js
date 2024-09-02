import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feachers/cartSlice";
import profileReduser from "./feachers/profile";



export const store = configureStore({
    reducer:{
        cart:cartReducer,
        Profile:profileReduser,

    },
})