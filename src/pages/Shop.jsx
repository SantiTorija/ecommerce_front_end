import Sidebar from "../components/Sidebar";
import ShowShop from "../components/ShowShop";
import { Col, Row, Container } from "react-bootstrap";
import { useState } from "react";
function Shop() {
  const [type, setType] = useState("todos");
  return (
    <>
      <Container
        style={{
          backgroundImage: `url("https://www.latiendavinos.es/wp-content/uploads/2022/02/base-madera.webp")`,
        }}
        fluid
      >
        <Row>
          <Col className="d-none d-lg-block col-lg-2">
            <Sidebar setType={setType} />
          </Col>
          <Col className="col-lg-10">
            <ShowShop type={type} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;
