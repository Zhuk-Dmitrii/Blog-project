import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { languages } from '../../config/TranslateLanguages/languages.js'
import { fetchSignIn, fetchUser, setStatusReset, setErrorReset } from '../../redux/authSlice.js'
import './signIn.scss'

export function SignIn () {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigate = useNavigate()

   const language = useSelector(state => state.language.value)
   const { loading, status, error } = useSelector(state => state.auth)

   const dispatch = useDispatch()

   useEffect(() => {
      if (error) {
         alert(error)
         navigate('/signIn')
         dispatch(setErrorReset(null))
      } else if (status) {
         dispatch(fetchUser())
         navigate('/')
         dispatch(setStatusReset(false))
      }


   }, [dispatch, error, navigate, status])

   function handleChangeEmail (event) {
      setEmail(event.target.value)
   }

   function handleChangePassword (event) {
      setPassword(event.target.value)
   }

   function handleSubmit (event) {
      event.preventDefault()

      const data = {
         email,
         password
      }

      dispatch(fetchSignIn(data))

      setEmail('')
      setPassword('')
   }

   if (loading) {
      return <p>Loading...</p>
   }

   return (
      <div className="sign-in__container">
         <div className='sign-in__link-home'>
            <Link to="/">
               {languages[language].signIn.navHome}
            </Link>
         </div>
         <p className='sign-in__title'>
            {languages[language].signIn.title}
         </p>
         <div className='sign-in__content'>
            <form onSubmit={handleSubmit} className='sign-in__form' action="#">
               <label htmlFor="email">
                  {languages[language].signIn.form.email}
               </label>
               <input onChange={handleChangeEmail} value={email} type="email" placeholder={languages[language].signIn.form.emailPlaceholder} />

               <label htmlFor="password">
                  {languages[language].signIn.form.password}
               </label>
               <input onChange={handleChangePassword} value={password} type="password" placeholder={languages[language].signIn.form.passwordPlaceholder} />
               
               <div className='sign-in__link-forgot-password'>
                  <a href="#">
                     {languages[language].signIn.form.ForgotPassword}
                  </a>
               </div>
               <button className='sign-in__form-submit btn btn-primary' type="submit">
                  {languages[language].signIn.form.submit}
               </button>
               <div className='sign-in__link-sign-up'>
                  {languages[language].signIn.form.textBeforeLink} 
                  <Link to="/signUp">
                     {languages[language].signIn.form.linkToSignUp}
                  </Link>
               </div>
            </form>
         </div>
      </div>
   )
}