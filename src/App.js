import React from "react";
import "./App.css";

// cdn
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";

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
import Dashboard from "./components/pages/dashboard/Dashboard";
import PublicLayout from "./components/Layout/PublicLayout";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { AllRoutes } from "./router";
import { ChangePassword } from "./components/Auth/ChangePassword";

function App() {

  return (
    <div className="App">
      
      {/* <Sidemenu /> */}
      {/* <Table /> */}
      {/* <Card /> */}
      {/* <Forms /> */}
      {/* <Card/> */}
      {/* <Button/> */}
      {/* <Sidemenu /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      
       <Routes>

      <Route element={<ReqireAuth/>}>
        <Route path="/" element={<Dashboard/>} />
      </Route>


      <Route element={<PublicLayout/>}>

        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/changepassword" element={<ChangePassword/>} />

      </Route>
     </Routes>



     
    

      {/* <Login /> */}
    </div>
  );
}

export default App;
