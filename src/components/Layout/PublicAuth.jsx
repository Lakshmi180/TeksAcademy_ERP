import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidemenu } from '../common/sidemenu/Sidemenu'
import { Topbar } from '../common/topbar/Topbar'

function PublicAuth() {
  return (
    <div className='app'>
      <Sidemenu/>
      <main>
        <Topbar/>
        <Outlet/>
      </main>
      
    </div>
  )
}

export default PublicAuth;