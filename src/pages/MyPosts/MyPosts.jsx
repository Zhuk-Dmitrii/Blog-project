import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMyPosts } from '../../redux/myPostsSlice.js'
import { PostCardLg } from '../../components/PostCardLg/PostCardLg.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx'
import { Sorting } from '../../components/Sorting/Sorting.jsx'

export function MyPosts () {
   const [selectedSortOption, setSelectedSortOption] = useState('date')
   const { pageNumber } = useParams()
   const { data, pagesCounter, loading, error } = useSelector(state => state.myPosts)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchMyPosts({pageNumber, ordering: selectedSortOption}))
   }, [dispatch, pageNumber, selectedSortOption])

   function handleSortingChange (value) {
      setSelectedSortOption(value)
   }
   function renderMyPosts () {
      if (data) {
         return (
            <>
               <Sorting 
                  selected={selectedSortOption}
                  onChange={handleSortingChange}
               />

               {data.map((post) => {
                     return <PostCardLg key={post.id} data={post} />
               })}
            </>
         )
      }
   }

   if (loading) {
      return <div>Loading...</div>
   }

   if (error) {
      return <div>{error}</div>
   }

   return (
      <div>
         <p>My Posts</p>

         {renderMyPosts()}

         <Pagination
            pageNumber={pageNumber}
            pagesCounter={pagesCounter}
            baseUrl='/myPosts/pages/'
         />
      </div>
   )
}