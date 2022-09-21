import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/miPerfil.css";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { updateUser, logout } from "../redux/userSlice";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProfileModal from "../components/EditProfileModal";

function Perfil() {
  const userState = useSelector((state) => state.user);
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState({});
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
  useEffect(() => {
    async function InfoUser() {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}users/${userState.id}`,
          headers: {
            Authorization: `Bearer ${userState.token}`,
            "Content-Type": "application/json",
          },
        });
        setUser(response.data);
        return response.data;
      } catch (error) {}
    }
    InfoUser();
  }, []);
  return (
    <div style={{ minHeight: "55vh" }}>
      {userState.token ? (
        <>
          <div className="container pt-5">
            <h3 className="text-white mt-5">Mi cuenta</h3>
          </div>
          <hr className="hr__micuenta"></hr>
          <div className="container d-flex">
            <div className="col-3 sidebar pt-4 text-white">
              <Link to="/miPerfil/misDatos" onClick={() => setSelected(!selected)}>
                <h6 className={selected ? "text__yellow" : "texto-white"}>MIS DATOS</h6>
              </Link>
              <hr></hr>
              <Link to="/miPerfil/misCompras" onClick={() => setSelected(!selected)}>
                <h6 className={!selected ? "text__yellow" : "texto-white"}>MIS COMPRAS</h6>
              </Link>
              <hr></hr>
              <Link to="#" className="salir">
                <h6 onClick={() => dispatch(logout())}>SALIR</h6>
              </Link>
              <hr></hr>
            </div>
            <div className="col-9 ps-5 pt-4 text-white">
              {selected ? (
                <>
                  <div className="d-flex justify-content-between">
                    <h6 className="text__yellow">MIS DATOS</h6>
                    <button
                      className="btn__editar"
                      onClick={() => setModalShow(true)} /* onClick={EditarPerfil} */
                    >
                      <EditIcon className="me-1 edit__icon" />
                      EDITAR
                    </button>
                    <EditProfileModal show={modalShow} onHide={() => setModalShow(false)} />
                  </div>
                  <hr className="hr__misDatos"></hr>
                  <div>
                    <h6 className="w-25 d-block d-md-inline">Nombre: </h6>
                    <span>{userState.firstname}</span>
                  </div>

                  <hr className="hr__misDatos"></hr>
                  <div>
                    <h6 className="w-25 d-block d-md-inline">Apellido: </h6>
                    <span>{userState.lastname}</span>
                  </div>
                  <hr className="hr__misDatos"></hr>
                  <div>
                    <h6 className="w-25 d-block d-md-inline">E-mail: </h6>
                    <span>{userState.email}</span>
                  </div>
                  <hr className="hr__misDatos"></hr>

                  <div>
                    <h6 className="w-25 d-block d-md-inline">Teléfono: </h6>
                    <span>{userState.phone}</span>
                  </div>
                  <hr className="hr__misDatos"></hr>
                  <div>
                    <h6 className="w-25 d-block d-md-inline">Dirección: </h6>
                    <span>{userState.address}</span>
                  </div>
                  <hr className="hr__misDatos"></hr>
                </>
              ) : (
                <>
                  <h6 className="text__yellow mb-3">MIS COMPRAS</h6>
                  <hr className="hr__misDatos"></hr>
                  {user?.orders?.length > 0 ? (
                    <Table className="text-white align-middle">
                      <thead>
                        <tr>
                          <th className=" text-center">Fecha</th>
                          <th className=" text-center">Orden</th>
                          <th className=" text-center">Estado</th>
                          <th className=" text-center">Importe</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user?.orders?.map((order) => {
                          return (
                            <tr key={order._id}>
                              <td className=" text-center">{order.Date.split("T")[0]}</td>
                              <td className=" text-center">
                                {order._id || "6321f7c9282a57a72de54a76"}
                              </td>
                              <td className=" text-center">{order.state || "recibida"}</td>

                              <td className=" text-center">{order.total || 34} US$</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  ) : (
                    <div className=" h-100 d-flex justify-content-center align-items-center flex-column">
                      <WarningAmberIcon className="icon__Warning" />
                      <h6>Aún no tienes compras</h6>
                      <button
                        className="btn__editar mt-1"
                        onClick={() => navigate("/tienda/todos")}
                      >
                        Comenzar a comprar
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="d-flex justify-content-center pt-5">
            <h3 className="text-white mt-5">Mi cuenta</h3>
          </div>
          <hr className="hr__micuenta"></hr>
          <div className="container">
            <h5 className="text__iniciar__sesion">
              Para acceder a esta sección debes iniciar sesión
            </h5>
          </div>
        </div>
      )}
    </div>
  );
}
export default Perfil;
