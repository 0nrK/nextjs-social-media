import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const savedPostSlice = createSlice({
  name: 'savedPosts',
  initialState,
  reducers: {
    savePost: (state,action) => {
      const newPost = {
        id: action.payload.id
      };
      console.log(state)
      state.push(newPost)
    }
  },
})

export const { savePost } = savedPostSlice.actions

export default savedPostSlice.reducer