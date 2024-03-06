import "./App.css";
// cdn
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
// components
import { Sidemenu } from "./components/common/sidemenu/Sidemenu";
import Table from "./components/common/design/Table";
// import Card from "./components/common/design/Card";
import Forms from "./components/common/design/Forms";
import Card from "./components/common/design/Card";
import Button from "./components/common/design/Button";

import { Route, Routes } from "react-router-dom";
import ReqireAuth from "./components/Layout/ReqireAuth";
import PublicAuth from "./components/Layout/PublicAuth";

import { Login } from "./components/Auth/Login";

function App() {
  return (
    <div className="App">
      {/* <Sidemenu /> */}
     <Table />
     {/* <Card /> */}
      {/* <Forms /> */}
    {/* <Card/> */}
    {/* <Button/> */}
      {/* <Sidemenu /> */}
      {/* <Login /> */}

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
