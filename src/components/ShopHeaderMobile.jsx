import BottlesShopHeaderMobile from "./BottlesShopHeaderMobile";
import "../styles/shopHeaderMobile.css";

function ShopHeaderMobile() {
  return (
    <div style={{ marginBottom: "10rem", marginTop: "-4rem" }}>
      <h2
        style={{ color: "#fbb701", opacity: "0.8" }}
        className="d-block d-lg-none fs-2 fw-bold wine-title text-center w-100"
      >
        Bienvenido a nuestra tienda
      </h2>
      <div>
        <BottlesShopHeaderMobile />
      </div>
    </div>
  );
}

export default ShopHeaderMobile;
