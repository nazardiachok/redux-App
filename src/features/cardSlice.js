import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import { useDispatch } from "react-redux";

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
        const productFound = state.cartItems.find(item=> item.id === action.payload.id); //action.payload is one product that we take when onClicked
          if(productFound)  {
        state.cartItems = state.cartItems.map(cart => 
            (cart.id === action.payload.id) ?
         {...productFound, cartQuantity: productFound.cartQuantity +1} 
         : cart );
         toast.info(`You increased the amount of "${productFound.title}" up to ${productFound.cartQuantity + 1} items`, {
            position:"top-right"
         })
            }  else{
                state.cartItems.push({...action.payload, cartQuantity: 1});
                toast.info(`Added "${action.payload.title}" to Carts`, {
                    position:"top-right"
                 })
            } 
            /* Another way how to add card and amount */
            
            /* const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity +=1;
            } else{
                state.cartItems.push({...action.payload, cartQuantity: 1})
            } */
           
          
        },
        decreaseAmount (state,action){
            
            const itemToDecrease= state.cartItems.find(item=>item.id === action.payload.id)

            if(itemToDecrease.cartQuantity>=2){//тут має бути 2, бо в ряду 22 я додав +1(там додав, бо в popup показувало на 1 менше ніж треба)

                if(itemToDecrease){
                    state.cartItems = state.cartItems.map(item => 
                        item.id === action.payload.id
                        ? {...itemToDecrease, cartQuantity: itemToDecrease.cartQuantity -1} 
                        : item)
                }
            } else{
                deleteCart(state)/* delete does not work,why??? how tu run thus func here? */
            }
            
        },
        deleteCart(state,action){
            state.cartItems = state.cartItems.filter(cart=>cart.id !== action.payload.id)
        }
    }
})

export const {addToCart,decreaseAmount, deleteCart}= cartSlice.actions;
export default cartSlice.reducer;