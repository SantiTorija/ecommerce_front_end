import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

import "../styles/modal.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import axios from "axios";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginModal(props) {
  const [email, setEmail] = useState("username@gmail.com");
  const [password, setPassword] = useState("password");

  const dispatch = useDispatch();

  function notify(text) {
    toast.warn(text, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function getToken() {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}users/token`,
        data: { email, password },
      });
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
      toast.success(`Bienvenido a HackWines`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return response.data;
    } catch (error) {
      notify(error.response.data.error);
    }
  }

  function goToRegister() {
    props.setModalLoginShow(false);
    props.setModalRegisterShow(true);
  }
  const { modalRegisterShow, setModalRegisterShow, setModalLoginShow, ...modalProps } = props;
  return (
    <>
      <ToastContainer />
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
              <p style={{ color: "#F0A202", fontWeight: "400" }}>or</p>
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
    </>
  );
}

export default LoginModal;
