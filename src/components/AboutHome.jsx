import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import Container from "react-bootstrap/Container";
import { InfoSquare } from "react-bootstrap-icons";
import handleAlert from "./Alert";
import { Link } from "react-router-dom";

function AboutHome() {
  return (
    <div className="aboutHome d-flex flex-column align-items-center justify-content-center">
      <Container>
        <div className="d-flex flex-column align-items-center justify-content-center gap-2">
          <Link to="" onClick={handleAlert}>
            <InfoSquare color="white" size={25}>
              Saber mas
            </InfoSquare>
          </Link>
          <h4 className="aboutText">
            Proyecto realizado con fines academicos como trabajo final para el coding Bootcamp de
            Hack Academy.
          </h4>
        </div>
      </Container>
    </div>
  );
}

export default AboutHome;
