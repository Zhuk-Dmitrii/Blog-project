import React from 'react'
import './header.scss'

export class Header extends React.Component {
   render () {
      return (
         <header className="header">
            {this.props.children}
         </header>
      )
   }
}