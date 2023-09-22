import { requestRefreshJWTToken } from '../services/auth.js'
import { client } from './client.js'
import { getJWTToken } from '../helpers/getJWTToken.js'

export async function refreshJWTToken() {
   const refreshToken = getJWTToken('jwtRefreshToken')

   if (window.location.pathname === '/signIn') {
      return
   }

   if (refreshToken) {
      try {
         const response = await requestRefreshJWTToken({ refresh: refreshToken })

         localStorage.setItem('jwtAccessToken', response.data.access)
         client.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access   
      } catch (error) {
         if (error.response.status == 401) {
            window.location.href = '/signIn'
         }
      }
   }
}