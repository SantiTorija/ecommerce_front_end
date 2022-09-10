import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../styles/productCard.css";

function ProductCard({ wine }) {
  return (
    <>
      <Link to={`/product/${wine.slug}`}>
        <button className="shop-single-item-button">
          <Card
            key={wine.id}
            className="me-3 border single-item-card"
            style={{
              width: "16rem",
              height: "30rem",
              backgroundColor: "rgba(240, 240, 240, 0.095)",
              border: "none !important",
              position: "relative",
            }}
          >
            <div className="d-flex flex-column">
              <Card.Img className="mt-3 image-card" variant="top" src={wine.picture} />
              <Card.Body>
                <div>
                  <p className="wine__title" style={{ color: "#c89600", fontWeight: "650" }}>
                    US$ {wine.price}
                  </p>

                  <h2 className="wine-name wine__title">{wine.name}</h2>
                </div>
              </Card.Body>
            </div>
          </Card>
        </button>
      </Link>
    </>
  );
}

export default ProductCard;
