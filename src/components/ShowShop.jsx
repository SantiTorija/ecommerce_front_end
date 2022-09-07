import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div className="d-flex">
          {wines.map((wine, index) => {
            return (
              <Card
                key={index}
                className="me-3"
                style={{ width: "18rem", display: "inline" }}
              >
                <Card.Img variant="top" src={wine.picture} />
                <Card.Body>
                  <Card.Title>{wine.name}</Card.Title>
                  <Card.Text></Card.Text>
                  <Link to={`/product/${wine.slug}`}>
                    <Button variant="success">Comprar</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </>
    )
  );
}

export default ShowShop;
