import { useState } from "react";
import "../styles/Wine.css";

function Cantidad() {
  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <div className="d-flex justify-content-center">
        <input
          className="contador"
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <div className="Wine__cart">
          <h5>AÑADIR AL CARRITO</h5>
        </div>
      </div>
    </>
  );
}

export default Cantidad;
