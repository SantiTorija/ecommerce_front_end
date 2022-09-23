import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

import "../styles/modal.css";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import { toast } from "react-toastify";

function WelcomeModal(props) {
  const [year, setYear] = useState("");

  function checkAge() {
    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();
    if (parseInt(currentYear) - parseInt(year) > 118) {
      toast.warn("Ingresa una año válido", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      props.setShow(true);
    } else if (parseInt(currentYear) - parseInt(year) > 17) {
      props.setShow(false);
      toast.success("Bienvenido/a a HackWines", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (parseInt(currentYear) - parseInt(year) >= 0) {
      toast.warn("No puedes acceder debido a tu edad", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      props.setShow(true);
    } else {
      toast.warn("Ingresa una año válido", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      props.setShow(true);
    }
  }
  const { setShow, ...modalWelcomeProps } = props;
  return (
    <>
      <Modal
        {...modalWelcomeProps}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="difuminado__modal"
      >
        <div className="modal__body__welcome">
          <Modal.Body>
            <div className="d-flex flex-column align-items-center">
              <div className="modal__header my-3 ">
                <img alt="hackWinesLogo" src={newHackWinesLogo} />
              </div>
              <h5 className="mt-2">BIENVENIDO A HACKWINES</h5>
              <p className="pt-3 px-4 ">Debes ser mayor de 18 años para entrar en este sitio.</p>
              <p className="px-4 parrafo__modal__welcome">
                Por favor, introduce tu año de nacimiento.
              </p>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkAge();
                  }}
                >
                  <input
                    type="number"
                    placeholder="YYYY"
                    className="input__modal__welcome me-2"
                    value={year || ""}
                    onChange={(e) => setYear(e.target.value)}
                  ></input>
                  <button type="submit" className="d-inline ms-2 button__welcome">
                    Acceder
                  </button>
                </form>
              </div>

              <p className="mt-3">Beba con moderación, es su responsabilidad.</p>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default WelcomeModal;
