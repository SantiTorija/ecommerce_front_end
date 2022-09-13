import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/formulario.css";

function Formulario() {
  const userState = useSelector((state) => state.user);

  return (
    <form className="col-5">
      <div className="form-row d-flex">
        <div className="form-group col-md-6 ps-4">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            defaultValue={userState?.email}
          />
        </div>
        <div className="form-group col-md-6 ps-4">
          <label for="inputPassword4">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="form-group col-md-12 ms-4 pe-4 pt-2">
        <label for="inputAddress">Dirección</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          defaultValue={userState?.address}
          placeholder="1234 Main St"
        />
      </div>
      <div className="form-group pt-2 col-md-12 ms-4 pe-4">
        <label for="inputAddress2">Dirección 2</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartmento, studio, or piso"
        />
      </div>
      <div className="form-group pt-2 col-md-12 ms-4 pe-4">
        <label for="inputAddress2">Phone</label>
        <input
          defaultValue={userState?.phone}
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="+1 390-598-2226"
        />
      </div>
      <div className="form-group pt-2 col-md-12 ms-4 pe-4">
        <label for="inputAddress2">País</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Uruguay" />
      </div>
      <div className="form-row d-flex pt-2">
        <div className="form-group col-md-6 ps-4">
          <label for="inputCity">Ciudad</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4 px-2">
          <label for="inputState">Estado</label>
          <select id="inputState" className="form-control">
            <option selected>Elige...</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
    </form>
  );
}

export default Formulario;