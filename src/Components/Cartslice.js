import React from 'react'
// import { createSlice } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
// import { Add  } from '@reduxjs/toolkit'
const Cartslice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            console.log(action.payload)
            return state.filter((item)=>item.id !== action.payload)
        }

    }
})
export const {add,remove} =Cartslice.actions
export default Cartslice.reducer