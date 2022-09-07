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
      <p className="title__cantidad">CANTIDAD</p>
      <div className="contador">
        <button className="btn__cantidad" onClick={() => add()}>
          <h2>-</h2>
        </button>
        <p className="number__cantidad">{cantidad}</p>
        <button className="btn__cantidad" onClick={() => substract()}>
          <h2>+</h2>
        </button>
      </div>
    </>
  );
}

export default Cantidad;
