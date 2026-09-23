import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../home/Navbar'

function MainLayout({ cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <Outlet />
    </>
  )
}

export default MainLayout
