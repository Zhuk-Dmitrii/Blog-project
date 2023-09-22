import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestMyPosts } from '../services/posts'

const fetchMyPosts = createAsyncThunk('myPosts/fetchMyPosts', async ({pageNumber = 1, search, ordering}, { getState }) => {
   const { limit } = getState().myPosts
   const offset = (pageNumber - 1) * limit

   return await requestMyPosts(limit, offset, search, ordering)
})

export const myPostsSlice = createSlice({
   name: 'myPosts',
   initialState: {
      data: [],
      limit: 10,
      pagesCounter: 0,
      loading: false,
      error: null,
   },
   reducers: {
   },
   extraReducers: builder => {
      builder.addCase(fetchMyPosts.pending, state => {
         state.loading = true
      })

      builder.addCase(fetchMyPosts.fulfilled, (state, action) => {
         state.loading = false

         if (state.data.length == action.payload.count) return
         
         state.data = action.payload.results
         state.pagesCounter = Math.ceil(action.payload.count / state.limit)
      })

      builder.addCase(fetchMyPosts.rejected, state => {
         state.loading = false
         state.error = 'Ошибка!!!'
      })
   }
})

export { fetchMyPosts }
export const myPostsReducer = myPostsSlice.reducer