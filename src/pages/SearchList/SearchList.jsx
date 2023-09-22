import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { fetchPosts } from '../../redux/postsSlice.js'
import { getPosts } from '../../redux/postsSlice.js'
import { fetchMyPosts } from '../../redux/myPostsSlice.js'
import { PostCardLg } from '../../components/PostCardLg/PostCardLg.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx'
import { Sorting } from '../../components/Sorting/Sorting.jsx'

export function SearchList () {
   const [selectedSortOption, setSelectedSortOption] = useState('date')
   const dispatch = useDispatch()
   const { pageName, searchValue, pageNumber } = useParams()
   const {data, pagesCounter, loading, error} = useSelector(state => {
      if (pageName == 'myPosts') {
         return state.myPosts
      }

      return state.posts
   })

   useEffect(() => {
      if (pageName == 'myPosts') {
         dispatch(fetchMyPosts({pageNumber, search: searchValue, ordering: selectedSortOption}))
      } else {
         dispatch(getPosts({pageNumber, search: searchValue, ordering: selectedSortOption}))
      }
   }, [dispatch, pageNumber, searchValue, selectedSortOption])

   function handleChangeSelected (value) {
      setSelectedSortOption(value)
   }

   function renderSearchPage () {
      if (data.length > 0) {
         return (
            <>
               <Sorting selected={selectedSortOption} onChange={handleChangeSelected}/>

               {data.map((post) => {
                  return <PostCardLg key={post.id} data={post} />
               })}

               <Pagination
                  pageNumber={pageNumber}
                  pagesCounter={pagesCounter}
                  baseUrl={`/${pageName}/search/`}
                  routeParameter={searchValue + '/'}
               />
            </>
            
         )
      } else {
         return <p>posts no found</p>
      }
   }

   if (loading) {
      return <p>Loading...</p>
   }

   if (error) {
      return <p>{error}</p>
   }

   return (
      <div>
         <h1>Search results</h1>

         {renderSearchPage()}
      </div>
   )
}