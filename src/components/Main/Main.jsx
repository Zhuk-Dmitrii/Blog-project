import React from 'react'
import './main.scss'

export class Main extends React.Component {
   render () {
      return (
         <main className="main">
            {this.props.children}
         </main>
      )
   }
}