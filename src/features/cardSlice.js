import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState ={
cartItems: localStorage.getItem("cartItems",) ? JSON.parse(localStorage.getItem("cartItems")) : [],
cartTotalQuantity: 0,
cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "carts",
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
                
                toast.success(`Added "${action.payload.title}" to Carts`, {
                    position:"top-right"
                 })
            }; 

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            /* Another way how to add card and amount */
            /* const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity +=1;
            } else{
                state.cartItems.push({...action.payload, cartQuantity: 1})
            } */
           
          
        },
        decreaseAmount (state,action){
            const foundToDecrease = state.cartItems.find(item=> item.id === action.payload.id);

            if(foundToDecrease.cartQuantity === 1){
                state.cartItems = state.cartItems.filter(cart=>cart.id !== action.payload.id);

                localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            } else{ 
                
                    state.cartItems = state.cartItems.map(item => 
                        item.id === action.payload.id
                        ? {...action.payload, cartQuantity: action.payload.cartQuantity -1} 
                        : item)
                }
            
            
        },
        deleteCart(state,action){
            state.cartItems = state.cartItems.filter(cart=>cart.id !== action.payload.id);

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        getTotals (state,action) { // aufrufen mit useEffect. wird jedes mal neu gerendered wenn sich etwas in cartItems ändert.

            const total = state.cartItems.reduce(
                (totalPrice, currentItem) => totalPrice + currentItem.price * currentItem.cartQuantity, 0
            )
            state.cartTotalQuantity = total;
            console.log(total) 

            const amount = state.cartItems.reduce(
                (totalAmount, currentItem) => totalAmount + currentItem.cartQuantity, 0
            )
            state.cartTotalAmount = amount;
            console.log(amount) 


          /*    state.cartItems.reduce(
                (totalPrice, currentItem) => {
                const { price, cartQuantity} = state.cartItems; // = currentItem
                const itemTotal = price * cartQuantity;

                totalPrice.total = totalPrice.total + itemTotal;
                totalPrice.total = totalPrice.total + cartQuantity; 

                return totalPrice;
                },
                {
                    total:0,
                    quantity:0
                }
            ) */

        }
    }
})

export const {addToCart, decreaseAmount, deleteCart, getTotals}= cartSlice.actions;
export default cartSlice.reducer;