import { useSelector } from "react-redux";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BasicExample from "../components/TableProducts";
import "../styles/Wine.css";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
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
      <div className="  p-4 ">
        <h3 className="cart__title text-white pt-4 d-flex justify-content-center">
          MY CART
          <span>
            <LocalMallIcon className="mx-2 " />
          </span>
        </h3>
        <div className="d-flex justify-content-center mt-4">
          <div className="col-7">
            <BasicExample />
          </div>
          <div className="col-3 cart__card">
            <h3>SUMMARY</h3>
            <div className="d-flex justify-content-between">
              <p>Sub-Total ({cartState.length} items)</p>{" "}
              <p> ${Math.round(calcularTotal() * 10) / 10}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Envio:</p> <p> ${Math.round(calcularTotal() * 0.22 * 10) / 10}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>IVA:</p> <p> ${Math.round(calcularTotal() * 0.1 * 10) / 10}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>Total Estimado:</p> <p> ${Math.round(calcularTotal() * 1.32 * 100) / 100}</p>
            </div>
            <h6>
              Payment Options <ArrowDropDownIcon />
            </h6>
            <div>
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
