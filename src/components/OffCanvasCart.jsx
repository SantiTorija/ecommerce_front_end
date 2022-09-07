import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GrCart } from "react-icons/gr";
import "../styles/offCanvasNav.css";

function OffCanvasCart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <button onClick={handleShow} className="me-4 off-canvas-navbar-button">
        <GrCart style={{ color: "white", fontSize: "1.5rem" }} />
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCart;
