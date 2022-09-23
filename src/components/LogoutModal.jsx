import React from "react";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import "../styles/Wine.css";
import "../styles/miPerfil.css";
import { logout } from "../redux/userSlice";
import { Link } from "react-router-dom";

function LogoutModal() {
  const dispatch = useDispatch();

  return (
    <Popup
      trigger={(open) => {
        return (
          <Link to="#" className="salir">
            <h6>SALIR</h6>
          </Link>
        );
      }}
      position="bottom center"
      closeOnDocumentClick
    >
      <div className="modal__delete p-1">
        <button
          className="btn text-warning Wine__cart__small__confirmar"
          onClick={() => dispatch(logout())}
        >
          Confirmar
        </button>
        <button className="Wine__cart__small">Cancelar</button>
      </div>
    </Popup>
  );
}

export default LogoutModal;
