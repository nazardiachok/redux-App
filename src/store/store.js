import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../features/productSlice'
import { productsApi } from '../features/productsApi'
import cartSlice from '../features/cardSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
    [productsApi.reducerPath]: productsApi.reducer, 
    carts: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), /* https://redux-toolkit.js.org/rtk-query/api/created-api/redux-integration#middleware */
})