import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../../redux/languageSlice.js'
import './changeLanguage.scss'

export function ChangeLanguage () {
   const dispatch = useDispatch()
   const language = useSelector(state => {
      return state.language.value
   })

   function handleChangeLanguage (language) {
      dispatch(setLanguage(language))
   }

   return (
      <div className="header__change-language">
         <input type="radio" className="btn-check" name="options-outlined" id="change-language-en" onChange={() => handleChangeLanguage('en')} checked={language === 'en'} />
         <label className="change-language_en btn btn-outline-success" htmlFor="change-language-en">en</label>

         <input type="radio" className="btn-check" name="options-outlined" id="change-language-ru" onChange={() => handleChangeLanguage('ru')} checked={language === 'ru'} />
         <label className="change-language_ru btn btn-outline-success" htmlFor="change-language-ru">ru</label>
      </div>
   )
}