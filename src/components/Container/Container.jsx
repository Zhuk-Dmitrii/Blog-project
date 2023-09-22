import React from 'react'
import './container.scss'

export class Container extends React.Component {
   styleModifier = this.props.footer ? 'footer-container' : 'main-container'
   containerStyle = `${this.styleModifier} container-fluid`
   
   render() {
      return (
         <div className={this.containerStyle}>
            {this.props.children}
         </div>
      )
   }
}