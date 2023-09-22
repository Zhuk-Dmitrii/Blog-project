import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import imgSearch from '../../images/search.svg'

export function Search () {
   const [inputShow, setInputShow] = useState(false)
   const [inputSearch, setInputSearch] = useState('')
   const inputSearchRef = useRef(null)
   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      function handleClickOutside(event) {
        if (inputSearchRef.current && !inputSearchRef.current.contains(event.target)) {
          setInputShow(false)
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside)
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

   function handleClickButton () {
      setInputShow(!inputShow)

      setTimeout(() => {
         if (inputSearchRef.current) {
            inputSearchRef.current.focus();
         }
      }, 0)
   }

   function handleChangeSearch (event) {
      const value = event.target.value
      setInputSearch(value)
   }

   function handleSubmit (event) {
      event.preventDefault()

      if (location.pathname.includes('myPosts') && inputSearch.trim() != '') {
         navigate(`/myPosts/search/${inputSearch}/1`)
      } else if (inputSearch.trim() != '') {
         navigate(`posts/search/${inputSearch}/1`)
      }

      setInputSearch('')
      setInputShow(false)
   }

   return (
      <>
         <nav className="navbar d-flex flex-grow-1 flex-nowrap justify-content-end">
            <div className="container-fluid">
               <form onSubmit={handleSubmit} className="d-flex flex-grow-1" role="search">
                  {inputShow && <input ref={inputSearchRef} onChange={handleChangeSearch} value={inputSearch} className="form-control me-2" type="search" placeholder="Search" />}
               </form>
            </div>
            <button onClick={handleClickButton} className="btn btn-primary">
               <img src={imgSearch} alt="" />
            </button>
         </nav>
      </>
   )
}