import { createBrowserRouter, Navigate } from 'react-router-dom'
import { SignIn } from './pages/SignIn/SignIn.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'
import { PostList } from './pages/PostList/PostList.jsx'
import { Layout } from './components/Layout/Layout.jsx'
import { Post } from './pages/Post/Post.jsx'
import { SearchList } from './pages/SearchList/SearchList.jsx'
import { Activate } from './pages/Activate/Activate.jsx'
import { MyPosts } from './pages/MyPosts/MyPosts.jsx'
import { AddPost } from './pages/AddPost/AddPost.jsx'

export const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Navigate to='/posts/pages/1' replace={true}/>,
         },
         {
            path: '/posts/pages/:pageNumber',
            element: <PostList />,
         },
         {
            path: '/add-post',
            element: <AddPost />,
         },
         {
            path: '/myPosts/pages/:pageNumber',
            element: <MyPosts />,
         },
         {
            path: 'post/:postId',
            element: <Post />,
         },
         {
            path: '/signUp',
            element: <SignUp />,
         },
         {
            path: '/signIn',
            element: <SignIn />,
         },
         {
            path: '/:pageName/search/:searchValue/:pageNumber',
            element: <SearchList />
         },
         {
            path: '/activate/:uid/:token',
            element: <Activate />
         }
      ]
   }
])