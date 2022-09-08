import { useState } from "react";
import "../styles/Wine.css";
import { useDispatch, useSelector } from "react-redux";
import { addFirstTime, add } from "../redux/cartSlice";

function Cantidad({ wine }) {
  const [cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const handleAddCart = () => {
    const isWine = cartState.find((element) => element._id === wine._id);
    if (isWine) {
      console.log("entro primero");
      dispatch(add({ id: isWine._id, quantity: cantidad }));
    } else {
      console.log("entro segundo");
      wine.cartQuantity = cantidad;
      dispatch(addFirstTime(wine));
    }
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
