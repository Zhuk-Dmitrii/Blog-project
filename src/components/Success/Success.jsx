import React from 'react'
import { Link } from 'react-router-dom'
import './success.scss'

export class Success extends React.Component{
   render() {
      return (
         <div className="success__container">
            <div className='success__link-home'>
               <Link to="/">Back to home</Link>
            </div>
            <p className='success__title'>Success</p>
            <div className='success__message'>
               <p className='success__message-text'>
                  Email confirmed. <br />
                  Your registration is now completed
               </p>
               <Link to="/" className='success__message-btn btn btn-primary'>
                  Go to home
               </Link>
            </div>
         </div>
      )
   }
}