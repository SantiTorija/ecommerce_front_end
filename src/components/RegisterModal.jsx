import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import "../styles/modal.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goToLogin() {
    props.setModalRegisterShow(false);
    props.setModalLoginShow(true);
  }

  async function storeUser() {
    const response = await axios({
      method: "post",
      url: `http://localhost:8000/users`,
      data: { email, password },
    });
    props.setModalRegisterShow(false);
    return response;
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="difuminado__modal"
    >
      <div className="modal__body">
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <div className="modal__header">
              <img alt="hackWinesLogo" src={newHackWinesLogo} />
            </div>
            <button className="btn__modal">
              <GoogleIcon className="me-2" />
              Registrate con Google
            </button>
            <button className="btn__modal">
              <AppleIcon className="me-2" />
              Registrate con Apple
            </button>
            <p className="color-yellow">or</p>
            <input
              type="email"
              placeholder="Ingrese su email"
              className="input__modal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="input__modal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="btn__login border" onClick={() => storeUser()}>
              Registrate
            </button>
            <p>
              Ya tienes una cuenta?{" "}
              <button className="color-yellow btn__link__modales" onClick={() => goToLogin()}>
                Login
              </button>
            </p>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

function RegisterModal(props) {
  return (
    <>
      <MyVerticallyCenteredModal
        setModalRegisterShow={props.setModalRegisterShow}
        setModalLoginShow={props.setModalLoginShow}
        show={props.modalRegisterShow}
        onHide={() => props.setModalRegisterShow(false)}
      />
    </>
  );
}

export default RegisterModal;
