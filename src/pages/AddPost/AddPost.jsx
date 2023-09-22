import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { requestAddPost } from '../../services/posts.js'

export function AddPost() {
   const [title, setTitle] = useState('')
   const [LessonNumber, setLessonNumber] = useState('')
   const [image, setImage] = useState('')
   const [description, setDescription] = useState('')
   const [text, setText] = useState('')
   const [imagePreviewUrl, setImagePreviewUrl] = useState('')
   const inputImageRef = useRef()

   function handleChangeTitle (event) {
      setTitle(event.target.value)
   }

   function handleChangeLessonNumber (event) {
      setLessonNumber(event.target.value)
   }

   function handleChangeImage (event) {
      const file = event.target.files[0]
      setImagePreviewUrl(URL.createObjectURL(file))
      setImage(file)
   }

   function handleChangeDescription (event) {
      setDescription(event.target.value)
   }

   function handleChangeText (event) {
      setText(event.target.value)
   }

   function handleClickBtnClose () {
      setImage('')
      setImagePreviewUrl('')
      inputImageRef.current.value = null
   }

   async function handleSubmit (event) {
      event.preventDefault()

      const form = new FormData()
      form.append('title', title)
      form.append('lesson_num', LessonNumber)
      form.append('image', image)
      form.append('description', description)
      form.append('text', text)

      await requestAddPost(form)

      setTitle('')
      setLessonNumber('')
      setDescription('')
      setText('')
   }

   return (
      <div className="add-post d-flex flex-column">
         <div className="add-post__link-home d-flex mt-4">
            <Link to="/" className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover">
               Home
            </Link>
            <p className="ms-2 text-secondary">| add post</p>
         </div>

         <p className="fs-1 fw-bold">Add post</p>

         <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
               <label className="form-label">Title</label>
               <input
                  type="text"
                  className="form-control"
                  required
                  maxLength={250}
                  value={title}
                  onChange={handleChangeTitle}
               />
            </div>

            <div className="mb-4 d-flex align-items-end">
               <div>
                  <label className="form-label">Lesson number</label>
                  <input
                     type="number"
                     max={2147483647}
                     min={-2147483648}
                     className="form-control"
                     required
                     value={LessonNumber}
                     onChange={handleChangeLessonNumber}
                  />
               </div>
               <div className="ms-5">
                  <label className="form-label">Image</label>
                  <input
                     ref={inputImageRef}
                     className="form-control"
                     type="file"
                     required
                     accept="image/png, image/jpeg"
                     onChange={handleChangeImage}
                  />
               </div>
               {image && 
                  <button type="button" className="btn btn-sm btn-danger ms-3" onClick={handleClickBtnClose}>X</button>}
            </div>

            <div className="mb-4">
               <label className="form-label">Description</label>
               <textarea
                  className="form-control"
                  style={{ resize: 'none' }}
                  rows={3}
                  required
                  minLength={50}
                  value={description}
                  onChange={handleChangeDescription}
               />
            </div>

            <div className="mb-4">
               <label className="form-label">Text</label>
               <textarea
                  className="form-control"
                  style={{ resize: 'none' }}
                  rows={6}
                  required
                  minLength={200}
                  value={text}
                  onChange={handleChangeText} />
            </div>

            <button type="submit" className="btn btn-primary float-end mb-5">Create post</button>

            {imagePreviewUrl &&
               <div>
                  <h2 className="mt-3">Image preview</h2>
                  <img src={imagePreviewUrl} className='w-50 mb-3' />
               </div>}
         </form>
      </div>
   )
}