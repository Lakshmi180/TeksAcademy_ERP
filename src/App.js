// import React from "react";
import "./App.css";
// components
import { Sidemenu } from "./components/common/sidemenu/Sidemenu";
import Table from "./components/common/design/Table";
import { Login } from "./components/Auth/Login";
import Forms from "./components/common/design/Forms";
import Card from "./components/common/design/Card";
import Button from "./components/common/design/Button";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import ReqireAuth from "./components/Layout/ReqireAuth";
import PublicAuth from "./components/Layout/PublicAuth";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PublicLayout from "./components/Layout/PublicLayout";
import { Topbar } from "./components/common/topbar/Topbar";
import React, { useContext, useState } from "react";

function App() {
   const [isExpanded, setIsExpanded] = useState(true);

   const toggleSidebar = () => {
     setIsExpanded(!isExpanded);
   };
  return (
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
  );
}

export default App;
