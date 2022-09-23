import { useSelector } from "react-redux";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaymentCard from "../components/PaymentCard";
import BasicExample from "../components/TableProducts";
import "../styles/Wine.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import Form from "../components/PaymentForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  const [tokenOk, setTokenOk] = useState(false);
  function notify() {
    toast.warn("Deber estar logeado", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

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
      notify();
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
            <div className="d-flex justify-content-center mt-4 flex-wrap">
              <div className="d-none col-sm-11 d-sm-block col-lg-6 col-xl-5 me-5 ms-5">
                <BasicExample />
              </div>
              <div className="col-8 col-lg-4 cart__card">
                <h3>RESUMEN</h3>
                <div className="d-flex justify-content-between">
                  <p>Sub-Total ({calcularItems() || 0} items)</p>{" "}
                  <p> US$ {Math.round(calcularTotal() * 10) / 10}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Envio:</p> <p> US$ {Math.round(calcularTotal() * 0.1 * 10) / 10}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>IVA:</p> <p> US$ {Math.round(calcularTotal() * 0.22 * 10) / 10}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p>Total Estimado:</p>{" "}
                  <p> US$ {Math.round(calcularTotal() * 1.32 * 100) / 100}</p>
                </div>

                <div className=" mt-2 d-flex justify-content-center w-100">
                  <button
                    className="cart__finalizar__compra d-flex justify-content-center"
                    onClick={handleCheckout}
                  >
                    IR A PAGAR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ display: `${tokenOk ? "block" : "none"}` }}>
            <div className="d-flex justify-content-center mt-4 flex-wrap">
              <Form />
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
