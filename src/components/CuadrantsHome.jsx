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
import handleAlert from "./Alert";

function CuadrantsHome() {
  return (
    <Container fluid className=" p-0">
      <Row className="d-flex containerCuadrants  p-0 m-0">
        <Col
          className="mx-0 mt-2 p-0 d-flex flex-column align-items-center  justify-content-center cuadrantColumn"
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(19,19,19,0.3) 100%),url(${cuadrants1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to={`/tienda/todos`}>
            <button className="button-cuadrant ">
              <Cart color="#F0F0F0" size={25} />
              <h2 className="textCuadrants mt-2">Tienda</h2>
            </button>
          </Link>
        </Col>

        <Col
          className="mx-0 mt-2 p-0 d-flex flex-column align-items-center  justify-content-center cuadrantColumn"
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(19,19,19,0.3) 100%),url(${cuadrants2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link
            to=""
            onClick={() => handleAlert("Esta función esta fuera del alcance del proyecto.")}
          >
            <button className="button-cuadrant">
              <Cup color="#F0F0F0" size={25} />
              <h2 className="textCuadrants mt-2">Cristaleria y Accesorios</h2>
            </button>
          </Link>
        </Col>
        <Col
          className="mx-0 mt-2 p-0 d-flex flex-column align-items-center  justify-content-center cuadrantColumn"
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(19,19,19,0.3) 100%),url(${cuadrants3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link
            to=""
            onClick={() => handleAlert("Esta función esta fuera del alcance del proyecto.")}
          >
            <button className="button-cuadrant">
              <Megaphone color="#F0F0F0" size={25} />
              <h2 className="textCuadrants mt-2">Promociones</h2>
            </button>
          </Link>
        </Col>
        <Col
          className="mx-0 mt-2 p-0 d-flex flex-column align-items-center  justify-content-center cuadrantColumn"
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(19,19,19,0.3) 100%),url(${cuadrants4})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link
            to=""
            onClick={() => handleAlert("Esta función esta fuera del alcance del proyecto.")}
          >
            <button className="button-cuadrant">
              <Sun color="#F0F0F0" size={25} />
              <h2 className="textCuadrants mt-2">Cavas</h2>
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default CuadrantsHome;
