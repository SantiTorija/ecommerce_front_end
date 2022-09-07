import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";

function FeatureHome() {
	return (
		<>
			<div className="container px-4 py-5" id="icon-grid">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
					<div className="col d-flex align-items-start">
						<svg
							className="bi text-muted flex-shrink-0 me-3"
							width="1.75em"
							height="1.75em"
						></svg>
						<div>
							<h4 className="fw-bold mb-0">Featured title1</h4>
							<p>
								Paragraph of text beneath the heading to explain the heading.
							</p>
						</div>
					</div>
					<div className="col d-flex align-items-start">
						<svg
							className="bi text-muted flex-shrink-0 me-3"
							width="1.75em"
							height="1.75em"
						></svg>
						<div>
							<h4 className="fw-bold mb-0">Entregas en 24 hs</h4>
							<p>
								Paragraph of text beneath the heading to explain the heading.
							</p>
						</div>
					</div>
					<div className="col d-flex align-items-start">
						<svg
							className="bi text-muted flex-shrink-0 me-3"
							width="1.75em"
							height="1.75em"
						></svg>
						<div>
							<h4 className="fw-bold mb-0">Envios gratis</h4>
							<p>
								Paragraph of text beneath the heading to explain the heading.
							</p>
						</div>
					</div>
					<div className="col d-flex align-items-start">
						<svg
							className="bi text-muted flex-shrink-0 me-3"
							width="1.75em"
							height="1.75em"
						></svg>
						<div>
							<h4 className="fw-bold mb-0">Featured title4</h4>
							<p>
								Paragraph of text beneath the heading to explain the heading.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FeatureHome;
