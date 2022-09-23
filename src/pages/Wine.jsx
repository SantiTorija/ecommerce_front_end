import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Wine.css";
import Quantity from "../components/Quantity.jsx";
import ProductCard from "../components/ProductCard";
import { AiOutlineLine } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import React from "react";
import "../styles/highlighted.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import backImage from "../assets/images/cellar3.webp";
import AboutTitle from "../components/AboutTitle";

SwiperCore.use([Pagination, Navigation, Autoplay]);

function Wine(props) {
  const [wine, setWine] = useState(null);
  const { slug } = useParams();
  const [wines, setWines] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}wines/${slug}`,
      });
      setWine(response.data);
      return response;
    };
    dataWine();
  }, [slug]);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}wines/filter/${wine?.type?.name}`,
      });
      setWines(response.data.sort((a, b) => 0.5 - Math.random()));
      return response;
    };
    dataWine();
  }, [wine?.type?.name]);

  const slides = [];
  for (const wine of wines) {
    slides.push(
      <SwiperSlide
        key={`slide-${wine._id}`}
        className=" d-flex justify-content-center slider__class"
      >
        <ProductCard wine={wine} setShowCart={props.setShowCart} />
      </SwiperSlide>,
    );
  }

  return (
    wine && (
      <>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(19,19,19,0.7) 10%, rgba(19,19,19,0.7) 100%), url(${backImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: "7rem",
            paddingBottom: "5rem",
          }}
        >
          <Container>
            <Row className="justify-content-between">
              <Col className="d-none d-lg-block">
                <Card
                  id="card-image-solo"
                  style={{
                    width: "100%",
                    marginRight: "3rem",
                    backgroundColor: "transparent",
                  }}
                >
                  <Card.Img variant="top" src={wine.picture} alt="imagen vino" />
                </Card>
              </Col>
              <Col>
                <Card
                  id="card-description"
                  style={{
                    width: "100%",
                    height: "98%",
                    backgroundColor: "rgb(19, 19, 19, 0.5)",
                    padding: "1.5rem",
                  }}
                >
                  <Card.Img
                    className="d-block d-lg-none"
                    variant="top"
                    src={wine.picture}
                    alt="imagen vino"
                  />
                  <Card.Body>
                    <Card.Title className="Wine__title fs-4 mb-3 text-center">
                      {wine.name}
                    </Card.Title>
                    <div className="card-text">
                      <h5 className="wine__description d-none d-md-block fs-6">
                        {wine.description}
                      </h5>
                      <h5 className="wine__ul text-capitalize fs-5">
                        <strong>Tipo:</strong>{" "}
                        <span className="text-capitalize">{wine.type.name}</span>
                      </h5>
                      <h5 className="wine__ul fs-5">
                        <strong>País:</strong> {wine.country}
                      </h5>
                      <h5 className="wine__ul fs-5">
                        <strong>Cosecha:</strong> {wine.harvest}
                      </h5>
                      <h5 className="wine__ul fs-5">
                        <strong>Bodega:</strong> {wine.cellar}
                      </h5>
                      <h5 className="wine__ul fs-5">
                        <strong>Capacidad:</strong> {wine.capacity}
                      </h5>
                      <h5 className="wine__price">
                        <strong>Precio:</strong> US$ {wine.price}
                      </h5>
                      <div className="text-center w-100">
                        <Quantity wine={wine} setShowCart={props.setShowCart} />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div className="d-none d-lg-block pt-4">
            <AboutTitle title={"PRODUCTOS RELACIONADOS"} />
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={3}
              loop={true}
              className="contenedor_style"
              navigation
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              {slides}
            </Swiper>
          </div>
          <div className="d-none d-md-block d-lg-none">
            <span className="recommended__title">
              <AiOutlineLine className="text-white me-2" /> PRODUCTOS RELACIONADOS
              <AiOutlineLine className="text-white ms-2" />
            </span>
            <div className="container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={2}
                className="contenedor_style"
                navigation
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
              >
                {slides}
              </Swiper>
            </div>
          </div>
          <div className="d-block d-md-none container">
            <span className="recommended__title">
              <AiOutlineLine className="text-white me-2" /> PRODUCTOS RELACIONADOS
              <AiOutlineLine className="text-white ms-2" />
            </span>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              className="contenedor_style"
              navigation
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              {slides}
            </Swiper>
          </div>
        </Container>
      </>
    )
  );
}
export default Wine;
