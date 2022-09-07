import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";

function AboutHome() {
	return (
		<>
			<div className="bg-light py-5">
				<div className="container py-5">
					<div className="row mb-4">
						<div className="col-lg-5">
							<h2 className="display-4 font-weight-light">
								Sobre este proyecto
							</h2>
							<p className="font-italic text-muted">
								Proyecto con fines academicos, surgido como trabajo final del
								curso intensivo (coding Bootcamp) realizado en Hack Academy.
							</p>
						</div>
					</div>

					<div className="row text-center">
						{/* <!-- Team item--> */}
						<div className="col-xl-3 col-sm-6 mb-5">
							<div className="bg-white rounded shadow-sm py-5 px-4">
								<img
									src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
									alt=""
									width="100"
									className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
								/>
								<h5 className="mb-0">Nombre 1</h5>
								<span className="small text-uppercase text-muted">
									Estudiante
								</span>
								<ul className="social mb-0 list-inline mt-3">
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-facebook-f"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- End--> */}

						{/*  <!-- Team item--> */}
						<div className="col-xl-3 col-sm-6 mb-5">
							<div className="bg-white rounded shadow-sm py-5 px-4">
								<img
									src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
									alt=""
									width="100"
									className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
								/>
								<h5 className="mb-0">Nombre 2</h5>
								<span className="small text-uppercase text-muted">
									Estudiante
								</span>
								<ul className="social mb-0 list-inline mt-3">
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-facebook-f"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="hrefCambiar" className="social-link">
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- End--> */}

						{/*  <!-- Team item--> */}
						<div className="col-xl-3 col-sm-6 mb-5">
							<div className="bg-white rounded shadow-sm py-5 px-4">
								<img
									src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
									alt=""
									width="100"
									className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
								/>
								<h5 className="mb-0">Nombre 3</h5>
								<span className="small text-uppercase text-muted">
									Estudiante
								</span>
								<ul className="social mb-0 list-inline mt-3">
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-facebook-f"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="cambiarHref" className="social-link">
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/*    <!-- End--> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutHome;
