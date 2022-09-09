import "../styles/home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import cuadrants1 from "../assets/images/cuadrants1.jpg";
import cuadrants2 from "../assets/images/cuadrants2.jpg";
import cuadrants3 from "../assets/images/cuadrants3.jpg";
import cuadrants4 from "../assets/images/cuadrants4.jpg";
import { Link } from "react-router-dom";
import { Cart, Cup, Megaphone, Sun } from "react-bootstrap-icons";

function CuadrantsHome() {
  return (
    <Container fluid className="m-0 p-0 ">
      <Row className="d-flex containerCuadrants">
        <Col
          className="m-0 p-0 d-flex flex-column align-items-center  justify-content-center gap-2"
          style={{
            backgroundImage: `linear-gradient(rgba(2,0,36,0.3) 10%, rgba(0,0,0,0.3) 100%),url(${cuadrants1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to={`/tienda`}>
            <button className="button-cuadrant">
              <Cart color="white" />
              <h2 className="textCuadrants">Tienda</h2>
            </button>
          </Link>
        </Col>

        <Col
          className="m-0 p-0 d-flex flex-column align-items-center  justify-content-center gap-2"
          style={{
            backgroundImage: `linear-gradient(rgba(2,0,36,0.3) 10%, rgba(0,0,0,0.3) 100%),url(${cuadrants2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to={`/`}>
            <button className="button-cuadrant">
              <Cup color="white" />
              <h2 className="textCuadrants">Cristaleria y Accesorios</h2>
            </button>
          </Link>
        </Col>
        <Col
          className="m-0 p-0 d-flex flex-column align-items-center  justify-content-center gap-2"
          style={{
            backgroundImage: `linear-gradient(rgba(2,0,36,0.3) 10%, rgba(0,0,0,0.3) 100%),url(${cuadrants3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to={`/`}>
            <button className="button-cuadrant">
              <Megaphone color="white" />
              <h2 className="textCuadrants">Promociones</h2>
            </button>
          </Link>
        </Col>
        <Col
          className="m-0 p-0 d-flex flex-column align-items-center  justify-content-center gap-2"
          style={{
            backgroundImage: `linear-gradient(rgba(2,0,36,0.3) 10%, rgba(0,0,0,0.3) 100%),url(${cuadrants4})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to={`/`}>
            <button className="button-cuadrant">
              <Sun color="white" />
              <h2 className="textCuadrants">Cavas</h2>
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default CuadrantsHome;
