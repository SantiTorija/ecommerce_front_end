import moodboard from "../assets/images/moodboard.png";
import { Row, Col } from "react-bootstrap";

function AboutStep4() {
  return (
    <Row className="mt-5 align-items-center">
      <Col>
        <div className="d-flex align-items-center gap-3 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#F0F0F0"
            className="bi bi-4-circle"
            viewBox="0 0 16 16"
          >
            <path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
          </svg>
          <h4 className="aboutTitle ">Frameworks & Tecnologías</h4>
        </div>
        <p className="mt-4 aboutTextBody">
          Nuestro proyecto utiliza una base de datos no relacional. Trabajamos con Mongo, MongoDb,
          Mongo Atlas, Mongo Compass y Mongoose. Utilizamos Cloudinary para la impotación de
          imágenes,y Express, React y Node como frameworks de nuestra aplicación.
        </p>
      </Col>
      <Col className="stepColumn">
        <img src={moodboard} alt="imagen mer " className="col-6 w-100" />
      </Col>
    </Row>
  );
}

export default AboutStep4;
