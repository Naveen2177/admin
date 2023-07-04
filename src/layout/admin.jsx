import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/menu'

const Admin = () => {
  return (
    <div className=' px-2'>
      <Menu/>
      <div>
        <Outlet/>
      </div>

    </div>
  )
}

export default Admin