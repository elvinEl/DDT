import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Whatsapp from '../components/fixedButtons/Whatsapp'
import ScrollTop from '../components/fixedButtons/ScrollTop'
import ScrollToTop from '../components/scroll/ScrollToTop'
import CircularNavigation from '../components/fixedButtons/CircularNavigation'

function RootLayout() {
  return (
    <div>
        <Header/>
        <ScrollToTop/>
        <main>
            <Outlet/>
            <Whatsapp/>
            {/* <CircularNavigation/> */}
            <ScrollTop/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout