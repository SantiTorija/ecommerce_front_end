import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../styles/productCard.css";
import { RiStarSFill } from "react-icons/ri";

function ProductCard({ wine }) {
  return (
    <>
      <button className="shop-single-item-button">
        <Card
          key={wine._id}
          className="me-3 border single-item-card"
          style={{
            width: "16rem",
            height: "32rem",
            backgroundColor: "rgba(15, 15, 15, 0.6)",
            border: "none !important",
            position: "relative",
          }}
        >
          <div style={{ position: "relative" }} className="d-flex flex-column">
            <Card.Img className="mt-4 image-card" variant="top" src={wine.picture} />
            <Card.Body>
              <div style={{ position: "relative" }}>
                <h2 className="wine-name wine__title">{wine.name}</h2>
              </div>
            </Card.Body>
          </div>
          <div style={{ position: "absolute", marginLeft: "11%", bottom: "1rem" }} className="mt-2">
            <span className="wine__title fs-6 fw-bold mb-2">{wine.harvest}</span>
            <span className="wine__title fs-5 mb-3" style={{ color: "#c89600" }}>
              US$ {wine.price}
            </span>
            <button className="cart-button">carrito</button>
            <Link to={`/product/${wine.slug}`}>
              <button className="more-info-button">ver más</button>
            </Link>
          </div>
          <span style={{ position: "absolute", marginLeft: "1rem", marginTop: "0.2rem" }}>
            <RiStarSFill color="#fbb701" />
            <RiStarSFill color="#fbb701" />
            <RiStarSFill color="#fbb701" />
            <RiStarSFill color="#fbb701" />
            <RiStarSFill color="#fbb701" />
          </span>
        </Card>
      </button>
    </>
  );
}

export default ProductCard;
