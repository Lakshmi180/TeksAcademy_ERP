import React, { useState } from 'react'
import { Outlet, Routes } from 'react-router-dom'
import { Sidemenu } from '../common/sidemenu/Sidemenu'
import { Topbar } from '../common/topbar/Topbar';
// import "./PublicAuth.css"

// function PublicAuth() {
//   const [isExpanded, setIsExpanded] = useState  (true);

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };
//   return (
//     <div className='app' >

//    <div className='sidebarcss'>
//    <Sidemenu
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         toggleSidebar={toggleSidebar}
//       />

//    </div>

//       <main className='main-content'
//       >
//       <Topbar
//           isExpanded={isExpanded}
//           setIsExpanded={setIsExpanded}
//           toggleSidebar={toggleSidebar}
//         />
//         <Outlet/>

//       </main>

//       {/* <Sidemenu/>
//       <main>
//         <Topbar/>
//         <Outlet/>
//       </main> */}

//     </div>
//   )
// }

// export default PublicAuth;


function PublicAuth() {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="" >

      <Sidemenu
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        toggleSidebar={toggleSidebar}
      />


      <div style={{ marginBottom: "50px", backgroundColor: "white" }}></div>
      <main className="content" style={{ overflow: "hidden" }}>
        <Topbar
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          toggleSidebar={toggleSidebar}
        />
        <Outlet/>
      </main>

      {/* <Sidemenu/>
      <main>
        <Topbar/>
        <Outlet/>
      </main> */}

    </div>
  )
}

export default PublicAuth;