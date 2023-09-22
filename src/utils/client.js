import axios from 'axios'

export const client = axios.create({
   baseURL: 'https://studapi.teachmeskills.by',
   timeout: 10000,
})