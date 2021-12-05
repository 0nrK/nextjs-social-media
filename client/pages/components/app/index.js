import { configureStore } from '@reduxjs/toolkit'
import savedSliceReducer from "../features/savedPostSlice"

export const store = configureStore({
    reducer: {
        savedPosts: savedSliceReducer,
    },
  })