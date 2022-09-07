import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container className="navbar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>Home</Link>
            <Link to={""}>Tienda</Link>
            <Link to={""}>Sobre nosotros</Link>
            <Link to={""}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">Hackwines</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
