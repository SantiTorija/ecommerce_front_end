import Sidebar from "../components/Sidebar";
import ShowShop from "../components/ShowShop";
import { Col, Row, Container } from "react-bootstrap";
import { useState } from "react";
import texturadoNegro from "../assets/images/fondonegrotexturado.jpg";
import ShopCarousel from "../components/ShopCarousel";
import ShopHeader from "../components/ShopHeader";
import ShopHeaderMobile from "../components/ShopHeaderMobile";

function Shop({ setShowCart }) {
  const [type, setType] = useState("todos");
  return (
    <>
      <Container>
        <ShopHeader className="d-none d-md-block" />
        <ShopHeaderMobile />
        <Row>
          <ShowShop setShowCart={setShowCart} type={type} setType={setType} />
        </Row>
      </Container>
    </>
  );
}

export default Shop;
