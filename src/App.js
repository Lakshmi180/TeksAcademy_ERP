import React from "react";
import "./App.css";

// cdn
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
// components
import { Sidemenu } from "./components/common/sidemenu/Sidemenu";
import Table from "./components/common/design/Table";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ReqireAuth from "./components/Layout/ReqireAuth";
import PublicAuth from "./components/Layout/PublicAuth";
import { Login } from "./components/Auth/Login";

import Forms from "./components/common/design/Forms";
import Card from "./components/common/design/Card";
import Button from "./components/common/design/Button";

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <Sidemenu />
        <Router>
          <Routes>
            <Route path="/card" element={<Card />} />
            {/* <Route path="/" exact element={<App />} />
            <Route path="/table" element={<Table />} />
           
            <Route path="/button" element={<Button />} />
            <Route path="/forms" element={<Forms />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
