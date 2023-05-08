import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Whatsapp from '../components/fixedButtons/Whatsapp'
import ScrollTop from '../components/fixedButtons/ScrollTop'

function RootLayout() {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
            <Whatsapp/>
            <ScrollTop/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout