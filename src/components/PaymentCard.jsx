import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../styles/mycart.css";
import { deleteAllItems } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PaymentCard() {
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function notify(text) {
    toast.warn(text, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function calculateTotal() {
    let result = 0;
    for (const wine of cartState) {
      result += parseInt(wine.price) * parseInt(wine.cartQuantity || 0);
    }
    return result;
  }

  function validateStock() {
    for (const wine of cartState) {
      if (wine.cartQuantity > wine.stock) {
        return false;
      }
    }
    return true;
  }

  async function storeOrder() {
    if (validateStock()) {
      try {
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}orders`,
          data: { total: calculateTotal() * 1.22, products: cartState },
          headers: {
            Authorization: `Bearer ${userState.token}`,
            "Content-Type": "application/json",
          },
        });
        dispatch(deleteAllItems());
        toast.success("La orden fue realizada con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        notify(error.response.data.error);
      }
    } else {
      notify("La compra no fue realizada por falta de stock");
    }
  }

  return (
    <>
      <ToastContainer />
      <form
        className="col-10 col-md-8 col-lg-4 col-xxl-3 flex-column card__payment "
        onSubmit={(e) => {
          storeOrder();
          navigate("/miPerfil/misCompras");
        }}
      >
        <div className="form-row d-flex">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Total</label>
          </div>
          <div className="form-group col-md-6 d-flex justify-content-end">
            <label htmlFor="inputPassword4" style={{ color: "#F0A202" }}>
              US$ {Math.round(calculateTotal() * 1.32 * 100) / 100}
            </label>
          </div>
        </div>
        <div className="form-group col-md-12 pt-2">
          <label htmlFor="inputAddress">Número de Tarjeta</label>
          <input
            type="number"
            className="form-control"
            id="inputAddress"
            placeholder="1234 5678 9101 1121"
          />
        </div>
        <div className="d-flex">
          <div className="form-group pt-2 col-md-6 me-3">
            <label htmlFor="inputAddress2">Fecha de expiración</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="12/02" />
          </div>
          <div className="form-group pt-2 col-md-6 pe-3">
            <label htmlFor="inputAddress2">CVV</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="***" />
          </div>
        </div>
        <div className="form-group pt-2 col-md-12">
          <label htmlFor="inputAddress2">Nombre en la tarjeta</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Jorge Rodriguez Costa"
          />
        </div>

        <div className="form-group">
          <div className="form-check pt-3">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label " htmlFor="gridCheck">
              He leído y acepto los terminos de uso
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="mt-3 button__pagar__final ">
            FINALIZAR COMPRA
          </button>
        </div>
      </form>
    </>
  );
}

export default PaymentCard;
