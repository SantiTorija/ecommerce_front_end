import { Link } from "react-router-dom";
import "../styles/aboutThisProyect.css";
import { Container } from "react-bootstrap";
import AboutTitle from "../components/AboutTitle";
import AboutTitle2 from "../components/AboutTitle2";
import AboutStep1 from "../components/AboutStep1";
import AboutStep2 from "../components/AboutStep2";
import AboutStep3 from "../components/AboutStep3";
import AboutStep4 from "../components/AboutStep4";
import AboutTeam from "../components/AboutTeam";
import AboutTechnologies from "../components/AboutTechnologies";

function AboutThisProyect() {
  return (
    <>
      <div className="about__us__hero">
        <Container>
          <div className=" text-hero">
            <AboutTitle title={"Sobre este proyecto"} />
            <h6 className="paragraph__hero mt-4 mb-5">
              Este proyecto surge como trabajo final del curso intensivo (coding Bootcamp) realizado
              de la mano de Hack Academy. La metodología Bootcamp entrena y prepara a las personas a
              través de un método de aprendizaje intensivo donde el foco principal es desarrollar
              las habilidades necesarias para el desempeño exitoso en el mercado laboral. Empleando
              más de 600 horas de trabajo en ejercicios prácticos y compartiendo varias instancias
              de trabajo en equipo, nos preparamos de acuerdo a las necesidades del mercado para
              poder insertarnos y formar parte de la industria.
            </h6>
          </div>
        </Container>
      </div>
      <div className="container">
        <AboutTeam />
      </div>
      <AboutTechnologies />
      <div className="container">
        <div className="row mb-5 mt-5">
          <AboutTitle2 />
          <AboutStep1 />
          <AboutStep2 />
          <AboutStep3 />
          {/*    <AboutStep4 /> */}
        </div>
      </div>
    </>
  );
}

export default AboutThisProyect;
