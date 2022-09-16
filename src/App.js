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
import Perfil from "./pages/Perfil";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(rgba(19,19,19,0.5) 10%, rgba(19,19,19,0.9) 100%),url(${texturadoNegro})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar
        showCart={showCart}
        setShowCart={setShowCart}
        modalLoginShow={modalLoginShow}
        setModalLoginShow={setModalLoginShow}
      />
      <Routes>
        <Route path="/" element={<Home setShowCart={setShowCart} />} />
        <Route path="/tienda/:type" element={<Shop setShowCart={setShowCart} />} />
        <Route path="/cart" element={<Cart setModalLoginShow={setModalLoginShow} />} />
        <Route path="/aboutThisProyect" element={<AboutThisProyect />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/miPerfil/:seccion" element={<Perfil />} />
        <Route path="/product/:slug" element={<Wine setShowCart={setShowCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
