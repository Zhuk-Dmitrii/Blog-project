import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
// import { fetchPosts } from '../../redux/postsSlice.js'
import { getPosts } from '../../redux/postsSlice.js'
import { FavoritePost } from '../../components/FavoritePost/FavoritePost'
import { PostCardLg } from '../../components/PostCardLg/PostCardLg'
import { Sorting } from '../../components/Sorting/Sorting.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx'
import { getJWTToken } from '../../helpers/getJWTToken.js'
import './postList.scss'

export function PostList () {
   const token = getJWTToken('jwtAccessToken')
   const [keyTab, setKeyTab] = useState('All')
   const [selectedSortOption, setSelectedSortOption] = useState('date')
   const { pageNumber } = useParams()
   const favorites = useSelector(state => state.favorite.data)
   const { data, pagesCounter, loading, error } = useSelector(state => state.posts)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getPosts({pageNumber, ordering: selectedSortOption}))
   }, [dispatch, pageNumber, selectedSortOption])

   function handleSortingChange (value) {
      setSelectedSortOption(value)
   }

   function renderPosts () {
      if (data != null) {
         return (
            <>
               {token == null ? 
                  <Sorting selected={selectedSortOption} onChange={handleSortingChange} disabled={true}/> :
                  <Sorting selected={selectedSortOption} onChange={handleSortingChange} disabled={false}/>}

               {data.map((post) => {
                  return <PostCardLg key={post.id} data={post} />
               })}
            </>
         )
      }
   }

   function renderFavoritesPosts () {
      return favorites.map((post) => {
         return <FavoritePost key={post.id} data={post} />
      })
   }

   if (loading) {
      return <p>Loading...</p>
   }

   if (error) {
      return <p>{error}</p>
   }

   return (
      <div>
         <Tabs id="controlled-tab-posts" activeKey={keyTab} onSelect={(k) => setKeyTab(k)} className="mb-2 mt-2">
            <Tab eventKey="All" title="All">
               {renderPosts()}

               <Pagination
                  pageNumber={pageNumber}
                  pagesCounter={pagesCounter}
                  baseUrl='/posts/pages/'
               />
            </Tab>

            <Tab eventKey="My favorites" title="My favorites">
               Tab content for My favorites
               {renderFavoritesPosts()}
            </Tab>

            <Tab eventKey="Popular" title="Popular">
               Tab content for Popular
            </Tab>
         </Tabs>
      </div>
   )
}