import React from 'react'
import { Outlet } from 'react-router-dom'

function PublicAuth() {
  return (
    <div className='app'>
      {/* <Sidemenu/> */}
      <main>
        {/* <Topbar/> */}
        <Outlet/>
      </main>
      

    </div>
  )
}

export default PublicAuth