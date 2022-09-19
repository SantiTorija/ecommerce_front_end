import "../styles/Wine.css";
import { useDispatch, useSelector } from "react-redux";
import { addFirstTime, setNumber } from "../redux/cartSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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

  function addCart() {
    if (wine.cartQuantity >= 0 && wine.cartQuantity < 100) {
      const isWine = cartState.find((element) => element._id === wine._id);
      if (isWine) {
        dispatch(setNumber({ id: isWine._id, quantity: isWine.cartQuantity + 1 }));
      } else {
        wine.cartQuantity = 1;
        dispatch(addFirstTime(wine));
      }
    }
  }

  function removeCart() {
    if (wine.cartQuantity > 0 && wine.cartQuantity <= 100) {
      const isWine = cartState.find((element) => element._id === wine._id);
      if (isWine) {
        dispatch(setNumber({ id: isWine._id, quantity: isWine.cartQuantity - 1 }));
      }
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center me-3">
        <div className="d-flex align-items-center contador__offcanvas">
          <button className="button_flecha_cantidad" onClick={removeCart}>
            <ArrowBackIosNewIcon />
          </button>
          <span
            style={{
              marginRight: wine.cartQuantity < 10 ? "3px" : "0px",
              marginLeft: wine.cartQuantity < 10 ? "3px" : "0px",
            }}
          >
            {wine.cartQuantity || 0}
          </span>
          <button className="button_flecha_cantidad" onClick={addCart}>
            <ArrowForwardIosIcon />
          </button>
        </div>

        <p className="ms-3 text-white precio__subproducto">
          ${wine.price * (wine.cartQuantity || 0)}
        </p>
      </div>
    </>
  );
}

export default CantidadCart;
