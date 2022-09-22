import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import "../styles/modal.css";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "../styles/mobileMenu.css";

function MyVerticallyCenteredModal(props) {
  const { setShowMenuModal, showMenuModal, ...modalProps } = props;
  return (
    <Modal
      {...modalProps}
      size="xl"
      style={{ backgroundColor: "#191919" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="difuminado__modal"
    >
      <div className="mainMenuSection">
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <img alt="hackWinesLogo" src={newHackWinesLogo} className="mb-3" />

            <Nav className="menu-section align-items-center justify-content-center gap-2 linkSection ">
              <Link className="navbar-link" to={"/"} onClick={() => props.setShowMenuModal(false)}>
                Home
              </Link>

              <Link
                className="navbar-link"
                to={"/tienda/todos"}
                onClick={() => props.setShowMenuModal(false)}
              >
                Tienda
              </Link>

              <Link
                className="navbar-link"
                to="/sobreEsteProyecto"
                onClick={() => props.setShowMenuModal(false)}
              >
                Sobre este Proyecto
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
      <button className="btn hamburguerIcon" onClick={() => setShowMenuModal(true)}>
        <List color="#F0F0F0" size={25} className="hamburguerIcon" />
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
