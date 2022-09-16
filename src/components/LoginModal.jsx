import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Person } from "react-bootstrap-icons";
import "../styles/modal.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import axios from "axios";
import { login } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import handleAlert from "./Alert";

function MyVerticallyCenteredModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  async function getToken() {
    try {
      const response = await axios({
        method: "post",
        url: `http://localhost:8000/users/token`,
        data: { email, password },
      });
      console.log(response.data.token);
      dispatch(
        login({
          token: response.data.token,
          email: email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          id: response.data.id,
          phone: response.data.phone,
          address: response.data.address,
        }),
      );
      props.setModalLoginShow(false);
      return response.data;
    } catch (error) {
      handleAlert(error.response.data.error);
    }
  }

  function goToRegister() {
    props.setModalLoginShow(false);
    props.setModalRegisterShow(true);
  }
  const { modalRegisterShow, setModalRegisterShow, setModalLoginShow, ...modalProps } = props;
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
              Login con Google
            </button>
            <button className="btn__modal">
              <AppleIcon className="me-2" />
              Login con Apple
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

            <button className="btn__login border" onClick={getToken}>
              Login
            </button>
            <p>
              No tienes una cuenta aún?{" "}
              <button className="color-yellow btn__link__modales" onClick={goToRegister}>
                Registrate
              </button>
            </p>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

function LoginModal(props) {
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/miPerfil/misDatos");
  }

  return (
    <>
      {userState.token ? (
        <button className="btn button__person">
          <Person color="rgba(240, 240, 240, 0.799)" size={25} onClick={handleLogin} />
        </button>
      ) : (
        <button className="btn button__person">
          <Person
            color="rgba(240, 240, 240, 0.799)"
            size={20}
            onClick={() => props.setModalLoginShow(true)}
          />
        </button>
      )}

      <MyVerticallyCenteredModal
        modalRegisterShow={props.modalRegisterShow}
        setModalRegisterShow={props.setModalRegisterShow}
        setModalLoginShow={props.setModalLoginShow}
        show={props.modalLoginShow}
        onHide={() => props.setModalLoginShow(false)}
      />
    </>
  );
}

export default LoginModal;
