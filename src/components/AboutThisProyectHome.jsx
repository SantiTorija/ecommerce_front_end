import winePhoto from "../assets/images/wine-about-us.png";
import "../styles/aboutThisProyectHome.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import backPhoto from "../assets/images/about-us-home-background2.jpg";
import AboutTitle from "../components/AboutTitle";

function AboutThisProyectHome() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(19,19,19,0.8) 10%, rgba(19,19,19,0.9) 100%),url(${backPhoto})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "4rem",
      }}
    >
      <Container className="pt-2">
        <AboutTitle title={"SOBRE ESTE PROYECTO"} />
        <div className="d-flex justify-content-between w-100 pb-5 align-items-center">
          <div>
            <div style={{ width: "80%" }} className="" id="aboutHome">
              <p style={{ lineHeight: "2rem" }} className="fs-5 w-100 " id="aboutHome2">
                Hack Wines logra ser un e-commerce 100% funcional (sin fines comerciales), impulsado
                como proyecto integrador del web developer bootcamp, dictado por Hack Academy,
                instituto especializado en forjar talentos para el rubro tecnológico.
              </p>
              <hr style={{ color: "#F0A202" }} />
              <Link to={"/aboutThisProyect"}>
                {" "}
                <button className="mt-4 button">Ver más información</button>
              </Link>
            </div>
          </div>
          <img className="d-none d-md-inline" style={{ width: "40%" }} src={winePhoto} alt="" />
        </div>
      </Container>
    </div>
  );
}

export default AboutThisProyectHome;
