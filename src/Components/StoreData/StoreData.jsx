import { configureStore } from "@reduxjs/toolkit";
import { DataReducer } from "./Api";
import { itemsReducer, priceReducer, quantityReducer,  } from "./ItemsSlice";

export let store=configureStore({
    reducer:{
        data:DataReducer,
        items:itemsReducer,
        totalQuantatiy:quantityReducer,
        totalPrice:priceReducer,
    }
}) 