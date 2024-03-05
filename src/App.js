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


function App() {
  return (
    <div className="App">
      <Sidemenu />
   

    {/* <Routes>
      <Route element={<ReqireAuth/>}>

     
      </Route>
      <Route element={<PublicAuth/>}>


      </Route>

    </Routes> */}


      {/* <Login /> */}
    </div>


  




  );
}

export default App;
