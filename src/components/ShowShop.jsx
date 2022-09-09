import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/showShop.css";

function ShowShop() {
  const [wines, setWines] = useState(null);
  console.log(wines);
  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/wines/",
      });
      setWines(response.data);
      return response;
    };
    dataWine();
  }, []);
  return (
    wines && (
      <>
        <div className="d-flex justify-content-around row ms-5 me-5 mb-5">
          {wines.map((wine, index) => {
            return (
              <div className="col-12 col-lg-4 mt-5">
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
                        <p className="wine__title" style={{ color: "#c89600", fontWeight: "650" }}>
                          US$ {wine.price}
                        </p>

                        <h2 className="wine-name wine__title">{wine.name}</h2>
                      </div>
                      <div className="middle d-flex">
                        <Link to={`/product/${wine.slug}`}>
                          <Button className="btn btn-warning text-white">ver más</Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </button>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

export default ShowShop;
