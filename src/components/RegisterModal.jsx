import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import "../styles/modal.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import axios from "axios";
import handleAlert from "./Alert";

function MyVerticallyCenteredModal(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function goToLogin() {
    props.setModalRegisterShow(false);
    props.setModalLoginShow(true);
  }

  async function storeUser() {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}users`,
        data: { email, password, firstname, lastname, address, phone },
      });
      props.setModalRegisterShow(false);
      return response;
    } catch (error) {
      console.log(error);
      handleAlert(error.response.data.error);
    }
  }

  const { setModalRegisterShow, setModalLoginShow, ...modalProps } = props;

  return (
    <Modal
      {...modalProps}
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
              type="text"
              placeholder="Ingrese su nombre"
              className="input__modal"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            ></input>
            <input
              type="text"
              placeholder="Ingrese su apellido"
              className="input__modal"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            ></input>
            <input
              type="email"
              placeholder="Ingrese su email"
              className="input__modal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="input__modal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <input
              type="text"
              placeholder="Ingrese su dirección (ej. 'Av. calle 1122')"
              className="input__modal"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
            <input
              type="text"
              placeholder="Ingrese su teléfono"
              className="input__modal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
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
