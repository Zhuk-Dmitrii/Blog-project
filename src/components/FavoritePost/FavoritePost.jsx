import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removePost } from '../../redux/favoriteSlice.js'
import Bookmark from '../../images/Icon-Bookmark.svg'
import '../PostCardLg/postCardLg.scss'

export function FavoritePost (props) {
   const dispatch = useDispatch()
   const [checked] = useState(true)

   function handleClickBookmark () {
         dispatch(removePost(props.data))
      }

   return (
      <div className="post-card-lg post-card">
         <div className='post-card-lg__content'>
            <div className="post-card-lg__info info">
               <p className="info__date">
                  {props.data.date}
               </p>
               <h2 className="info__title">
                  {props.data.title}
               </h2>
               <p className="info__description">
                  {props.data.description}
               </p>
            </div>
            <Link to={`/post/${props.data.id}`} className="post-card-lg__image image-post-card">
               <img src={props.data.image} alt="" />
            </Link>
         </div>

         <div className='post-card-lg__icons'>
            <div className='icons_bookmark'>
               <input type="checkbox" className="btn-check" id={props.data.id} checked={checked} onChange={handleClickBookmark}/>
               <label className="btn btn-outline-secondary p-0 border-0 active" htmlFor={props.data.id}>
                  <img src={Bookmark} alt="" />
               </label>
            </div>
         </div>
      </div>
   )
}