import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/offCanvasNav.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import CantidadCart from "./QuantityCart";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import texturadoNegro from "../assets/images/fondonegrotexturado.jpg";

function OffCanvasCart({ name, ...props }) {
  const cartState = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleShow = () => props.setShowCart(true);
  const handleClose = () => props.setShowCart(false);

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

  function calcularTotal() {
    let resultado = 0;
    for (let i = 0; i < cartState.length; i++) {
      if (cartState[i]) {
        resultado += parseInt(cartState[i].price) * parseInt(cartState[i].cartQuantity || 0);
      }
    }
    return resultado;
  }

  function goToCart() {
    if (cartState.length > 0) {
      props.setShowCart(false);
      return navigate("/cart");
    }
    notify("En este momento no tienes articulos en el carrito");
    return props.setShowCart(false);
  }

  const { setShowCart, showCart, ...offCanvasProps } = props;

  return (
    <>
      <ToastContainer />
      <button onClick={handleShow} className="off-canvas-navbar-button p-0">
        <AiOutlineShoppingCart style={{ color: "#F0F0F0", fontSize: "1.5rem" }} />
      </button>
      <Offcanvas
        show={props.showCart}
        onHide={handleClose}
        {...offCanvasProps}
        className="canvas__main__cart"
        style={{
          backgroundImage: `linear-gradient(rgba(19,19,19,0.5) 10%, rgba(19,19,19,0.9) 100%),url(${texturadoNegro})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minWidth: "25%",
        }}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <div className="d-flex w-100 justify-content-center">
            <Offcanvas.Title>
              <LocalMallIcon className="text-white" />
            </Offcanvas.Title>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex w-100 justify-content-center">
            <p className="text-white">
              <span className="#F0A202">
                <LocalShippingIcon />
              </span>{" "}
              {calcularTotal() * 1.32 < 100
                ? "Estás a " +
                  (100 - Math.round((calcularTotal() || 0) * 1.32)) +
                  " dólares del envio gratis"
                : "Envio incluido"}
            </p>
          </div>
          {cartState.map((wine) => {
            return (
              <div className="d-flex mb-4" key={wine._id}>
                <img
                  src={
                    wine.picture ||
                    "https://cdn.shopify.com/s/files/1/0042/8477/6517/products/19Crimes-CabSauv-VDM_2000x.jpg"
                  }
                  alt="wine_photo"
                  className="col-3"
                />

                <div className="col-9 text-white">
                  <div>{wine.name || "19 CRIMES CABERNET SAUVIGNON"}</div>
                  <div className="text-capitalize">{wine.type.name || "Tinto"}</div>
                  <div className="mt-2 d-flex justify-content-end">
                    <CantidadCart wine={wine} />
                  </div>
                </div>
              </div>
            );
          })}
          <h6 className="d-flex justify-content-center text-white">RESUMEN</h6>
          <div className="d-flex justify-content-between mx-3">
            <p className="text-white">Mercaderia</p>
            <p className="text-white">US${Math.round((calcularTotal() || 0) * 10) / 10}</p>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <p className="text-white">IVA</p>
            <p className="text-white">US${Math.round((calcularTotal() * 0.22 || 0) * 10) / 10}</p>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <p className="text-white">Envio</p>
            <p className="text-white">US${Math.round((calcularTotal() * 0.1 || 0) * 10) / 10}</p>
          </div>
          <div className="d-flex justify-content-between border-top border-bottom align-items-center pt-3 mx-3">
            <p className="text-white">A pagar</p>
            <p className="text-white">US${Math.round((calcularTotal() || 0) * 1.32 * 10) / 10}</p>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <button className="Cart__button__buy btn" onClick={() => goToCart()}>
              COMPRAR
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCart;
