import "../styles/Wine.css";
import { useDispatch, useSelector } from "react-redux";
import { addFirstTime, setNumber } from "../redux/cartSlice";

function CantidadCart({ wine }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const handleAddCart = (value) => {
    if (value >= 0) {
      const isWine = cartState.find((element) => element._id === wine._id);
      if (isWine) {
        dispatch(setNumber({ id: isWine._id, quantity: value }));
      } else {
        wine.cartQuantity = value;
        dispatch(addFirstTime(wine));
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center me-3">
        <input
          type="number"
          className="cart__cant__input"
          placeholder="0"
          defaultValue={wine.cartQuantity || 0}
          onChange={(e) => handleAddCart(e.target.value)}
        ></input>
        <p>${wine.price * (wine.cartQuantity || 0)}</p>
      </div>
    </>
  );
}

export default CantidadCart;
