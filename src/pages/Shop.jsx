import Sidebar from "../components/Sidebar";
import ShowShop from "../components/ShowShop";
import { Col, Row, Container } from "react-bootstrap";
import { useState } from "react";
import texturadoNegro from "../assets/images/fondonegrotexturado.jpg";

function Shop() {
  const [type, setType] = useState("todos");
  return (
    <>
      <Container
        style={{
          backgroundImage: `linear-gradient(rgba(23,23,23,0.5) 10%, rgba(0,0,0,0.9) 100%),url(${texturadoNegro})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        fluid
      >
        <Row>
          <Col className="col-lg-2">
            <Sidebar setType={setType} />
          </Col>
          <Col className="col-sm-12 col-lg-10">
            <ShowShop type={type} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;
