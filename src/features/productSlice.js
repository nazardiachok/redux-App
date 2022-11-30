import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    
}



const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productSlice.reducer;