import { useState } from "react";
import "../styles/Wine.css";
import { useDispatch, useSelector } from "react-redux";
import { addFirstTime, add } from "../redux/cartSlice";

function Cantidad({ wine, setShowCart }) {
  const [cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const handleAddCart = () => {
    if (cantidad > 0) {
      const isWine = cartState.find((element) => element._id === wine._id);
      if (isWine) {
        dispatch(add({ id: isWine._id, quantity: cantidad }));
      } else {
        wine.cartQuantity = cantidad;
        dispatch(addFirstTime(wine));
      }
      setShowCart(true);
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

        <button className="Wine__cart" onClick={handleAddCart}>
          AÑADIR AL CARRITO
        </button>
      </div>
    </>
  );
}

export default Cantidad;
