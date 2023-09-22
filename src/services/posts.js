import { client } from '../utils/client'
import { postsEndpoint, myPostsEndpoint } from '../api'

export const requestPosts = async (limit = 10, offset = 0, search = '', ordering = 'date') => {
   const { data } = await client.get(postsEndpoint, {
      params:{
         limit,
         offset,
         search,
         ordering,
      }
   })
   return data
}

export const requestPostId = async (id) => {
   const { data } = await client.get(postsEndpoint + '/' + id)
   return data
}

export const requestAddPost = async (formData) => {
   const response = await client.post(postsEndpoint, formData)
   console.log(response)
   return response
}

export const requestMyPosts = async (limit = 10, offset = 0, search = '', ordering = 'date') => {
   const { data } = await client.get(myPostsEndpoint, {
      params:{
         limit,
         offset,
         search,
         ordering,
      }
   })

   return data
}