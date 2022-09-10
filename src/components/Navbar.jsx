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

function NavBarV2({ setShowCart, showCart }) {
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
              <Link className="navbar-link" to={"/tienda"}>
                Tienda
              </Link>
              <Link className="navbar-link" to="" onClick={handleAlert}>
                Sobre este Proyecto
              </Link>
              <Link className="navbar-link" to="" onClick={handleAlert}>
                Contacto
              </Link>
            </Nav>
          </Col>
          <Col className="col-2 d-flex align-items-center  justify-content-around ">
            <Search color="white" size={20} />
            <Person color="white" size={20} />
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
