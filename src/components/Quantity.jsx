import "../styles/Wine.css";
import { useDispatch, useSelector } from "react-redux";
import { addFirstTime, add } from "../redux/cartSlice";

function Quantity({ wine, setShowCart }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const handleAddCart = () => {
    const isWine = cartState.find((element) => element._id === wine._id);
    if (isWine) {
      dispatch(add({ id: isWine._id, quantity: 1 }));
    } else {
      wine.cartQuantity = 1;
      dispatch(addFirstTime(wine));
    }
    setShowCart(true);
  };

  return (
    <>
      <div className="mt-4">
        <button className="Wine__cart w-100 mb-5" onClick={handleAddCart}>
          AÑADIR AL CARRITO
        </button>
      </div>
    </>
  );
}

export default Quantity;
