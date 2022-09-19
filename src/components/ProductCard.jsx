import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../styles/productCard.css";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addFirstTime, add } from "../redux/cartSlice";

function ProductCard({ wine, setShowCart }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  function handleAddCart() {
    const isWine = cartState.find((element) => element._id === wine._id);
    if (isWine) {
      dispatch(add({ id: isWine._id, quantity: 1 }));
    } else {
      wine.cartQuantity = 1;
      dispatch(addFirstTime(wine));
    }
    setShowCart(true);
  }
  return (
    <div className="col-12 col-md-6 col-xl-3 mt-4">
      <Card
        key={wine._id}
        className="me-3 border single-item-card"
        style={{
          width: "16rem",
          height: "32rem",
          backgroundColor: "rgba(19, 19, 19, 0.6)",
          border: "none !important",
          position: "relative",
        }}
      >
        <div style={{ position: "relative" }} className="d-flex flex-column">
          <Card.Img className="mt-5 image-card" variant="top" src={wine.picture} />
          <Card.Body>
            <div style={{ position: "relative" }}>
              <h2 className="wine-name text-center">{wine.name}</h2>
            </div>
          </Card.Body>
        </div>
        <div
          style={{ position: "absolute", marginLeft: "11%", bottom: "1rem" }}
          className="mt-2 text-center"
        >
          <span className="wine__title fs-6 fw-bold mb-2">{wine.harvest}</span>
          <span className="wine__title fs-5 mb-3" style={{ color: "#F0A202" }}>
            US$ {wine.price}
          </span>
          <button onClick={handleAddCart} className="cart-button">
            <AiOutlineShoppingCart size={20} />
          </button>
          <Link to={`/product/${wine.slug}`}>
            <button className="more-info-button">
              <FiMoreHorizontal size={20} />
            </button>
          </Link>
        </div>
        <span style={{ position: "absolute", marginLeft: "1rem", marginTop: "0.3rem" }}>
          <RiStarSFill color="#F0A202" />
          <RiStarSFill color="#F0A202" />
          <RiStarSFill
            color="#F0A202
"
          />
          <RiStarSFill
            color="#F0A202
"
          />
          <RiStarSFill
            color="#F0A202
"
          />
        </span>
        <span
          style={{
            position: "absolute",
            right: "1rem",
            marginTop: "0.3rem",
            color: "#F0F0F0",
            textTransform: "capitalize",
          }}
        >
          {wine.type?.name}
        </span>
      </Card>
    </div>
  );
}

export default ProductCard;
