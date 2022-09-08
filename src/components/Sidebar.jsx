import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <Navbar className="sidebar-left mt-5" expand="lg">
      <Container className="sidebar-container pt-3 ">
        <Navbar.Brand
          className="d-none d-lg-block me-5"
          style={{ color: "rgba(240, 240, 240, 0.799)" }}
        >
          Que vino buscas?
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
