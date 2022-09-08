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
                      }}
                    >
                      <Card.Img
                        className="mt-3 single-item-card"
                        variant="top"
                        src={wine.picture}
                      />
                      <Card.Body className="d-flex flex-column justify-content-end">
                        <Card.Title>
                          <h2 className="wine-name">{wine.name}</h2>
                        </Card.Title>
                        <Card.Text></Card.Text>
                        <Button className="d-none" variant="success">
                          Comprar
                        </Button>
                      </Card.Body>
                    </Card>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

export default ShowShop;
