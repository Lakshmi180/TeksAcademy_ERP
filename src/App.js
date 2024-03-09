import React from "react";
import "./App.css";

// cdn
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";

// components
import { Login } from "./components/Auth/Login";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ReqireAuth from "./components/Layout/ReqireAuth";
import PublicAuth from "./components/Layout/PublicAuth";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PublicLayout from "./components/Layout/PublicLayout";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { ChangePassword } from "./components/Auth/ChangePassword";
import { LockScreen } from "./components/Auth/LockScreen";

function App() {
  return (
    <div className="App">
      <Login />
      <ForgotPassword />
      <ChangePassword />
      <LockScreen />

      {/* <Routes>
        <Route element={<ReqireAuth />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
