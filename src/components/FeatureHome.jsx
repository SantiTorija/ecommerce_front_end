import "../styles/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Truck, Box, CreditCard } from "react-bootstrap-icons";

function FeatureHome() {
	return (
		<Container className="bg-white">
			<Row>
				<Col className="d-flex flex-column align-items-center featureColumn justify-content-center">
					<Truck
						color="#D80032
"
					/>
					<h3 className="textFeatures mt-2">Envios en 24 horas</h3>
				</Col>
				<Col className="d-flex flex-column align-items-center featureColumn justify-content-center">
					<Box
						color="#D80032
"
					/>
					<h3 className="textFeatures mt-2">Vinos del mundo a tu casa</h3>
				</Col>
				<Col className="d-flex flex-column align-items-center featureColumn justify-content-center">
					<CreditCard
						color="#D80032
"
					/>
					<h3 className="textFeatures mt-2">Hasta 12 cuotas sin recargo</h3>
				</Col>
			</Row>
		</Container>
	);
}

export default FeatureHome;
