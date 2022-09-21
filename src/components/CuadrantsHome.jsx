import "../styles/home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import cuadrants1 from "../assets/images/foto1.jpg";
import cuadrants2 from "../assets/images/white1.jpg";
import cuadrants3 from "../assets/images/rose.jpg";
import cuadrants4 from "../assets/images/foto4.jpg";
import { Link } from "react-router-dom";

function CuadrantsHome() {
  return (
    <Container fluid className="p-0">
      <Row className="d-flex containerCuadrants p-0 m-0 bg-black">
        <Col
          className="mx-0 p-0 d-flex flex-column align-items-center  justify-content-center cuadrantColumn"
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(19,19,19,0.3) 100%),url(${cuadrants1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to={`/tienda/tinto`} className="d-flex w-100 h-100">
            <button className="button-cuadrant ">
              <h2 className="textCuadrants">TINTO</h2>
            </button>
          </Link>
        </Col>

        <Col
          className="mx-0  p-0 d-flex flex-column align-items-center  justify-content-center cuadrantColumn"
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(19,19,19,0.3) 100%),url(${cuadrants2})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link to={`/tienda/blanco`} className="d-flex w-100 h-100">
            <button className="button-cuadrant ">
              <h2 className="textCuadrants">BLANCO</h2>
            </button>
          </Link>
        </Col>
        <Col
          className="mx-0  p-0 d-flex flex-column align-items-center  justify-content-center cuadrantColumn"
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(19,19,19,0.3) 100%),url(${cuadrants3})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link to={`/tienda/rose`} className="d-flex w-100 h-100">
            <button className="button-cuadrant ">
              <h2 className="textCuadrants">ROSE</h2>
            </button>
          </Link>
        </Col>
        <Col
          className="mx-0  p-0 d-flex flex-column align-items-center  justify-content-center cuadrantColumn"
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(19,19,19,0.3) 100%),url(${cuadrants4})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        >
          <Link to={`/tienda/espumante`} className="d-flex w-100 h-100">
            <button className="button-cuadrant ">
              <h2 className="textCuadrants">ESPUMANTE</h2>
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default CuadrantsHome;
