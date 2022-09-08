import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/offCanvas.css";
import "../styles/offCanvasNav.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import axios from "axios";

function OffCanvasCart({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const dataOrders = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/users/631a0b04837b7150535af59a`,
      });
      setUser(response.data);
      return response;
    };
    dataOrders();
  }, []);

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
                <LocalMallIcon />
              </Offcanvas.Title>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>
              <LocalShippingIcon /> You are 7.8 dollars away from free shipping
            </p>
            {[1, 2, 3].map((product) => {
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
                    <div className="col-9">
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
            <h6 className="d-flex justify-content-center">Order Sumary</h6>
            <div className="d-flex justify-content-between">
              <p>Merchandise</p>
              <p>$57.20</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Tax</p>
              <p>$0.00</p>
            </div>
            <div className="d-flex justify-content-between border-top border-bottom align-items-center">
              <p>Estimated Order Total</p>
              <p>$57.20</p>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button className="Cart__button__buy btn rounded-pill">
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
