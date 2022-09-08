import { useState } from "react";
import "../styles/Wine.css";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "../redux/cartSlice";

function Cantidad({ wine }) {
  const [cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const handleAddCart = () => {
    wine.cartQuantity = cantidad;
    dispatch(cart(wine));
  };

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
          <button onClick={handleAddCart}>AÑADIR AL CARRITO</button>
        </div>
      </div>
    </>
  );
}

export default Cantidad;
