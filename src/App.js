import { Route, Routes } from "react-router";
import "./App.css";
import Wine from "./pages/Wine";
import { Home } from "./pages/Home";
import Shop from "./pages/Shop";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.latiendavinos.es/wp-content/uploads/2022/02/base-madera.webp")`,
      }}
      className="App"
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Shop />} />
        <Route path="/product/:slug" element={<Wine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
