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
import { Search, Person } from "react-bootstrap-icons";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import RegisterModal from "./RegisterModal";

function NavBarV2({ setShowCart, showCart }) {
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  return (
    <Navbar className="sticky-top">
      <Container id="header" className="container">
        <Row className="d-flex justify-content-between w-100">
          <Col className="col-2">
            <img alt="hackWinesLogo" src={newHackWinesLogo} />
          </Col>
          <Col className="col-8 d-flex align-items-center  justify-content-center">
            <Nav className="menu-section align-items-center justify-content-center gap-2">
              <Link className="navbar-link" to={"/"}>
                Home
              </Link>
              <h5>.</h5>
              <Link className="navbar-link" to={"/tienda"}>
                Tienda
              </Link>
              <h5>.</h5>
              <Link className="navbar-link" to="" onClick={handleAlert}>
                Sobre este Proyecto
              </Link>
              <h5>.</h5>
              <Link className="navbar-link" to="" onClick={handleAlert}>
                Contacto
              </Link>
            </Nav>
          </Col>
          <Col className="col-2 d-flex align-items-center  justify-content-around ">
            <Link to={""}>
              <Search color="rgba(240, 240, 240, 0.799)" size={20} />
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
            <Link to={""}>
              <OffCanvasCart
                placement={"end"}
                name={"end"}
                setShowCart={setShowCart}
                showCart={showCart}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBarV2;
