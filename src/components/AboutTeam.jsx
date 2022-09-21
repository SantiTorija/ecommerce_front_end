import AboutTitle from "../components/AboutTitle";
import { Container } from "react-bootstrap";
import "../styles/aboutThisProyect.css";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

function AboutTeam() {
  return (
    <Container>
      <div className="row d-flex justify-content-around text-white mb-5">
        <AboutTitle title={"El Equipo"} />
        <div className="col-4 card__linkdin d-flex flex-column align-items-center p-2 mb-3">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFb0YlGuLybsg/profile-displayphoto-shrink_200_200/0/1567624582077?e=1668643200&v=beta&t=KW1PoGDIZtciWrajdnP07eYSgRi_tqx3uy0xYJ1vz0w"
            alt="profile_logo"
            className="profile_logo_linkedin"
          ></img>
          <h5>Guillermo Galain</h5>
          <h5 className="jobPosition">Full Stack Developer</h5>
          <div className="d-flex mt-1">
            <a href="https://www.linkedin.com/in/guillermogalain/" target="_blank" rel="noreferrer">
              <AiFillLinkedin style={{ fontSize: "2.2rem" }} className="lkdnLogo iconHover" />
            </a>
            <a href="https://github.com/guillermogalain" target="_blank" rel="noreferrer">
              <AiOutlineGithub className="iconHover" style={{ fontSize: "2rem" }} />
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
          <h5 className="jobPosition">Full Stack Developer</h5>
          <div className="d-flex mt-1">
            <a
              href="https://www.linkedin.com/in/santiago-torija-31951113b/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="iconHover" style={{ fontSize: "2.2rem" }} />
            </a>
            <a href="https://github.com/SantiTorija" target="_blank" rel="noreferrer">
              <AiOutlineGithub className="iconHover" style={{ fontSize: "2rem" }} />
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
          <h5 className="jobPosition">Full Stack Developer</h5>
          <div className="d-flex mt-1">
            <a
              href="https://www.linkedin.com/in/alan-katz-401468101/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="iconHover" style={{ fontSize: "2.2rem" }} />
            </a>
            <a href="https://github.com/alankatz3793" target="_blank" rel="noreferrer">
              <AiOutlineGithub className="iconHover" style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutTeam;
