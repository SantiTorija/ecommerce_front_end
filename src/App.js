import { Route, Routes } from "react-router";
import "./App.css";

import Wine from "./pages/Wine";
import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wines/:slug" element={<Wine />} />
      </Routes>
    </div>
  );
}

export default App;
