import "./App.css";
// cdn
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
// components
import { Sidemenu } from "./components/common/sidemenu/Sidemenu";
import { Login } from "./components/Auth/Login";

function App() {
  return (
    <div className="App">
      <Sidemenu />
      {/* <Login /> */}
    </div>
  );
}

export default App;
