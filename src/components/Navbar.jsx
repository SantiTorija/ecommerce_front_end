import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";

function BasicExample() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>
            <Nav.Link href="#link">Sobre nosotros</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">Hackwines</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
