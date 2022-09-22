import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import texturadoNegro from "../assets/images/fondonegrotexturado.jpg";
import "../styles/miPerfil.css";
import axios from "axios";
import { updateUser } from "../redux/userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function EditProfileModal(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function notify() {
    toast.warn("Deber estar logeado", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function EditarPerfil() {
    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}users/${userState.id}`,
        data: { email, password, firstname, lastname, phone, address },
        headers: {
          Authorization: `Bearer ${userState.token}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(
        updateUser({
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          phone: response.data.phone,
          address: response.data.address,
        }),
      );
      toast.success("Sus datos fueron actualizados con éxito", {
        position: "top-right",
        autoClose: 5000,
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

  return (
    <Modal
      {...props}
      style={{ backgroundColor: "rgb(19, 19, 19, 0.5)" }}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        style={{
          padding: "1.5rem",
          backgroundImage: `linear-gradient(rgba(19,19,19,0.5) 10%, rgba(19,19,19,0.9) 100%),url(${texturadoNegro})`,
          backgroundSize: "cover",
        }}
      >
        <Modal.Title className=" mb-4 text__yellow">Editar información</Modal.Title>
        <form
          className="w-100"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            EditarPerfil();
            navigate("/miPerfil/MisCompras");
            props.onHide();
          }}
        >
          <div className="d-flex">
            <h6 className="w-25 text-white">Nombre</h6>
            <input
              type="text"
              className="input__editar__perfil border rounded "
              defaultValue={userState.firstname}
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>
          <hr className="hr__misDatos"></hr>
          <div className="d-flex">
            <h6 className="w-25 text-white">Apellido</h6>
            <input
              type="text"
              className="input__editar__perfil border rounded"
              defaultValue={userState.lastname}
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>
          <hr className="hr__misDatos"></hr>
          <div className="d-flex">
            <h6 className="w-25 text-white">E-mail</h6>
            <input
              type="text"
              className="input__editar__perfil border rounded "
              defaultValue={userState.email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <hr className="hr__misDatos"></hr>
          <div className="d-flex">
            <h6 className="w-25 text-white">Contraseña</h6>
            <input
              type="password"
              className="input__editar__perfil border rounded"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <hr className="hr__misDatos"></hr>
          <div className="d-flex">
            <h6 className="w-25 text-white">Telefono</h6>
            <input
              type="number"
              className="input__editar__perfil border rounded"
              defaultValue={userState.phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <hr className="hr__misDatos"></hr>
          <div className="d-flex">
            <h6 className="w-25 text-white">Dirección</h6>
            <input
              type="text"
              className="input__editar__perfil border rounded"
              defaultValue={userState.address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <hr className="hr__misDatos"></hr>
          <div className="w-100 d-flex justify-content-end">
            <button type="submit" className="mt-3 me-3 btn__editar">
              GUARDAR
            </button>
            <Button className="mt-3 btn btn-light fw-bold" onClick={props.onHide}>
              CERRAR
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditProfileModal;
