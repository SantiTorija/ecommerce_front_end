import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../styles/mycart.css";
import handleAlert from "./Alert";
import { deleteAllItems } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function PaymentCard() {
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function calcularTotal() {
    let resultado = 0;
    for (let i = 0; i < cartState.length; i++) {
      if (cartState[i]) {
        resultado += parseInt(cartState[i].price) * parseInt(cartState[i].cartQuantity || 0);
      }
    }
    return resultado;
  }

  async function storeOrder() {
    const products = [];
    for (let i = 0; i < userState.length; i++) {
      products.push({ product: userState[i]._id, quantity: userState[i].cartQuantity });
    }
    try {
      const response = await axios({
        method: "post",
        url: `http://localhost:8000/orders`,
        data: { total: calcularTotal(), products },
        headers: {
          Authorization: `Bearer ${userState.token}`,
          "Content-Type": "application/json",
        },
      });
      handleAlert("Tu orden fue pagada con exito");
      navigate("/tienda");
      dispatch(deleteAllItems());
    } catch (error) {
      handleAlert(error.response.data.error);
    }
  }

  return (
    <form className="col-3 flex-column card__payment">
      <div className="form-row d-flex">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Total</label>
        </div>
        <div className="form-group col-md-6 d-flex justify-content-end">
          <label for="inputPassword4">{Math.round(calcularTotal() * 1.32 * 100) / 100}</label>
        </div>
      </div>
      <div className="form-group col-md-12 pt-2">
        <label for="inputAddress">Nro Tarjeta</label>
        <input
          type="number"
          className="form-control"
          id="inputAddress"
          placeholder="1234 5678 9101 1121"
        />
      </div>
      <div className="d-flex">
        <div className="form-group pt-2 col-md-6 me-3">
          <label for="inputAddress2">Fecha de expiracion</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="12/02" />
        </div>
        <div className="form-group pt-2 col-md-6 pe-3">
          <label for="inputAddress2">CVV</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="***" />
        </div>
      </div>
      <div className="form-group pt-2 col-md-12">
        <label for="inputAddress2">Nombre en la tarjeta</label>
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
          <label className="form-check-label " for="gridCheck">
            He leido y acepto los terminos de uso
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-success mt-3" onClick={storeOrder}>
        COMPRAR
      </button>
    </form>
  );
}

export default PaymentCard;
