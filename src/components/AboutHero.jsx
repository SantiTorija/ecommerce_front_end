import AboutTitle from "../components/AboutTitle";
import Container from "react-bootstrap/Container";
import "../styles/aboutThisProyect.css";

function AboutHero() {
  return (
    <div className="about__us__hero">
      <Container>
        <div className="text-hero">
          <AboutTitle title={"SOBRE ESTE PROYECTO"} />
          <p className="paragraph__hero">
            Este proyecto surge como trabajo final del curso intensivo (coding Bootcamp) realizado
            de la mano de Hack Academy.
          </p>
          <p className="paragraph__hero">
            La metodología Bootcamp entrena y prepara a las personas a través de un método de
            aprendizaje intensivo donde el foco principal es desarrollar las habilidades necesarias
            para el desempeño exitoso en el mercado laboral.
          </p>
          <p className="paragraph__hero">
            Empleando más de 600 horas de trabajo en ejercicios prácticos y compartiendo varias
            instancias de trabajo en equipo, nos preparamos de acuerdo a las necesidades del mercado
            para poder insertarnos y formar parte de la industria.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default AboutHero;
