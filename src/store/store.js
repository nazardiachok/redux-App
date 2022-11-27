import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../features/productSlice'
import { productsApi } from '../features/productsApi'

export const store = configureStore({
  reducer: {
    products: productSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})