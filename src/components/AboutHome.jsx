import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function AboutHome() {
	return (
		<div className="aboutHome">
			<Container>
				<Row>
					<Col className="d-flex flex-column align-items-center justify-content-center">
						<div className="columAbout d-flex flex-column">
							<h4 className="aboutText">
								Proyecto realizado con fines academicos como trabajo final para
								el coding Bootcamp de Hack Academy.
							</h4>
							<Button>Saber mas</Button>
						</div>
					</Col>
					<Col>
						<iframe
							src="https://embed.lottiefiles.com/animation/55290"
							title="prueba"
						></iframe>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AboutHome;
