import React from 'react'
import { Container } from '../Container/Container'
import './footer.scss'

export class Footer extends React.Component {
   render () {
      return (
         <footer className="footer">
            <Container footer>
               <p className="footer-text">
                  ©2022 Blogfolio
               </p>
               <p className="footer-text">
                  All rights reserved
               </p>
            </Container>
         </footer>
      )
   }
}