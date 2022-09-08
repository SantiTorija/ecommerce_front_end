import "../styles/footer.css";
import { Col, Row, Container } from "react-bootstrap";
import {
	Instagram,
	Facebook,
	Whatsapp,
	Envelope,
	Shop,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import hackWines from "../assets/images/hackWines.png";

function FooterWeb() {
	return (
		<footer>
			<Container>
				<div className="footer py-5">
					<div className="row">
						<div className="col-6 col-md-2 mb-3">
							<img alt="" src={hackWines} />
							<div className="d-flex flex-row gap-2 mt-3">
								<Instagram />
								<Facebook />
								<Whatsapp />
								<Envelope />
							</div>
						</div>

						<div className="col-6 col-md-2 mb-3">
							<h3>MENU</h3>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<Link className="navbar-link me-3 " to={"/"}>
										Home
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link className="navbar-link me-3" to={"/tienda"}>
										Tienda
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link
										className="navbar-link me-3"
										to={"/sobre-este-proyecto"}
									>
										Sobre este proyecto
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link className="navbar-link me-3" to={"/contacto"}>
										Contacto
									</Link>
								</li>
							</ul>
						</div>

						<div className="col-6 col-md-2 mb-3">
							<h3>LOCAL </h3>
							{/* <Shop /> */}
							<p>
								Avenida Rivera 4321.
								<br />
								Montevideo.
								<br />L a V: 9 a 18 hs.
							</p>
						</div>

						<div className="col-md-5 offset-md-1 mb-3">
							<form>
								<h4>Subscribite a nuestro newsletter</h4>
								<p>Y recibi promociones y noticias de nuestra tienda.</p>
								<div className="d-flex flex-column flex-sm-row w-100 gap-2">
									<label for="newsletter1" className="visually-hidden">
										Email
									</label>
									<input
										id="newsletter1"
										type="text"
										className="form-control"
										placeholder="Email"
									/>
									<button className="btn goldenButton" type="button">
										Subscribite
									</button>
								</div>
							</form>
						</div>
					</div>

					<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
						<p>&copy; 2022 Todos los derechos reservados.</p>
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default FooterWeb;
