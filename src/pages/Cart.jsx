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

  function calcularItems() {
    let resultado = 0;
    for (let i = 0; i < cartState.length; i++) {
      if (cartState[i]) {
        resultado += parseInt(cartState[i].cartQuantity);
      }
    }
    return resultado;
  }
  return (
    <>
      <div className="p-4 cart__main">
        <h3 className="cart__title text-white pt-4 pb-3 d-flex justify-content-center">
          MY CART
          <span>
            <LocalMallIcon className="mx-2 " />
          </span>
        </h3>
        <div className="d-flex justify-content-center mt-4">
          <div className="col-5">
            <BasicExample />
          </div>
          <div className="col-3 cart__card">
            <h3>SUMMARY</h3>
            <div className="d-flex justify-content-between">
              <p>Sub-Total ({calcularItems()} items)</p>{" "}
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
            <div className="d-flex justify-content-center">
              <img
                src="https://www.pngkey.com/png/full/398-3987066_payment-methods-transparent-trust-badges-shopify.png"
                alt="logo visa"
                className="foto__payment"
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
