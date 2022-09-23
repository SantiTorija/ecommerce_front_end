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
import AboutThisProyect from "./pages/AboutThisProyect";
import Perfil from "./pages/Perfil";
import ProtectedRoute from "./components/PrivateRoutes";
import OffCanvasAboutUs from "./components/OffCanvasAboutUs";
import WelcomeModal from "./components/WelcomeModal";
import { useEffect, useRef, useState } from "react";
import ThanksOrder from "./pages/ThanksOrder";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);

  const [show, setShow] = useState(false);

  function useDidMountEffect(func) {
    const didMount = useRef(true);

    useEffect(() => {
      if (didMount.current) setShow(true);
      else didMount.current = false;
    }, []);
  }

  useDidMountEffect();
  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(rgba(19,19,19,0.5) 10%, rgba(19,19,19,0.9) 100%),url(${texturadoNegro})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <WelcomeModal show={show} onHide={() => setShow(true)} setShow={setShow} />
      <NavBar
        showCart={showCart}
        setShowCart={setShowCart}
        modalLoginShow={modalLoginShow}
        setModalLoginShow={setModalLoginShow}
      />
      <OffCanvasAboutUs placement={"end"} setModalLoginShow={setModalLoginShow} />
      <Routes>
        <Route path="/" element={<Home setShowCart={setShowCart} />} />
        <Route path="/tienda/:type" element={<Shop setShowCart={setShowCart} />} />
        <Route path="/cart" element={<Cart setModalLoginShow={setModalLoginShow} />} />
        <Route path="/sobreEsteProyecto" element={<AboutThisProyect />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/miPerfil/:seccion" element={<Perfil />} />
        </Route>
        <Route path="/product/:slug" element={<Wine setShowCart={setShowCart} />} />
        <Route path="/orderComplete" element={<ThanksOrder />} />
        <Route path="*" element={<Home setShowCart={setShowCart} />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
