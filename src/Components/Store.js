import React from 'react'

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice'
const Store=configureStore({
    reducer:{
        cart:cartReducer,
        // products:cartReducer
    }
})
export default Store