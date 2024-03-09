// import React from "react";
import "./App.css";
// components
import { Sidemenu } from "./components/common/sidemenu/Sidemenu";
import Table from "./components/common/design/Table";
// import Card from "./components/common/design/Card";
import { Login } from "./components/Auth/Login";
import Forms from "./components/common/design/Forms";

import Button from "./components/common/design/Button";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ReqireAuth from "./components/Layout/ReqireAuth";
import PublicAuth from "./components/Layout/PublicAuth";

// import { Login } from "./components/Auth/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PublicLayout from "./components/Layout/PublicLayout";
import WhatsppChat from "./components/common/design/WhatsappChat";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PublicLayout from "./components/Layout/PublicLayout";
import { Topbar } from "./components/common/topbar/Topbar";
import React, { useContext, useState } from "react";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { AllRoutes } from "./router";
import { ChangePassword } from "./components/Auth/ChangePassword";
import { LockScreen } from "./components/Auth/LockScreen";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="App">
      {/* <Sidemenu /> */}
     {/* <Table /> */}
     {/* <Card />  */}
       <Forms /> 
    {/* <Card/> */}
    {/* <Button/> */}
      {/* <Sidemenu /> */}
      {/* <Login /> */}
        {/* <WhatsppChat /> */}
      {/* <Routes>
      <Route element={<ReqireAuth/>}>
        <Route path="/" element={<Dashboard/>} />
      </Route>


      <Route element={<PublicLayout/>}>
        <Route path="/login" element={<Login/>}/>
      </Route>

    </Routes>



     
      </Route>
      <Route element={<PublicAuth/>}>


      </Route>

    </Routes> */}

      {/* <Login /> */}
      {/* <Table /> */}
      {/* <Card /> */}
      {/* <Forms /> */}
      {/* <Card/> */}
      {/* <Button/> */}
      {/* <Sidemenu /> */}
      {/* <Login />
      <ForgotPassword />
      <ChangePassword /> */}

      <div className="app">
        <Sidemenu
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          toggleSidebar={toggleSidebar}
        />
        <main className="">
          <Topbar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            toggleSidebar={toggleSidebar}
          />
        </main>
      </div>
      <Routes>
        <Route element={<ReqireAuth />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/lockscreen" element={<LockScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
