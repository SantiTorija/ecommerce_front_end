import moodboard from "../assets/images/moodboard.png";
import { Row, Col } from "react-bootstrap";

function AboutStep2() {
  return (
    <Row className="mt-5 align-items-center">
      <Col className="left">
        <div className="d-flex align-items-center gap-3 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#F0F0F0"
            className="bi bi-2-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
          </svg>
          <h4 className="aboutTitle ">Diseño e inspiración</h4>
        </div>
        <p className="mt-4 aboutTextBody">
          El siguiente paso, fue definir la estética y diseño para la plataforma. Debíamos sin
          embargo, realizar primero, una extensa investigación acerca de la industria de los vinos y
          el comercio electrónico. Tomamos como referencia un sitio en particular (Vinos del mundo)
          que nos nutriría con la información y fotografías necesarias para los diferentes productos
          del sitio.
        </p>
      </Col>
      <Col className="stepColumn right">
        <img src={moodboard} alt="imagen mer " className="col-6 w-100" />
      </Col>
    </Row>
  );
}

export default AboutStep2;
