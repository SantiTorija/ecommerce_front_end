import "../styles/formulario.css";

function Formulario() {
  return (
    <form className="w-100">
      <div className="form-row d-flex">
        <div className="form-group col-md-6 ps-4">
          <label for="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div className="form-group col-md-6 ps-4">
          <label for="inputPassword4">Conraseña</label>
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
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
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
      <div className="form-group ps-4">
        <div className="form-check pt-3">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label " for="gridCheck">
            He leido y acepto los terminos de uso
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3 ms-4">
        COMPRAR
      </button>
    </form>
  );
}

export default Formulario;
