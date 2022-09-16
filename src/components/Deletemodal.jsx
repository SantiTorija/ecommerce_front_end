import React from "react";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import { AiFillDelete } from "react-icons/ai";
import { deleteItem } from "../redux/cartSlice";
import "../styles/Wine.css";

function DeleteModal({ wine }) {
  const dispatch = useDispatch();

  return (
    <Popup
      trigger={(open) => {
        return (
          <button className="text-white btn__delete__wine">
            <AiFillDelete />
          </button>
        );
      }}
      position="left center"
      closeOnDocumentClick
    >
      <div className="modal__delete p-1">
        <button
          className="btn text-warning Wine__cart__small__confirmar"
          onClick={() => dispatch(deleteItem({ id: wine._id }))}
        >
          Confirmar
        </button>
        <button className="Wine__cart__small">Cancelar</button>
      </div>
    </Popup>
  );
}

export default DeleteModal;
