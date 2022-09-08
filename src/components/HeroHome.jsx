import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import image1Hero from "../assets/images/image1Hero.jpg";
import image2Hero from "../assets/images/image2Hero.jpg";
import image3Hero from "../assets/images/image3Hero.jpg";

function HeroHome() {
	return (
		<div>
			<Carousel>
				<Carousel.Item
					className="carousel"
					style={{
						backgroundImage: `linear-gradient(rgba(2,0,36,0.3) 10%, rgba(0,0,0,0.3) 100%),url(${image3Hero})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item
					className="carousel"
					style={{
						backgroundImage: `linear-gradient(rgba(2,0,36,0.3) 10%, rgba(0,0,0,0.3) 100%),url(${image2Hero})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item
					className="carousel"
					style={{
						backgroundImage: `linear-gradient(rgba(2,0,36,0.3) 10%, rgba(0,0,0,0.3) 100%),url(${image1Hero})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default HeroHome;
