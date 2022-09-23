import "../styles/thanksOrder.css";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";

function ThanksOrder() {
  return (
    user && (
      <div
        className="container text-center d-flex flex-column justify-content-center align-items-center w-100"
        id="thanksSection"
      >
        <BsCheck2Circle size={60} color="#F0A202" className="mb-4" />
        <h4 id="thanksOrderNumber">{/* {user ? user.orders[user.orders.length - 1] : ""}  */}</h4>
        <h3 id="thanksOrderTitle">Compra completada con éxito</h3>
        <p>Comenzaremos a preparar tu pedido lo antes posible</p>
        <p>!Muchas gracias por tu compra!</p>
        <Link to="/miPerfil/misCompras">
          <button id="myOrdersButton">MIS COMPRAS</button>
        </Link>
      </div>
    )
  );
}

export default ThanksOrder;
