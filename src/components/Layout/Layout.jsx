import React from 'react'
import { Header } from '../Header/Header.jsx'
import { Main } from '../Main/Main.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { Container } from '../Container/Container'
import { Outlet } from 'react-router-dom'
import { Menu } from '../Menu/Menu.jsx'
import { Search } from '../Search/Search.jsx'
import { ChangeLanguage } from '../ChangeLanguage/ChangeLanguage.jsx'
import { UserThumbnail } from '../UserThumbnail/UserThumbnail.jsx'
import './layout.scss'

export class Layout extends React.Component {
   render () {
      return (
         <div className="layout">
            <Header>
               <Menu />
               <Search />
               <ChangeLanguage />
               <UserThumbnail />
            </Header>

            <Main>
               <Container>
                  <Outlet />
               </Container>
            </Main>

            <Footer />
         </div>
      )
   }
}