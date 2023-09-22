import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestPostId } from '../services/posts'

const fetchPost = createAsyncThunk('Post/fetchPost', async (id) => await requestPostId(id))

export const postSlice = createSlice({
   name: 'Post',
   initialState: {
      post: [],
      loading: false,
      error: null,
   },
   reducers: {
   },
   extraReducers: builder => {
      builder.addCase(fetchPost.pending, state => {
         state.loading = true
      })

      builder.addCase(fetchPost.fulfilled, (state, action) => {
         state.loading = false
         state.post = action.payload
      })

      builder.addCase(fetchPost.rejected, state => {
         state.loading = false
         state.error = 'Ошибка!!!'
      })
   }
})

export { fetchPost }
export const postReducer = postSlice.reducer