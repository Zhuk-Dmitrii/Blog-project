import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addPost, removePost } from '../../redux/favoriteSlice.js'
import { getJWTToken } from '../../helpers/getJWTToken.js'
import Bookmark from '../../images/Icon-Bookmark.svg'
import './postCardLg.scss'

export function PostCardLg (props) {
   const token = getJWTToken('jwtAccessToken')
   const link = (token == null) ? '/signIn' : `/post/${props.data.id}`
   const [checked, setChecked] = useState(false)
   const dispatch = useDispatch()

   function handleClickBookmark () {
      if (checked) {
         dispatch(removePost(props.data))
      } else {
         dispatch(addPost(props.data))
      }
      setChecked(prevChecked => !prevChecked)
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
            <Link to={link} className="post-card-lg__image image-post-card">
               <img src={props.data.image} alt="" />
            </Link>
         </div>

         <div className='post-card-lg__icons'>
            <div className='icons_bookmark'>
               <input type="checkbox" className="btn-check" id={props.data.id} checked={checked} onChange={handleClickBookmark}/>
               <label className="btn btn-outline-secondary p-0 border-0" htmlFor={props.data.id}>
                  <img src={Bookmark} alt="" />
               </label>
            </div>
         </div>
      </div>
   )
}