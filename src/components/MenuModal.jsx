import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import "../styles/modal.css";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "../styles/mobileMenu.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="difuminado__modal"
    >
      <div className="mainMenuSection">
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <img alt="hackWinesLogo" src={newHackWinesLogo} className="mb-3" />

            <Nav className="menu-section align-items-center justify-content-center gap-2 linkSection ">
              <Link className="navbar-link" to={"/"}>
                Home
              </Link>

              <Link className="navbar-link" to={"/tienda"}>
                Tienda
              </Link>

              <Link className="navbar-link" to="/aboutThisProyect">
                Sobre este Proyecto
              </Link>

              <Link className="navbar-link" to={"/contacto"}>
                Contacto
              </Link>
            </Nav>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

function MenuModal() {
  const [showMenuModal, setShowMenuModal] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShowMenuModal(true)}>
        <List color="rgba(240, 240, 240, 0.799)" size={20} />
      </button>

      <MyVerticallyCenteredModal
        setShowMenuModal={setShowMenuModal}
        showMenuModal={showMenuModal}
        show={showMenuModal}
        onHide={() => setShowMenuModal(false)}
      />
    </>
  );
}

export default MenuModal;
