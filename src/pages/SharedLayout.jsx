
import React from 'react'
import {Navbar, Footer} from "../components"
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
        <Navbar/>
        <div className='mx-auto'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default SharedLayout