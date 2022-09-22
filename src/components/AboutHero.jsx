import AboutTitle from "../components/AboutTitle";
import Container from "react-bootstrap/Container";
import ScrollIcon from "../components/ScrollIcon";

function AboutHero() {
  return (
    <div className="about__us__hero">
      <Container>
        <div className="text-hero">
          <AboutTitle title={"SOBRE ESTE PROYECTO"} />
          <p className="paragraph__hero mt-4 mb-4 ">
            Este proyecto surge como trabajo final del curso intensivo (coding Bootcamp) realizado
            de la mano de Hack Academy. <br />
            <br />
            La metodología Bootcamp entrena y prepara a las personas a través de un método de
            aprendizaje intensivo donde el foco principal es desarrollar las habilidades necesarias
            para el desempeño exitoso en el mercado laboral. <br /> <br />
            Empleando más de 600 horas de trabajo en ejercicios prácticos y compartiendo varias
            instancias de trabajo en equipo, nos preparamos de acuerdo a las necesidades del mercado
            para poder insertarnos y formar parte de la industria.
          </p>
          <div className="w-100 d-flex justify-content-center">
            <ScrollIcon />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutHero;
