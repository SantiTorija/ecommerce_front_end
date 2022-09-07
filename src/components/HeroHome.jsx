import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import image1Hero from "../assets/images/image1Hero.jpg";
import image2Hero from "../assets/images/image2Hero.jpg";
import image3Hero from "../assets/images/image3Hero.jpg";

function HeroHome() {
  return (
    <Carousel>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 slider "
          src={image1Hero}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Vinos del Mundo </h3>
          <p>Bienvenidos a la tienda online de X .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 slider"
          src={image2Hero}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Vinos de Calidad</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 slider"
          src={image3Hero}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Vinos del mundo,a tu casa</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroHome;
