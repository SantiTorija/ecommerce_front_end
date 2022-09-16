import BottlesShopHeaderMobile from "./BottlesShopHeaderMobile";
import "../styles/shopHeaderMobile.css";

function ShopHeaderMobile() {
  return (
    <div style={{ marginBottom: "10rem", marginTop: "-4rem" }}>
      <h2 className="d-block d-lg-none title text-center w-100">Bienvenido a nuestra tienda</h2>
      <div className="w-100 d-flex justify-content-center">
        <BottlesShopHeaderMobile />
      </div>
    </div>
  );
}

export default ShopHeaderMobile;
