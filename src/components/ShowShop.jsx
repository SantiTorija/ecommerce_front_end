import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/showShop.css";
import BounceLoader from "react-spinners/BounceLoader";

function ShowShop(props) {
  const [wines, setWines] = useState(null);

  console.log(wines);
  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/wines/filter/${props.type}`,
      });
      setWines(response.data);
      return response;
    };
    dataWine();
  }, [props.type]);
  if (wines) {
    return (
      <>
        <div className="d-flex justify-content-around row ms-5 me-5 mb-5">
          {wines.map((wine, index) => {
            return (
              <div className="col-12 col-md-6 col-xl-4 mt-5">
                <Link to={`/product/${wine.slug}`}>
                  <button className="shop-single-item-button">
                    <Card
                      key={index}
                      className="me-3 border single-item-card"
                      style={{
                        width: "20rem",
                        height: "30rem",
                        backgroundColor: "rgba(240, 240, 240, 0.095)",
                        border: "none !important",
                        position: "relative",
                      }}
                    >
                      <Card.Img className="mt-3 image-card" variant="top" src={wine.picture} />
                      <Card.Body className="d-flex flex-column justify-content-end">
                        <div className="text-start">
                          <p
                            className="wine__title"
                            style={{ color: "#c89600", fontWeight: "650" }}
                          >
                            US$ {wine.price}
                          </p>

                          <h2 className="wine-name wine__title">{wine.name}</h2>
                        </div>
                      </Card.Body>
                    </Card>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 spinner__wines">
        <BounceLoader color="#6d1f2b" loading size={50} />
      </div>
    );
  }
}

export default ShowShop;
