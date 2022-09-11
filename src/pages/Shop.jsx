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
      <Container
        style={{
          backgroundImage: `linear-gradient(rgba(23,23,23,0.5) 10%, rgba(0,0,0,0.9) 100%),url(${texturadoNegro})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
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
