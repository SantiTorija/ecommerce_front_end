import Carousel from "react-bootstrap/Carousel";
import ShopHeader from "./ShopHeader";

function ShopCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item className="carousel">
          <ShopHeader />
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <ShopHeader />
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <ShopHeader />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ShopCarousel;
