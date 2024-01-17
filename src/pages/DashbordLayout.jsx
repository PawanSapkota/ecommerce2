import React from 'react'
import { Outlet } from 'react-router-dom'

const DashbordLayout = () => {
  return (
    <div>
        <Sidebar/>
        <div>
            <Outlet/>
            <footer/>
        </div>
    </div>
  )
}

export default DashbordLayout