import { Route, Routes } from "react-router";
import "./App.css";
import Wine from "./pages/Wine";
import { Home } from "./pages/Home";
import Shop from "./pages/Shop";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import texturadoNegro from "./assets/images/fondonegrotexturado.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";
import { useState } from "react";
import AboutThisProyect from "./pages/AboutThisProyect";
import { Contact } from "./pages/Contact";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(rgba(11,11,11,0.9) 10%, rgba(11,11,11,0.9) 100%),url(${texturadoNegro})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar showCart={showCart} setShowCart={setShowCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Shop setShowCart={setShowCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutThisProyect" element={<AboutThisProyect />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/product/:slug" element={<Wine setShowCart={setShowCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
