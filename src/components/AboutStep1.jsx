import mer from "../assets/images/MER.png";
import { Row, Col } from "react-bootstrap";

function AboutStep1() {
  return (
    <Row className="mt-5 align-items-center">
      <Col className="stepColumn">
        <img src={mer} alt="imagen mer " className="col-6 w-100" />
      </Col>
      <Col>
        <div className="d-flex align-items-center gap-3 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#F0F0F0"
            className="bi bi-1-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
          </svg>
          <h4 className="aboutTitle ">Concepción del proyecto & MER</h4>
        </div>
        <p className="mt-4 aboutTextBody">
          Una vez decidido el rubro y el ecommerce a desarrollar, definimos el MER, modelo entidad
          relación.En este paso, puntualizamos y establecemos las principales relaciones entre las
          entidades del proyecto: Variedad, Vino, Usuario, Pedido y Administrador.
        </p>
      </Col>
    </Row>
  );
}

export default AboutStep1;
