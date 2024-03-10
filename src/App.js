// import React from "react";
import "./App.css";
// components
import { Sidemenu } from "./components/common/sidemenu/Sidemenu";
import { Routes, Route } from "react-router-dom";
import ReqireAuth from "./components/Layout/ReqireAuth";
import PublicAuth from "./components/Layout/PublicAuth";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PublicLayout from "./components/Layout/PublicLayout";
import { Topbar } from "./components/common/topbar/Topbar";
import React, { useContext, useState } from "react";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { AllRoutes } from "./router";
import { ChangePassword } from "./components/Auth/ChangePassword";
import { LockScreen } from "./components/Auth/LockScreen";
import Card from "./components/common/design/Card";
import Table from "./components/common/design/Table";
import Forms from "./components/common/design/Forms";
import WhatsappChat from "./components/common/design/WhatsappChat";
import Accordian from "./components/common/design/Accordian";
import Tab from "./components/common/design/Tab";
import Modal from "./components/common/design/Modal";
import Page from "./components/common/design/Page";
import Button from "./components/common/design/Button";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="App">
      <Sidemenu
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div style={{ marginBottom: "50px", backgroundColor: "white" }}></div>
      <main className="content" style={{ overflow: "auto" }}>
        <Topbar
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          toggleSidebar={toggleSidebar}
        />

        <div className="mt-5 pt-5">
          <Routes>
            <Route path="/table" element={<Table />} />
            <Route path="/card" element={<Card />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/whatsapp" element={<WhatsappChat/>} />
            <Route path="/accordian" element={<Accordian />} />
            <Route path="/tabs" element={<Tab />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/page" element={<Page />} />
            <Route path="/button" element={<Button />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
{
  /* <Routes>
        <Route element={<ReqireAuth />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/lockscreen" element={<LockScreen />} />
        </Route>
      </Routes> */
}
