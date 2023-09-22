import { client } from '../utils/client'
import { signUpEndpoint, signInEndpoint, userActivationEndpoint, refreshJWTTokenEndpoint, userEndpoint } from '../api'

export const requestSignUp = async (body) => {
   const { data } = await client.post(signUpEndpoint, body, {
      headers: {
         'Content-Type': 'application/json',
      },
   })

   return data
}

export const requestUserActivation = async (body) => {
   const response = await client.post(userActivationEndpoint, body, {
      headers: {
         'Content-Type': 'application/json',
      },
   })

   return response
}

export const requestSignIn = async (body) => {
   const response = await client.post(signInEndpoint, body, {
      headers: {
         'Content-Type': 'application/json',
      },
   })

   return response
}

export const requestRefreshJWTToken = async (body) => {
   const response = await client.post(refreshJWTTokenEndpoint, body, {
      headers: {
         'Content-Type': 'application/json',
      },
   })

   return response
}

export const requestUser = async () => {
   const response = await client.get(userEndpoint)
   return response
}