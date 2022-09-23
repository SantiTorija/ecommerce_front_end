import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import OffCanvasCart from "./OffCanvasCart";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "./LoginModal";
import { useState, useEffect } from "react";
import RegisterModal from "./RegisterModal";
import MenuModal from "../components/MenuModal";
import { useSelector } from "react-redux";
import { Person } from "react-bootstrap-icons";

function NavBarV2({ setShowCart, showCart, modalLoginShow, setModalLoginShow }) {
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [show, handleShow] = useState(false);
  const userState = useSelector((state) => state.user);

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
          <Link className="navbar-link navbar-responsive pe-5" to="/sobreEsteProyecto">
            Sobre este Proyecto
          </Link>
          <div className="d-flex align-items-center d-md-none  ">
            <MenuModal className="hamburguerIcon" />
            {userState.token ? (
              <Link className="button__person me-4 ps-2" to="/miPerfil/misDatos">
                <Person color="#F0F0F0" size={25} />
              </Link>
            ) : (
              <button className=" button__person me-4 d-block d-md-none">
                <Person color="#F0F0F0" size={25} onClick={() => setModalLoginShow(true)} />
              </button>
            )}
            <OffCanvasCart
              placement={"end"}
              name={"end"}
              setShowCart={setShowCart}
              showCart={showCart}
            />
          </div>
        </div>

        <div className="d-none d-md-flex align-items-center justify-content-between  headerIcons ">
          <RegisterModal
            modalRegisterShow={modalRegisterShow}
            setModalRegisterShow={setModalRegisterShow}
            setModalLoginShow={setModalLoginShow}
          />
          {userState.token ? (
            <Link className="button__person me-4" to="/miPerfil/misDatos">
              <Person color="#F0F0F0" size={25} />
            </Link>
          ) : (
            <button className=" button__person me-4">
              <Person color="#F0F0F0" size={25} onClick={() => setModalLoginShow(true)} />
            </button>
          )}
          <LoginModal
            modalRegisterShow={modalRegisterShow}
            setModalRegisterShow={setModalRegisterShow}
            setModalLoginShow={setModalLoginShow}
            show={modalLoginShow}
            onHide={() => setModalLoginShow(false)}
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
