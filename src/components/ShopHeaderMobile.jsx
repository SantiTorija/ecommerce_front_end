import BottlesShopHeaderMobile from "./BottlesShopHeaderMobile";
import "../styles/shopHeaderMobile.css";

function ShopHeaderMobile() {
  return (
    <div style={{ marginBottom: "5rem", marginTop: "-4rem" }}>
      <h2 className="d-block d-lg-none title text-center w-100">BIENVENIDO A NUESTRA TIENDA</h2>
      <div className="w-100 d-flex justify-content-center">
        <BottlesShopHeaderMobile />
      </div>
    </div>
  );
}

export default ShopHeaderMobile;
