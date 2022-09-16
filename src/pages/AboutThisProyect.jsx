import { Link } from "react-router-dom";
import "../styles/aboutThisProyect.css";

function AboutThisProyect() {
  return (
    <>
      <div className="about__us__hero">
        <div className="col-7 text-hero">
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
        <div className="row mb-5">
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
        <div className="row d-flex justify-content-around text-white">
          <div className="col-4 card__linkdin d-flex flex-column align-items-center p-2">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFb0YlGuLybsg/profile-displayphoto-shrink_200_200/0/1567624582077?e=1668643200&v=beta&t=KW1PoGDIZtciWrajdnP07eYSgRi_tqx3uy0xYJ1vz0w"
              alt="profile_logo"
              className="profile_logo_linkedin"
            ></img>
            <h5>Guillermo Galain</h5>
            <h5>Full Stack Developer</h5>
            <div className="d-flex">
              <a
                href="https://www.linkedin.com/in/guillermogalain/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                  alt="logo_linkedin"
                  className="img_linkedin me-2"
                ></img>
              </a>
              <a href="https://github.com/guillermogalain" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="logo_github"
                  className="img_linkedin ms-2"
                ></img>
              </a>
            </div>
          </div>
          <div className="col-4 card__linkdin d-flex flex-column align-items-center p-2">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFX8ZJxJKbv3A/profile-displayphoto-shrink_200_200/0/1627398847167?e=1668643200&v=beta&t=9ZrTQX5KWZmj7iVSHG0uvKrjHcMn4W8cEvpyws4aEEM"
              alt="profile_logo"
              className="profile_logo_linkedin"
            ></img>
            <h5>Santiago Torija</h5>
            <h5>Full Stack Developer</h5>
            <div className="d-flex">
              <a
                href="https://www.linkedin.com/in/santiago-torija-31951113b/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                  alt="logo_linkedin"
                  className="img_linkedin me-2"
                ></img>
              </a>
              <a href="https://github.com/SantiTorija" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="logo_github"
                  className="img_linkedin ms-2"
                ></img>
              </a>
            </div>
          </div>
          <div className="col-4 card__linkdin d-flex flex-column align-items-center p-2 ">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQF6giCFp2NWXg/profile-displayphoto-shrink_200_200/0/1648464031374?e=1668643200&v=beta&t=PkN39jeL0QYJjlIfqqLPksHJpa0lcx-mb5QexekQ2ck"
              alt="profile_logo"
              className="profile_logo_linkedin"
            ></img>
            <h5>Alan Katz</h5>
            <h5>Full Stack Developer</h5>
            <div className="d-flex">
              <a
                href="https://www.linkedin.com/in/alan-katz-401468101/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                  alt="logo_linkedin"
                  className="img_linkedin me-2"
                ></img>
              </a>
              <a href="https://github.com/alankatz3793" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="logo_linkedin"
                  className="img_linkedin ms-2"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutThisProyect;
