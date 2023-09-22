import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { languageReducer } from './languageSlice.js'
import { modalReducer } from './imageModalSlice.js'
import { postsReducer, GET_POSTS, getPostsSaga } from './postsSlice.js'
import { postReducer } from './postSlice.js'
import { favoriteReducer } from './favoriteSlice.js'
import { authReducer } from './authSlice.js'
import { myPostsReducer } from './myPostsSlice.js'

const sagaMiddleware = createSagaMiddleware()

function* sagas () {
   yield takeEvery(GET_POSTS, getPostsSaga)
}

export const store = configureStore({
   reducer: {
      language: languageReducer,
      imageModal: modalReducer,
      posts: postsReducer,
      post: postReducer,
      favorite: favoriteReducer,
      auth: authReducer,
      myPosts: myPostsReducer,
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(sagaMiddleware)
   }
})

sagaMiddleware.run(sagas)