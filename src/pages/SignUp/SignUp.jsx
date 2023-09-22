import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRegistration } from '../../redux/authSlice.js'
import { languages } from '../../config/TranslateLanguages/languages.js'
// import { requestSignUp } from '../../services/auth.js'
import './signUp.scss'

export function SignUp() {
   const [username, setUserName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   // const [confirmPassword, setConfirmPassword] = useState('')

   const dispatch = useDispatch()

   const language = useSelector(state => {
      return state.language.value
   })

   function handleChangeUserName(event) {
      setUserName(event.target.value)
   }

   function handleChangeEmail(event) {
      setEmail(event.target.value)
   }

   function handleChangePassword(event) {
      setPassword(event.target.value)
   }

   // function handleChangeConfirmPassword(event) {
   //    setConfirmPassword(event.target.value)
   // }

   function handleSubmit(event) {
      event.preventDefault()

      const dataUser = {
         username,
         email,
         password,
      }
      
      dispatch(fetchRegistration(dataUser))

      setUserName('')
      setEmail('')
      setPassword('')
      // setConfirmPassword('')
   }

   return (
      <div className="sign-up__container">
         <div className='sign-up__link-home'>
            <Link to="/">
               {languages[language].signUp.navHome}
            </Link>
         </div>
         <p className='sign-up__title'>
            {languages[language].signUp.title}
         </p>
         <div className='sign-up__content'>
            <form onSubmit={handleSubmit} className='sign-up__form' action="#">
               <label htmlFor="text">
                  {languages[language].signUp.form.userName}
               </label>
               <input onChange={handleChangeUserName} value={username} type="text" placeholder={languages[language].signUp.form.namePlaceholder} />

               <label htmlFor="email">
                  {languages[language].signUp.form.email}
               </label>
               <input onChange={handleChangeEmail} value={email} type="email" placeholder={languages[language].signUp.form.emailPlaceholder} />

               <label htmlFor="password">
                  {languages[language].signUp.form.password}
               </label>
               <input onChange={handleChangePassword} value={password} type="password" placeholder={languages[language].signUp.form.passwordPlaceholder} />

               {/* <label htmlFor="password">
                  {languages[language].signUp.form.confirmPassword}
               </label>
               <input onChange={handleChangeConfirmPassword} value={confirmPassword} type="password" placeholder={languages[language].signUp.form.confirmPasswordPlaceholder} /> */}

               <button className='sign-up__form_submit btn btn-primary' type="submit">
                  {languages[language].signUp.form.submit}
               </button>
               <div className='sign-up__link-sign-in'>
                  {languages[language].signUp.form.textBeforeLink} 
                  <Link to="/signIn">
                     {languages[language].signUp.form.linkToSignIn}
                  </Link>
               </div>
            </form>
         </div>
      </div>
   )
}