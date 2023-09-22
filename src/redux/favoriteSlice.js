import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      data: [],
   },
   reducers: {
      addPost: (state, action) => {
         state.data.push(action.payload)
      },
      removePost: (state, action) => {
         const indexPost = state.data.findIndex(post => post.id === action.payload.id)
         state.data.splice(indexPost, 1)
      }
   }
})

export const { addPost, removePost } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer