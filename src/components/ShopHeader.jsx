import { Col, Row } from "react-bootstrap";
import "../styles/shopHeader.css";
import BottlesShopHeader from "./BottlesShopHeader";

function ShopHeader() {
  return (
    <Row className="hero-section">
      <Col className="col-6 welcome-store-col">
        <h2 className="d-none d-lg-block wine-title">Bienvenido a nuestra tienda</h2>
        <p className="mt-4 d-none d-lg-block shop-header-paragraph pb-3">
          Lo invitamos a descubrir los mejores vinos de alta gama, del mundo a su mesa.
        </p>
      </Col>
      <Col style={{ position: "relative" }} className="col-6 d-flex">
        <BottlesShopHeader />
      </Col>
    </Row>
  );
}

export default ShopHeader;
