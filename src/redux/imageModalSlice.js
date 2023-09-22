import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      image: {}
   },
   reducers: {
      setModal: (state, action) => {
         state.image = action.payload
      }
   }
})

export const { setModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer