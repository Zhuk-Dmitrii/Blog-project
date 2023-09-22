import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost } from '../../redux/postSlice'
import { setModal } from '../../redux/imageModalSlice.js'
import { ModalPreview} from '../../components/ModalPreview/ModalPreview.jsx'
import './post.scss'

export function Post() {
   const { postId } = useParams()
   const [showModal, toggleModal] = useState(false)
   const { post, loading, error } = useSelector(state => state.post)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchPost(postId))
   }, [dispatch])

   function handleClickImage () {
      toggleModal(true)
      dispatch(setModal(post.image))
   }

   function handleCloseModal () {
      toggleModal(false)
   }

   function renderPost () {
      return (
         <>
            <h1 className="selected-post__title">{post.title}</h1>
            <img onClick={handleClickImage} src={post.image} alt="#" className="selected-post__image img-fluid"/>
            <p className="selected-post__text">{post.text}</p>
            <p className="selected-post__description">{post.description}</p>
         </>
      )
   }

   if (loading) {
      return <p>Loading...</p>
   }

   if (error) {
      return <p>{error}</p>
   }

   return (
      <article className="selected-post">
         <nav className="selected-post__nav">
            <Link to="/">Home</Link> | <span>Post {postId} </span>
         </nav>
         {renderPost()}

         <ModalPreview show={showModal} close={handleCloseModal}/>
      </article>
   )
}