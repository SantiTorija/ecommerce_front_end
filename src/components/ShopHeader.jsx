import { Col, Row } from "react-bootstrap";
import "../styles/shopHeader.css";
import BottlesShopHeader from "./BottlesShopHeader";

function ShopHeader() {
  return (
    <Row className="mt-5">
      <Col className="col-6 welcome-store-col">
        <h2 className="d-none d-lg-block wine-title">Bienvenido a nuestra tienda</h2>
        <p className="d-none d-lg-block shop-header-paragraph border-bottom pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis non dolores nemo quae
          maxime officia porro.
        </p>
        <button className="d-none d-lg-inline promo-button">selecciones especiales</button>
      </Col>
      <Col style={{ position: "relative" }} className="col-6 d-flex">
        <BottlesShopHeader />
      </Col>
    </Row>
  );
}

export default ShopHeader;
