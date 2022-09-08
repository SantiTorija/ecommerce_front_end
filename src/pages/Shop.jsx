import Sidebar from "../components/Sidebar";
import ShowShop from "../components/ShowShop";
import { Col, Row, Container } from "react-bootstrap";
function Shop() {
  return (
    <>
      <Container fluid style={{ backgroundColor: "rgb(24, 24, 24)" }}>
        <Row>
          <Col className="d-none d-lg-block col-lg-2">
            <Sidebar />
          </Col>
          <Col className="col-lg-10">
            <ShowShop />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;
