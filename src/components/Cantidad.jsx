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
        <button className="btn__cantidad__plus" onClick={() => add()}>
          <h2>+</h2>
        </button>
        <span className="contador__numero">{cantidad}</span>
        <button className="btn__cantidad__minus" onClick={() => substract()}>
          <h2>-</h2>
        </button>
      </div>
    </>
  );
}

export default Cantidad;
