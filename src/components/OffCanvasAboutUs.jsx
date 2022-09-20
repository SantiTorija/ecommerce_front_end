import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/offCanvasNav.css";
import "../styles/offCanvasAbout.css";
import "react-toastify/dist/ReactToastify.css";
import texturadoNegro from "../assets/images/fondonegrotexturado.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OffCanvasAboutUs({ ...props }) {
  const userState = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { setModalLoginShow, ...offCanvasProps } = props;

  function notify(text) {
    toast.success(text, {
      position: "top-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function openLogin() {
    if (!userState.token) {
      props.setModalLoginShow(true);
      return setShow(false);
    }
    notify("Ya estás logeado");
  }

  return (
    <>
      <ToastContainer />
      <button onClick={handleShow} className="button__about__this__proyect">
        ABOUT THIS PROYECT
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...offCanvasProps}
        className="canvas__main__aboutus"
        style={{
          backgroundImage: `linear-gradient(rgba(19,19,19,0.5) 10%, rgba(19,19,19,0.9) 100%),url(${texturadoNegro})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minWidth: "25%",
        }}
      >
        <Offcanvas.Header closeButton className="text-white">
          <h5 className="title__offcanvasaboutus">About this proyect</h5>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-white">
          <hr></hr>
          <h5>Resumen</h5>
          <p>
            Hackwines es un e-commerce creado como proyecto final del Bootcamp de HackAcademy Fue
            desarrolado durante 3 semanas por 3 estudiantes. Haz click para más información!
          </p>
          <Link to="/aboutThisProyect" className="button__aboutUS" onClick={handleClose}>
            Sobre Nosotros
          </Link>
          <hr className="my-4" />
          <h5>Aviso Importante</h5>
          <p>
            Alguien pudo haber agregado, editado o borrado algún contenido de la página. Considere
            resetear la base de datos para una mejor experiencia
          </p>
          <button className="button__redet">Resetear</button>
          <hr className="my-4" />
          <h5>Guía de Navegación</h5>
          <p>
            Sientete libre de navegar por este sitio, agrega productos a tu carrito, y finaliza tu
            compra logeandote con las credenciales de usuario:
          </p>
          <div className="d-flex justify-content-between mb-4">
            <div>
              <p className="d-inline">Email: username@gmail.com</p>
              <p>Contraseña: password</p>
            </div>
            <button className="button__login" onClick={openLogin}>
              Login
            </button>
          </div>
          <p>
            Si quieres probar las funcionalidades de Admin, como crear, aditar o borrar ya sea
            categorias, productos, usuarios u ordenes puedes acceder con las siguientes
            credenciales:
          </p>
          <div className="d-flex justify-content-between r">
            <div>
              <p className="d-inline">Email: admin@gmail.com</p>
              <p>Contraseña: password</p>
            </div>
            <button className="button__login">Admin</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasAboutUs;
