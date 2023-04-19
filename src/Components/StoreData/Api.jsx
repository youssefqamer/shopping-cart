import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export let getData=createAsyncThunk("Data/getData",async()=>{
    let {data}=await axios.get('https://fakestoreapi.com/products')
    return data

})
let dataSlice=createSlice({
    name:'Data',
    initialState:{data:[]},
    extraReducers:(builder)=>{
        builder.addCase(getData.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})
export  let DataReducer=dataSlice.reducer