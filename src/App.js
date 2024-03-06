import "./App.css";
// cdn
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
// components
import { Sidemenu } from "./components/common/sidemenu/Sidemenu";
import Table from "./components/common/design/Table";
import Card from "./components/common/design/Card";

function App() {
  return (
    <div className="App">
      <Sidemenu />
     <Table />
     <Card />
    </div>
  );
}

export default App;
