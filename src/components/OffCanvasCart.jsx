import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/offCanvas.css";
import "../styles/offCanvasNav.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import axios from "axios";
import { useSelector } from "react-redux";

function OffCanvasCart({ name, ...props }) {
  const cartState = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  console.table({ cartState });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    user && (
      <>
        <button onClick={handleShow} className="me-4 off-canvas-navbar-button">
          <AiOutlineShoppingCart
            color="white"
            style={{ color: "white", fontSize: "1.5rem" }}
          />
        </button>
        <Offcanvas
          style={{
            backgroundImage: `url("https://www.latiendavinos.es/wp-content/uploads/2022/02/base-madera.webp")`,
          }}
          show={show}
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
            <p className="text-white">
              <LocalShippingIcon /> You are 7.8 dollars away from free shipping
            </p>
            {cartState.map((product) => {
              return (
                <>
                  <div className="d-flex mb-4">
                    <img
                      src={
                        product.picture ||
                        "https://cdn.shopify.com/s/files/1/0042/8477/6517/products/19Crimes-CabSauv-VDM_2000x.jpg"
                      }
                      alt="wine_photo"
                      className="col-3"
                    />
                    <div className="col-9 text-white">
                      <div>
                        {product.name || "19 CRIMES CABERNET SAUVIGNON"}
                      </div>
                      <div>{product.type || "Tinto"}</div>
                      <div>USD ${product.price || "40"}</div>
                    </div>
                  </div>
                  <hr></hr>
                </>
              );
            })}
            <h6 className="d-flex justify-content-center text-white">
              Order Sumary
            </h6>
            <div className="d-flex justify-content-between ">
              <p className="text-white">Merchandise</p>
              <p className="text-white">$57.20</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-white">Tax</p>
              <p className="text-white">$0.00</p>
            </div>
            <div className="d-flex justify-content-between border-top border-bottom align-items-center">
              <p className="text-white">Estimated Order Total</p>
              <p className="text-white">$57.20</p>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button className="Cart__button__buy btn rounded-pill text-white">
                BUY NOW
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  );
}

export default OffCanvasCart;
