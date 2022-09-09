import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import hackWines from "../assets/images/hackWines.png";
import OffCanvasCart from "./OffCanvasCart";
import handleAlert from "./Alert";

function NavBar({ setShowCart, showCart }) {
  return (
    <Navbar className="navbar sticky-top" expand="lg">
      <Container className="navbar-container d-flex justify-content-between py-2">
        <div className="d-flex">
          <Navbar.Brand className="text-light nav-brand-icon">
            <img alt="" src={hackWines} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="navbar-link me-3 ms-3" to={"/"}>
                Home
              </Link>
              <Link className="navbar-link me-3" to={"/tienda"}>
                Tienda
              </Link>
              <Link className="navbar-link me-3" to="" onClick={handleAlert}>
                Sobre este proyecto
              </Link>
              <Link className="navbar-link me-3" to="" onClick={handleAlert}>
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <OffCanvasCart
          placement={"end"}
          name={"end"}
          setShowCart={setShowCart}
          showCart={showCart}
        />
      </Container>
    </Navbar>
  );
}
export default NavBar;
