import { useSelector } from "react-redux";
import "../styles/form.css";

function PaymentForm() {
  const userState = useSelector((state) => state.user);

  return (
    <form className="col-10 col-lg-6 col-xl-5 col-xxl-4  mb-3">
      <div className="form-row d-flex">
        <div className="form-group col-md-6 ps-4">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            defaultValue={userState?.email}
          />
        </div>
        <div className="form-group col-md-6 ps-4">
          <label htmlFor="inputPassword4">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="********"
          />
        </div>
      </div>
      <div className="form-group col-md-12 ms-4 pe-4 pt-2">
        <label htmlFor="inputAddress">Dirección</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          defaultValue={userState?.address}
          placeholder="1234 Main St"
        />
      </div>
      <div className="form-group pt-2 col-md-12 ms-4 pe-4">
        <label htmlFor="inputAddress2">Dirección 2</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartmento, studio, or piso"
        />
      </div>
      <div className="form-group pt-2 col-md-12 ms-4 pe-4">
        <label htmlFor="inputAddress2">Phone</label>
        <input
          defaultValue={userState?.phone}
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="+1 390-598-2226"
        />
      </div>
      <div className="form-group pt-2 col-md-12 ms-4 pe-4">
        <label htmlFor="inputAddress2">País</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Uruguay" />
      </div>
      <div className="form-row d-flex pt-2">
        <div className="form-group col-md-6 ps-4">
          <label htmlFor="inputCity">Ciudad</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4 px-2">
          <label htmlFor="inputState">Estado</label>
          <select id="inputState" className="form-control">
            <option>Elige...</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
    </form>
  );
}

export default PaymentForm;
