import { Link } from "react-router-dom";
import "../styles/aboutThisProyect.css";
import { Container } from "react-bootstrap";
import AboutTitle from "../components/AboutTitle";
import mer from "../assets/images/mer-byn.jpg";
import mer2 from "../assets/images/mer2byn.jpg";

function AboutThisProyect() {
  return (
    <>
      <div className="about__us__hero">
        <Container>
          <div className=" text-hero">
            <AboutTitle />
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
        <div className="row mb-5">
          {/*           <div className=" used__tecnologies col-6">
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
          <div className=" used__tecnologies col-6 align-items-center justify-content-center">
            <h4 className="title__used__tecnologies">Video demo</h4>
            <iframe
              src="https://embed.lottiefiles.com/animation/8633"
              title="underConstruction"
              className="w-100"
            ></iframe>
          </div> */}

          <h2 className="text-white d-flex justify-content-center my-5 ">Planeación</h2>
          <img src={mer} alt="imagen mer " className="col-6"></img>

          <div className="col-6 text-white ps-4 d-flex align-items-center flex-column justify-content-center">
            <div>
              <h4>1 - Concepción del proyecto & ERD</h4>
              <p className="pb-4">
                Uno de nuestros primeros pasos fue pensar muy detalladamente el
                Modelo-Entidad-Relación Aqui definimos las principales relaciones entre las
                siguientes entidades: User, Admin, Category, Order, Product and Address.
              </p>
            </div>
            <div>
              <h4>2 - Diseño e Inspiracón</h4>
              <p>
                Inspiramos nuestro proyecto en Vinos del Sur, un ecommerce especializado en vinos de
                alto nivel Llenamos nuestra base de datos usando imagenes, descripciones, nombres y
                precios con productos de Vinos del Mundo, otra prestigiosa retailer.
              </p>
            </div>
          </div>
          <div className="d-flex mt-5">
            <div className="col-6 text-white pe-4 d-flex align-items-center flex-column justify-content-center">
              <div>
                <h4>3 - Metodologia de trabajo</h4>
                <p className="pb-4">
                  Organizamos nuestro trabajo usando metodologías ágiles en tres sprints. Cada
                  sprint tenía objetivos que fueron organizados y desarrolados de forma individual,
                  o en equiposs, usando Github y Trello, para determinar cuando una tarea se daba
                  por finalizada. Para la interacción entre los desarrolladores empleamos Discord y
                  fue de forma online.
                </p>
              </div>
              <div>
                <h4>4 - Frameworks & Tecnologías</h4>
                <p>
                  Usamos MERN stack. Por lo tanto nuestro proyecto consta de una base de datos no
                  relacional que creamos utilzando Mongo, MongoDB, Mongo Atlas, Mongo Compass, and
                  Mongoose, además de Supabase para la importacón de imagenes. Express, React, y
                  Node como los frameworks de nuestra página. En el desarrollo usamos tecnologias
                  complementarias a este stack como React Bootstrap, Hooks, Formidable, entre otras.
                </p>
              </div>
            </div>
            <img src={mer2} alt="imagen mer " className="col-6"></img>
          </div>
          <h2 className="d-flex justify-content-center mt-5 text-white">Tecnologias Utilizadas</h2>
          <div className="d-flex mt-4">
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <h6 className="mt-2">React</h6>
            </div>
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
              />
              <h6 className="mt-2">Redux</h6>
            </div>
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              />
              <h6 className="mt-2">JavaScript</h6>
            </div>
          </div>
          <div className="d-flex mt-4">
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://cdn-icons-png.flaticon.com/512/6124/6124991.png"
              />
              <h6 className="mt-2">Trello</h6>
            </div>
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://miro.medium.com/max/1400/1*El82DHzQwuFxMIXzBzKjUA.png"
              />
              <h6 className="mt-2">Node.js</h6>
            </div>
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
              />
              <h6 className="mt-2">Github</h6>
            </div>
          </div>
          <div className="d-flex mt-4">
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png"
              />
              <h6 className="mt-2">MongoDB</h6>
            </div>
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://www.seekpng.com/png/full/141-1415372_css3-icon-png.png"
              />
              <h6 className="mt-2">CSS</h6>
            </div>
            <div className="text-white col-4 text-center">
              <img
                className="image__technologies"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
              />
              <h6 className="mt-2">Bootstrap</h6>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-around text-white">
          <h2 className="d-flex justify-content-center mt-5 text-white mb-4">Equipo </h2>
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
                  src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png"
                  alt="logo_github"
                  className="img_linkedin ms-2"
                ></img>
              </a>
            </div>
          </div>
          <div className="col-4 card__linkdin d-flex flex-column align-items-center p-2">
            <img
              src="https://media-exp1.licdn.com/dms/image/D4D03AQFGLoalI1pb3Q/profile-displayphoto-shrink_800_800/0/1663447702462?e=1669248000&v=beta&t=s5jRq9n0Mv-tDgCSayO0Zs2AXTSMasnUWSm4VB9ovwc"
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
                  src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png"
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
                  src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png"
                  alt="logo_github"
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
