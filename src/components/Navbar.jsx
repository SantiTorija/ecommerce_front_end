import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

import OffCanvasCart from "./OffCanvasCart";

function NavBar() {
  return (
    <Navbar className="navbar sticky-top" expand="lg">
      <Container
        fluid
        className="navbar-container d-flex justify-content-between py-2"
      >
        <div className="d-flex">
          <Navbar.Brand className="text-light nav-brand-icon">
            Hackwines
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
              <Link className="navbar-link me-3" to={"/sobre-este-proyecto"}>
                Sobre este proyecto
              </Link>
              <Link className="navbar-link me-3" to={"/contacto"}>
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        <OffCanvasCart placement={"end"} name={"end"} />
      </Container>
    </Navbar>
  );
}

export default NavBar;
