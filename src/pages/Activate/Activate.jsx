import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchActivation } from '../../redux/authSlice.js'
// import { requestUserActivation } from '../../services/auth.js'
import { Success } from '../../components/Success/Success.jsx'

export function Activate () {
   const { uid, token } = useParams()
   const { loading, error } = useSelector(state => state.auth)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchActivation({ uid, token }))
   }, [dispatch, uid, token])

   if (loading) {
      return (
         <div>
            Activation...
         </div>
      )
   }

   if (error) {
      return (
         <div>
            {error}
         </div>
      )
   }

   return (
      <div>
         <Success />
      </div>
   )
}