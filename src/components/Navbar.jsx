import handleAlert from "./Alert";
import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import OffCanvasCart from "./OffCanvasCart";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Search, List } from "react-bootstrap-icons";
import LoginModal from "../components/LoginModal";
import { useState, useEffect } from "react";
import RegisterModal from "./RegisterModal";

function NavBarV2({ setShowCart, showCart }) {
  const [modalLoginShow, setModalLoginShow] = useState(false);
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
      className={`Nav d-flex justify-content-between text-white py-3 ${show && "nav_black"}`}
      style={{
        position: "fixed",
        top: "0px",
        zIndex: 100,
        height: "5rem",
        width: "100%",
        padding: "30px",
      }}
    >
      <Container id="header" className="container">
        <Row className="d-flex justify-content-between w-100">
          <Col className="col-2">
            <img alt="hackWinesLogo" src={newHackWinesLogo} />
          </Col>
          <Col className="col-8 d-flex align-items-center  justify-content-center">
            <Nav className="menu-section align-items-center justify-content-center gap-2 linkSection">
              <Link className="navbar-link" to={"/"}>
                Home
              </Link>
              <h5 className="m-0 navbar-link">·</h5>
              <Link className="navbar-link" to={"/tienda"}>
                Tienda
              </Link>
              <h5 className="m-0 navbar-link">·</h5>
              <Link className="navbar-link" to="/aboutThisProyect">
                Sobre este Proyecto
              </Link>
              <h5 className="m-0 navbar-link">·</h5>
              <Link className="navbar-link" to={"/contacto"}>
                Contacto
              </Link>
              {/* <List id="hamburguerIcon" /> */}
            </Nav>
          </Col>
          <Col className="col-2 d-flex align-items-center  justify-content-between ">
            <Link to={""}>
              <Search
                onClick={handleAlert}
                color="rgba(240, 240, 240, 0.799)"
                size={18}
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
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBarV2;
