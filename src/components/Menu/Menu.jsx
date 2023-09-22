import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './menu.scss'

export function Menu () {
   const [show, setShow] = useState(false)

   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)
   
   return (
      <>
      <Button variant="primary" style={{background: 'blue', borderColor: 'blue'}} onClick={handleShow}>
         menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>menu</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            <ul className="navbar-nav">
               <li className="nav-item menu-item">
                  <NavLink onClick={handleClose} className="nav-link" to="/">Post List</NavLink>
               </li>
               <li className="nav-item menu-item">
                  <NavLink onClick={handleClose} className="nav-link" to="/myPosts/pages/1">My posts</NavLink>
               </li>

               <li className="nav-item menu-item">
                  <NavLink onClick={handleClose} className="nav-link" to="/add-post">Add post</NavLink>
               </li>
            </ul>
         </Offcanvas.Body>
      </Offcanvas>
    </>
   )
}