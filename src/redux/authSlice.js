import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestSignUp, requestUserActivation, requestSignIn, requestRefreshJWTToken, requestUser } from '../services/auth'
import { client } from '../utils/client'
import { setJWTToken } from '../helpers/setJWTToken'
import { setRequestHeader } from '../helpers/setRequestHeader'

const fetchRegistration = createAsyncThunk('user/fetchRegistration', async (body) => await requestSignUp(body))

const fetchActivation = createAsyncThunk('user/fetchActivation', async (body, { rejectWithValue }) => {
   try {
      const response = await requestUserActivation(body)
      if (response.status >= 200 && response.status < 400) {
         return true
      }
   } catch (error) {
      return rejectWithValue({ error: error.message })
   }
})

const fetchSignIn = createAsyncThunk('user/fetchSignIn', async (body, { rejectWithValue }) => {
   try {
      const response = await requestSignIn(body)

      if (response.status == 200) {
         const accessToken = response.data.access
         const refreshToken = response.data.refresh

         setJWTToken('jwtAccessToken', accessToken)
         setJWTToken('jwtRefreshToken', refreshToken)
         setRequestHeader(client, 'Authorization', accessToken)
      }
   } catch (error) {
      return rejectWithValue({ error: error.message })
   }
})

const fetchRefreshJWTToken = createAsyncThunk('user/fetchRefreshJWTToken', async (body) => {
   try {
      const response = await requestRefreshJWTToken(body)
      const accessToken = response.data.access
   
      setJWTToken('jwtAccessToken', accessToken)
      setRequestHeader(client, 'Authorization', accessToken)
   } catch (error) {
      return console.log(error.message)
   }
})

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
   const response = await requestUser()

   return response.data
})

export const authSlice = createSlice({
   name: 'user',
   initialState: {
      dataUser: {
         image: 'https://icon-library.com/images/google-user-icon/google-user-icon-21.jpg',
         username: '',
         email: '',
      },
      loading: false,
      error: null,
      status: false
   },
   reducers: {
      setErrorReset (state, action) {
         state.error = action.payload
      },

      setStatusReset (state, action) {
         state.status = action.payload
      },
   },
   extraReducers: builder => {
      builder.addCase(fetchActivation.pending, state => {
         state.loading = true
         state.error = null
      })

      builder.addCase(fetchActivation.fulfilled, state => {
         state.loading = false
      })

      builder.addCase(fetchActivation.rejected, (state, action) => {
         state.loading = false
         state.error = action.payload.error
      })

      builder.addCase(fetchSignIn.pending, state => {
         state.loading = true
      })

      builder.addCase(fetchSignIn.fulfilled, state => {
         state.loading = false
         state.status = true
      })

      builder.addCase(fetchSignIn.rejected, (state, action) => {
         state.error = action.payload.error
         state.loading = false
      })

      builder.addCase(fetchUser.fulfilled, (state, action) => {
         state.dataUser.username = action.payload.username
         state.dataUser.email = action.payload.email
      })
   }
})

export {
   fetchRegistration,
   fetchActivation,
   fetchSignIn,
   fetchRefreshJWTToken,
   fetchUser,
}

export const { setUser, setErrorReset, setStatusReset } = authSlice.actions
export const authReducer = authSlice.reducer