import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/offCanvas.css";
import "../styles/offCanvasNav.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import CantidadCart from "./cantidadCart";
import { Link, Navigate, useNavigate } from "react-router-dom";

function OffCanvasCart({ name, ...props }) {
  const cartState = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => props.setShowCart(true);
  const handleClose = () => props.setShowCart(false);

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
    props.setShowCart(false);
    navigate("/cart");
  }

  return (
    <>
      <button onClick={handleShow} className="me-4 off-canvas-navbar-button">
        <AiOutlineShoppingCart
          style={{ color: "rgba(240, 240, 240, 0.799)", fontSize: "1.5rem" }}
        />
      </button>
      <Offcanvas
        style={{
          backgroundImage: `url("https://www.latiendavinos.es/wp-content/uploads/2022/02/base-madera.webp")`,
        }}
        show={props.showCart}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <div className="d-flex w-100 justify-content-center">
            <Offcanvas.Title>
              <LocalMallIcon className="text-white" />
            </Offcanvas.Title>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex w-100 justify-content-center">
            <p className="text-white">
              <span className="color__yellow">
                <LocalShippingIcon />
              </span>{" "}
              You are 7.8 dollars away from free shipping
            </p>
          </div>
          {cartState.map((wine) => {
            return (
              <>
                <div className="d-flex mb-4" key={wine.id}>
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
                    <div>{wine.type || "Tinto"}</div>
                    <div className="mt-2 d-flex justify-content-end">
                      <CantidadCart wine={wine} />
                    </div>
                  </div>
                </div>
                <hr></hr>
              </>
            );
          })}
          <h6 className="d-flex justify-content-center text-white">Order Sumary</h6>
          <div className="d-flex justify-content-between mx-3">
            <p className="text-white">Merchandise</p>
            <p className="text-white">${calcularTotal() || 0}</p>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <p className="text-white">Tax</p>
            <p className="text-white">${calcularTotal() * 0.22 || 0}</p>
          </div>
          <div className="d-flex justify-content-between border-top border-bottom align-items-center pt-3 mx-3">
            <p className="text-white">Estimated Order Total</p>
            <p className="text-white">${calcularTotal() * 1.22 || 0}</p>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <button
              className="Cart__button__buy btn rounded-pill text-white"
              onClick={() => goToCart()}
            >
              BUY NOW
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCart;
