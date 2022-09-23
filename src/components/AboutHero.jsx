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
            Hack Wines nace como proyecto final del curso Coding Bootcamp de Hack Academy, instituto
            especializado en forjar talentos para insertarse al rubro tecnologico.
          </p>
          <p className="paragraph__hero">
            El Coding Bootcamp propone 3 meses de arduo trabajo extremadamente práctico, dónde el
            estudiante dedica más de 600 horas para adquirir los conocimientos necesarios para
            aportar a la industria, utilizando metodologías ágiles (SCRUM), simulando así un entorno
            de trabajo real.
          </p>
          <p className="paragraph__hero">
            El resultado de éste proyecto se logró en sólo 3 semanas, dónde además de integrar los
            conocimientos adquiridos en el curso, nos encontramos con el desafío que presenta
            colaborar con un equipo, coordinar y organizarse en un tiempo acotado, así como
            ajustarse a los deadlines propuestos. Se logró cumplir tanto con los objetivos de
            diseño, como con los objetivos de funcionamiento en su totalidad.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default AboutHero;
