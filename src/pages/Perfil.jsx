import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/miPerfil.css";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import handleAlert from "../components/Alert";
import { updateUser } from "../redux/userSlice";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function Perfil() {
  const userState = useSelector((state) => state.user);
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

  async function EditarPerfil() {
    try {
      const response = await axios({
        method: "patch",
        url: `http://localhost:8000/users/${userState.id}`,
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
      handleAlert("El usuario fue modificado con exito");
      return response.data;
    } catch (error) {
      handleAlert(error.response.data.error);
    }
  }
  useEffect(() => {
    async function InfoUser() {
      try {
        const response = await axios({
          method: "get",
          url: `http://localhost:8000/users/${userState.id}`,
          headers: {
            Authorization: `Bearer ${userState.token}`,
            "Content-Type": "application/json",
          },
        });
        setUser(response.data);
        return response.data;
      } catch (error) {
        handleAlert(error.response.data.error);
      }
    }
    InfoUser();
  }, []);
  return (
    <>
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
                <h6>SALIR</h6>
              </Link>
              <hr></hr>
            </div>
            <div className="col-9 ps-5 pt-4 text-white">
              {selected ? (
                <>
                  <div className="d-flex justify-content-between">
                    <h6 className="text__yellow">MIS DATOS</h6>
                    <button className="btn__editar" onClick={EditarPerfil}>
                      <EditIcon className="me-1 edit__icon" />
                      EDITAR
                    </button>
                  </div>
                  <hr className="hr__misDatos"></hr>
                  <div className="d-flex">
                    <h6 className="w-25">Nombre</h6>
                    <input
                      type="text"
                      className="input__editar__perfil"
                      defaultValue={userState.firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    ></input>
                  </div>

                  <hr className="hr__misDatos"></hr>
                  <div className="d-flex">
                    <h6 className="w-25">Apellido</h6>
                    <input
                      type="text"
                      className="input__editar__perfil"
                      defaultValue={userState.lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    ></input>
                  </div>
                  <hr className="hr__misDatos"></hr>
                  <div className="d-flex">
                    <h6 className="w-25">E-mail</h6>
                    <input
                      type="text"
                      className="input__editar__perfil"
                      defaultValue={userState.email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <hr className="hr__misDatos"></hr>
                  <div className="d-flex">
                    <h6 className="w-25">Contraseña</h6>
                    <input
                      type="password"
                      className="input__editar__perfil"
                      placeholder="*********"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <hr className="hr__misDatos"></hr>
                  <div className="d-flex">
                    <h6 className="w-25">Telefono</h6>
                    <input
                      type="number"
                      className="input__editar__perfil"
                      defaultValue={userState.phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                  </div>
                  <hr className="hr__misDatos"></hr>
                  <div className="d-flex">
                    <h6 className="w-25">Dirección</h6>
                    <input
                      type="text"
                      className="input__editar__perfil"
                      defaultValue={userState.address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
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
                            <tr>
                              <td className=" text-center">{order.Date.split("T")[0]}</td>
                              <td className=" text-center">
                                {order._id || "6321f7c9282a57a72de54a76"}
                              </td>
                              <td className=" text-center">{order.state || "recibida"}</td>
                              <td className=" text-center">{order.total || 34}$ USD</td>
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
        <>
          <div className="d-flex justify-content-center pt-5">
            <h3 className="text-white mt-5">Mi cuenta</h3>
          </div>
          <hr className="hr__micuenta"></hr>
          <div className="container">
            <h5 className="text__iniciar__sesion">
              Para acceder a esta sección debes iniciar sesión
            </h5>
          </div>
        </>
      )}
    </>
  );
}
export default Perfil;
