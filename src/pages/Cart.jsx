import { useDispatch, useSelector } from "react-redux";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { addFirstTime, setNumber } from "../redux/cartSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BasicExample from "../components/TableProducts";
import "../styles/Wine.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const handleAddCart = (value, wine) => {
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
  function calcularTotal() {
    let resultado = 0;
    for (let i = 0; i < cartState.length; i++) {
      if (cartState[i]) {
        resultado += parseInt(cartState[i].price) * parseInt(cartState[i].cartQuantity || 0);
      }
    }
    return resultado;
  }
  return (
    <>
      <div className="  p-5 ">
        <h3 className="cart__title text-white pt-4 d-flex justify-content-center">
          MY CART
          <span>
            <LocalMallIcon className="mx-2 " />
          </span>
        </h3>
        <div className="d-flex justify-content-center">
          <div className="col-8">
            <BasicExample />
            <div className="d-flex ms-4">
              <div className="col-5 text-white pt-5 d-flex justify-content-center ">
                <h4>PRODUCTO</h4>
              </div>
              <div className="col-2 text-white pt-5 d-flex justify-content-center ">
                <h4>PRECIO</h4>
              </div>
              <div className="col-2 text-white pt-5 d-flex justify-content-center ">
                <h4>CANTIDAD</h4>
              </div>
              <div className="col-2 text-white pt-5 d-flex justify-content-center ">
                <h4>SUBTOTAL</h4>
              </div>
            </div>
            {cartState.map((wine) => {
              return (
                <>
                  <div className="d-flex mb-3" key={wine.id}>
                    <img
                      src={
                        wine.picture ||
                        "https://cdn.shopify.com/s/files/1/0042/8477/6517/products/19Crimes-CabSauv-VDM_2000x.jpg"
                      }
                      alt="wine_photo"
                      className="col-1"
                    />

                    <div className="col-5 text-white pt-5">
                      <h4>{wine.name || "19 CRIMES CABERNET SAUVIGNON"}</h4>
                    </div>
                    <div className="col-2 text-white pt-5">
                      <h4>${wine.price}</h4>
                    </div>
                    <div className="col-2 text-white pt-5">
                      <input
                        type="number"
                        className="cart__cant__input"
                        defaultValue={wine.cartQuantity || 0}
                        onChange={(e) => handleAddCart(e.target.value, wine)}
                      ></input>
                    </div>
                    <div className="col-2 ext-white pt-5">
                      <h4 className="d-inline text-white">
                        ${wine.price * (wine.cartQuantity || 0)}
                      </h4>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-4 text-white px-3 py-3 pt-5">
            <h3 className="mx-5">SUMMARY</h3>
            <div className="d-flex justify-content-between">
              <p className="mx-5">Subtotal ({cartState.length} items)</p>{" "}
              <p className="mx-5"> ${Math.round(calcularTotal() * 10) / 10}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="mx-5">Shipping & Handling:</p>{" "}
              <p className="mx-5"> ${Math.round(calcularTotal() * 0.22 * 10) / 10}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="mx-5">Taxes:</p>{" "}
              <p className="mx-5"> ${Math.round(calcularTotal() * 0.1 * 10) / 10}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mx-5">Estimated Total:</p>{" "}
              <p className="mx-5"> ${Math.round(calcularTotal() * 1.32 * 100) / 100}</p>
            </div>
            <h6 className="mx-5">
              Payment Options <ArrowDropDownIcon />
            </h6>
            <div className="mx-5">
              <img
                src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-Free-Download-PNG.png"
                alt="logo visa"
                className="foto__payment"
              />
              <img
                src="https://freepngimg.com/save/16049-mastercard-png-clipart/590x360"
                alt="logo mastercard"
                className="foto__payment"
              />
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"
                alt="logo paypal"
                className="foto__payment__grande"
              />
              <img
                src="https://assets.stickpng.com/images/5a27cdfd52b1cc0d022e6d5c.png"
                alt="logo santander"
                className="foto__payment"
              />
              <img
                src="https://www.thcservers.com/images/Paysafecard_logo.png"
                alt="logo paysafeCard"
                className="foto__payment__grande"
              />
            </div>

            <div className="d-flex justify-content-center mt-2">
              <div className="cart__finalizar__compra d-flex justify-content-center ">
                <h6>CHECKOUT</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
