import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore( {
    reducer : {
        cart: cartReducer
    }
});

export default appStore;

// configure store will give us store to our application
// we will add slices to it 