import { useSelector } from "react-redux";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaymentCard from "../components/PaymentCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BasicExample from "../components/TableProducts";
import "../styles/Wine.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import Formulario from "../components/Formulario";
import handleAlert from "../components/Alert";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  const [tokenOk, setTokenOk] = useState(false);

  const navigate = useNavigate();
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

  function handleCheckout() {
    if (userState.token) {
      return setTokenOk("none");
    } else {
      handleAlert("Debes registrarte");
      props.setModalLoginShow(true);
    }
  }

  if (cartState.length) {
    return (
      <>
        <div className="pt-5 cart__main">
          <h3 className="cart__title text-white pt-5 pb-3 d-flex justify-content-center">
            MI CARRITO
            <span>
              <LocalMallIcon className="mx-2 " />
            </span>
          </h3>
          <div className={tokenOk ? "d-none" : "d-block"}>
            <div className={"d-flex justify-content-center mt-4"}>
              <div className="col-6">
                <BasicExample />
              </div>
              <div className=" col-4 cart__card">
                <h3>RESUMEN</h3>
                <div className="d-flex justify-content-between">
                  <p>Sub-Total ({calcularItems() || 0} items)</p>{" "}
                  <p> ${Math.round(calcularTotal() * 10) / 10}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Envio:</p> <p> ${Math.round(calcularTotal() * 0.1 * 10) / 10}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>IVA:</p> <p> ${Math.round(calcularTotal() * 0.22 * 10) / 10}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p>Total Estimado:</p> <p> ${Math.round(calcularTotal() * 1.32 * 100) / 100}</p>
                </div>

                <div className=" mt-2 d-flex justify-content-center w-100">
                  <button
                    className="cart__finalizar__compra d-flex justify-content-center"
                    onClick={handleCheckout}
                  >
                    A PAGAR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: `${tokenOk ? "block" : "none"}` }}>
            <div className="d-flex justify-content-center mt-4">
              <Formulario />
              <PaymentCard />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return navigate(-1);
  }
};

export default Cart;
