import handleAlert from "./Alert";
import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import OffCanvasCart from "./OffCanvasCart";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Search } from "react-bootstrap-icons";
import LoginModal from "../components/LoginModal";
import { useState, useEffect } from "react";
import RegisterModal from "./RegisterModal";
import MenuModal from "../components/MenuModal";

function NavBarV2({ setShowCart, showCart, modalLoginShow, setModalLoginShow }) {
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <Navbar
      className={`Nav text-white py-3 ${show && "nav_black"}`}
      style={{
        position: "fixed",
        top: "0px",
        zIndex: 100,
        height: "5rem",
        width: "100%",
        padding: "30px",
      }}
    >
      <Container id="header" className="container w-100 d-flex justify-content-between">
        <img alt="hackWinesLogo" src={newHackWinesLogo} />

        <div className="menu-section align-items-center justify-content-center gap-2 linkSection d-flex">
          <Link className="navbar-link navbar-responsive" to={"/"}>
            Home
          </Link>
          <h5 className="m-0 navbar-responsive">·</h5>
          <Link className="navbar-link navbar-responsive" to={"/tienda/todos"}>
            Tienda
          </Link>
          <h5 className="m-0 navbar-responsive">·</h5>
          <Link className="navbar-link navbar-responsive" to="/aboutThisProyect">
            Sobre este Proyecto
          </Link>
          <h5 className="m-0 navbar-responsive ">·</h5>
          <Link
            className="navbar-link navbar-responsive"
            to={""}
            onClick={() => handleAlert("Estamos trabajando en esta página, gracias por entender ")}
          >
            Contacto
          </Link>
          <MenuModal className="hamburguerIcon" />
        </div>

        <div className=" d-flex align-items-center justify-content-between  headerIcons ">
          <Link to={""}>
            <Search
              onClick={() => handleAlert("Esta funcionalidad esta fuera del alcance del proyecto")}
              color="rgba(240, 240, 240, 0.799)"
              className="me-4"
              size={19}
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Link>
          <RegisterModal
            modalRegisterShow={modalRegisterShow}
            setModalRegisterShow={setModalRegisterShow}
            setModalLoginShow={setModalLoginShow}
          />
          <LoginModal
            modalLoginShow={modalLoginShow}
            setModalLoginShow={setModalLoginShow}
            modalRegisterShow={modalRegisterShow}
            setModalRegisterShow={setModalRegisterShow}
          />
          <OffCanvasCart
            placement={"end"}
            name={"end"}
            setShowCart={setShowCart}
            showCart={showCart}
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarV2;
