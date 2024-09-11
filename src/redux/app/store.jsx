import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../features/cartSlice/CartSlice'

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
})
