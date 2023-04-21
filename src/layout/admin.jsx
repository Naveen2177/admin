import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/menu'

const Admin = () => {
  return (
    <div className='d-flex px-2'>
      <Menu className=''/>
      <div>
        <Outlet/>
      </div>

    </div>
  )
}

export default Admin