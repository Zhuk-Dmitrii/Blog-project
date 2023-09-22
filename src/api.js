// request endpoints posts
const postsEndpoint = '/blog/posts/'
const myPostsEndpoint = '/blog/posts/my_posts/'

// request endpoints auth
const signUpEndpoint = '/auth/users/'
const signInEndpoint = '/auth/jwt/create/'
const userEndpoint = '/auth/users/me/'
const userActivationEndpoint = '/auth/users/activation/'
const refreshJWTTokenEndpoint = '/auth/jwt/refresh/'

export { 
   postsEndpoint,
   myPostsEndpoint,
   signUpEndpoint,
   signInEndpoint,
   userEndpoint,
   userActivationEndpoint,
   refreshJWTTokenEndpoint,
}