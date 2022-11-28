import { createSlice } from "@reduxjs/toolkit";

const initialState ={
cartItems:[],
cartTotalQuantity: 0,
cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state,action){
           state.cartItems.push(action.payload)
           console.log(action.payload) 
        },
        deleteCart(state,action){
            state.cartItems = state.cartItems.filter(cart=>cart.id !== action.payload.id)
        }
    }
})

export const {addToCart,deleteCart}= cartSlice.actions;
export default cartSlice.reducer;