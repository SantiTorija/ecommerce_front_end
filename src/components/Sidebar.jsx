import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/sidebar.css";
import OffCanvasFilter from "./OffCanvasFilter";

function Sidebar() {
  const props = {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  };
  return (
    <Navbar className="sidebar-left mt-5" expand="lg">
      <Container className="sidebar-container py-2">
        <OffCanvasFilter {...props} />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
