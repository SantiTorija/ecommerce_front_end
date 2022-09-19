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
            backgroundImage: `linear-gradient(rgba(19,19,19,0.3) 10%, rgba(0,0,0,0.3) 100%),url(${image3Hero})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Carousel.Caption>
            <h3 className="textTitleCarousel">Hack Wines</h3>
            <p className="textBodyCarousel">Vinos de calidad para personas con calidad</p>
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
            <h3 className="textTitleCarousel">Descubrí nuestra tienda</h3>
            <p className="textBodyCarousel">Tenemos lo que estas buscando</p>
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
            <h3 className="textTitleCarousel">Variedad de marcas y tipos</h3>
            <p className="textBodyCarousel">Tintos, Blancos, Rose, Espumantes, entre otros.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroHome;
