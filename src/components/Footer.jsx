import "../styles/footer.css";
import { Col, Row, Container } from "react-bootstrap";
import { Instagram, Facebook, Whatsapp, Envelope } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function FooterWeb() {
	return (
		<footer>
			<Container>
				<div className="footer py-5">
					<div className="row">
						<div className="col-6 col-md-2 mb-3">
							<h5>Section</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										Home
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										Features
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										Pricing
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="das" className="nav-link p-0 text-muted">
										FAQs
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										About
									</a>
								</li>
							</ul>
						</div>

						<div className="col-6 col-md-2 mb-3">
							<h5>Section</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										Home
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										Features
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										Pricing
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										FAQs
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										About
									</a>
								</li>
							</ul>
						</div>

						<div className="col-6 col-md-2 mb-3">
							<h5>Section</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										Home
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="das" className="nav-link p-0 text-muted">
										Features
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="das" className="nav-link p-0 text-muted">
										Pricing
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="das" className="nav-link p-0 text-muted">
										FAQs
									</a>
								</li>
								<li className="nav-item mb-2">
									<a href="dsa" className="nav-link p-0 text-muted">
										About
									</a>
								</li>
							</ul>
						</div>

						<div className="col-md-5 offset-md-1 mb-3">
							<form>
								<h5>Subscribe to our newsletter</h5>
								<p>Monthly digest of what's new and exciting from us.</p>
								<div className="d-flex flex-column flex-sm-row w-100 gap-2">
									<label for="newsletter1" className="visually-hidden">
										Email address
									</label>
									<input
										id="newsletter1"
										type="text"
										className="form-control"
										placeholder="Email address"
									/>
									<button className="btn btn-primary" type="button">
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>

					<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
						<p>&copy; 2022 Company, Inc. All rights reserved.</p>
						<ul class="list-unstyled d-flex">
							<li class="ms-3">
								<a class="link-dark" href="dsa">
									<svg class="bi" width="24" height="24"></svg>
								</a>
							</li>
							<li class="ms-3">
								<a class="link-dark" href="dsa">
									<svg class="bi" width="24" height="24"></svg>
								</a>
							</li>
							<li class="ms-3">
								<a class="link-dark" href="dsa">
									<svg class="bi" width="24" height="24"></svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default FooterWeb;
