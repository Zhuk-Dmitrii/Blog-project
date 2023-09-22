import { createSlice, createAction } from '@reduxjs/toolkit'
import { put, select } from 'redux-saga/effects'
import { requestPosts } from '../services/posts'

// const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({pageNumber = 1, search, ordering}, { getState }) => {
//    const { limit } = getState().posts
//    const offset = (pageNumber - 1) * limit

//    return await requestPosts(limit, offset, search, ordering)
// })

export function* getPostsSaga({payload: {pageNumber = 1, search, ordering}}) {
   yield put(setLoading(true))
   const { limit } = yield select(state => state.posts)
   const offset = (pageNumber - 1) * limit

   try {
      const payload = yield requestPosts(limit, offset, search, ordering)

      const pageCounter = Math.ceil(payload.count / limit)
      yield put(setPageCounter(pageCounter))

      yield put(getPostsSuccess(payload))
   } catch (error) {
      yield put(setError(error.message))
   }

   yield put(setLoading(false))
}

export const postsSlice = createSlice({
   name: 'posts',
   initialState: {
      data: [],
      limit: 10,
      pagesCounter: 0,
      loading: false,
      error: null,
   },
   reducers: {
      getPostsSuccess: (state, action) => {
         state.data = action.payload.results
      },
      setPageCounter: (state, action) => {
         state.pagesCounter = action.payload
      },
      setLoading: (state, action) => {
         state.loading = action.payload
      },
      setError: (state, action) => {
         state.error = action.payload
      }
   },
   // extraReducers: builder => {
   //    builder.addCase(fetchPosts.pending, state => {
   //       state.loading = true
   //    })

   //    builder.addCase(fetchPosts.fulfilled, (state, action) => {
   //       state.loading = false

   //       if (state.data.length == action.payload.count) return
         
   //       state.data = action.payload.results
   //       state.pagesCounter = Math.ceil(action.payload.count / state.limit)
   //    })

   //    builder.addCase(fetchPosts.rejected, state => {
   //       state.loading = false
   //       state.error = 'Ошибка!!!'
   //    })
   // }
})

// export { fetchPosts }
export const GET_POSTS = 'posts/getPoasts'
export const getPosts = createAction(GET_POSTS)
export const { getPostsSuccess, setPageCounter, setLoading, setError } = postsSlice.actions
export const postsReducer = postsSlice.reducer



