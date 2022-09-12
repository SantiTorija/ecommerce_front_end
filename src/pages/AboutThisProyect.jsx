import "../styles/aboutThisProyect.css";

function AboutThisProyect() {
  return (
    <>
      <div className="about__us__hero">
        <div className="col-6 text-hero">
          <h1 className="title__hero">Sobre este proyecto</h1>
          <h6 className="paragraph__hero">
            Este proyecto surge como trabajo final del curso intensivo (coding Bootcamp) realizado
            de la mano de Hack Academy. La metodología Bootcamp entrena y prepara a las personas a
            través de un método de aprendizaje intensivo donde el foco principal es desarrollar las
            habilidades necesarias para el desempeño exitoso en el mercado laboral. Empleando más de
            600 horas de trabajo en ejercicios prácticos y compartiendo varias instancias de trabajo
            en equipo, nos preparamos de acuerdo a las necesidades del mercado para poder
            insertarnos y formar parte de la industria.
          </h6>
          <img
            src="https://www.sbr-technologies.com/wp-content/uploads/2021/06/mern.png"
            alt="mern_logo"
            className="image__mern"
          ></img>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className=" used__tecnologies col-6">
            <h4 className="title__used__tecnologies">Tecnologías usadas</h4>
            <div className="d-flex justify-content-around">
              <div className="col-5 ps-5">
                <h5>Front-end React</h5> <li>Redux</li>
                <li>React-router-dom</li> <li>Bootstrap</li>
                <li>Github</li> <li>Font Awesomes</li>
              </div>
              <div className="col-3">
                <h5>Back-end</h5>
                <li>MongoDB</li>
                <li>Express</li> <li>JWT</li>
                <li>Formidable</li> <li>Bcryptjs</li>
                <li>Vercel</li>
                <li>MongoDB</li> <li>Atlas</li>
              </div>
            </div>
          </div>
          <div className=" used__tecnologies col-6">
            <h4 className="title__used__tecnologies">Video demo</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutThisProyect;
