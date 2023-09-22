import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/authSlice.js'

export function UserThumbnail () {
   const { dataUser } = useSelector(state => state.auth)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchUser())
   }, [dispatch])

   return (
      <div className="d-flex align-items-center p-3">
         <NavLink to='/signIn'>
            <Image src={dataUser.image} height={40} width={40} rounded />
         </NavLink>
         <div className="ms-3 d-flex flex-column">
            <p className="m-0 text-light">{dataUser.username}</p>
            <p className="m-0 text-light">{dataUser.email}</p>
         </div>
      </div>
   )
}