import winePhoto from "../assets/images/wine-about-us.png";
import "../styles/aboutThisProyectHome.css";
import { AiOutlineLine } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function AboutThisProyectHome() {
  return (
    <Container>
      <div className="d-flex justify-content-between w-100 mt-5 pb-5 align-items-center">
        <div>
          <h2 className="title" id="hackWines">
            <AiOutlineLine /> Hack Wines <AiOutlineLine />
          </h2>

          <div style={{ width: "80%" }}>
            <p style={{ lineHeight: "2rem" }} className="fs-5">
              Es un e-commerce 100% funcional (sin fines comerciales), impulsado como proyecto
              integrador del web developer bootcamp, dictado por Hack Academy, un instituto
              especializado en forjar talentos para el rubro tecnológico.
            </p>
            <hr style={{ color: "#fbb701" }} />
            <Link to={"/aboutThisProyect"}>
              {" "}
              <button className="mt-5 button">Ver más información</button>
            </Link>
          </div>
        </div>
        <img style={{ width: "40%", opacity: "0.7" }} src={winePhoto} alt="" />
      </div>
    </Container>
  );
}

export default AboutThisProyectHome;
