import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true
}

export const onlineSlice = createSlice({
  name: 'onlineMenu',
  initialState,
  reducers: {
    handleAccountMenu: (state) => {
     return {...state, value: !state.value}
    }
  },
})

export const { handleAccountMenu } = onlineSlice.actions

export default onlineSlice.reducer