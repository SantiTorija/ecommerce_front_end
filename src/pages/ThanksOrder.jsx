import "../styles/thanksOrder.css";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function ThanksOrder() {
  const userState = useSelector((state) => state.user);
  const [user, setUser] = useState({});

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
        console.log("separador2");
        console.log(response.data);
        return response.data;
      } catch (error) {}
    }
    InfoUser();
  }, []);

  return (
    user && (
      <div className="container text-center" id="thanksSection">
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
