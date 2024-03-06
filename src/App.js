import "./App.css";
// cdn
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";

// components
import { Sidemenu } from "./components/common/sidemenu/Sidemenu";
import { Route, Routes } from "react-router-dom";
import ReqireAuth from "./components/Layout/ReqireAuth";
import PublicAuth from "./components/Layout/PublicAuth";

import { Login } from "./components/Auth/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PublicLayout from "./components/Layout/PublicLayout";


function App() {
  return (
    <div className="App">
   
   

    <Routes>

      <Route element={<ReqireAuth/>}>
        <Route path="/" element={<Dashboard/>} />
      </Route>


      <Route element={<PublicLayout/>}>
        <Route path="/login" element={<Login/>}/>
      </Route>

    </Routes>



     
    </div>


  




  );
}

export default App;
