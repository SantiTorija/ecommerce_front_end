import { useState } from "react";
import "../styles/cantidad.css";

function Cantidad() {
  const [cantidad, setCantidad] = useState(1);

  function add() {
    setCantidad(cantidad + 1);
  }
  function substract() {
    if (cantidad > 1) return setCantidad(cantidad - 1);
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="contador">
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="Wine__cart">
          <h5>AÑADIR AL CARRITO</h5>
        </div>
      </div>
    </>
  );
}

export default Cantidad;
