import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import Container from "react-bootstrap/Container";
import { InfoSquare } from "react-bootstrap-icons";

function AboutHome() {
	return (
		<div className="aboutHome d-flex flex-column align-items-center justify-content-center">
			<Container>
				<div className="d-flex flex-column align-items-center justify-content-center">
					<h4 className="aboutText">
						Proyecto realizado con fines academicos como trabajo final para el
						coding Bootcamp de Hack Academy.
					</h4>
					<a href="prueba">
						<InfoSquare color="white">Saber mas</InfoSquare>
					</a>
				</div>
			</Container>
		</div>
	);
}

export default AboutHome;
