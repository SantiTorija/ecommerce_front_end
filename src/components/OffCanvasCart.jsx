import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GrCart } from "react-icons/gr";
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
  console.log(user);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    user && (
      <>
        <button onClick={handleShow} className="me-4 off-canvas-navbar-button">
          <GrCart style={{ color: "white", fontSize: "1.5rem" }} />
        </button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
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
            {user?.cartList?.map((product) => {
              return (
                <>
                  <div className="d-flex mb-4">
                    <img
                      src={product.picture}
                      alt="wine_photo"
                      className="col-3"
                    />
                    <div className="col-9">
                      <div>{product.name}</div>
                      <div>{product.type}</div>
                      <div>USD ${product.price}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  );
}

export default OffCanvasCart;
