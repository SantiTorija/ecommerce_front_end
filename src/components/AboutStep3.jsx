import mer from "../assets/images/MER.png";
import { Row, Col } from "react-bootstrap";

function AboutStep3() {
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
            className="bi bi-3-circle"
            viewBox="0 0 16 16"
          >
            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
          </svg>
          <h4 className="aboutTitle ">Metodología de Trabajo</h4>
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

export default AboutStep3;
