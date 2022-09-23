import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLine } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import React from "react";
import "../styles/highlighted.css";
import AboutTitle from "../components/AboutTitle";

SwiperCore.use([Pagination, Navigation, Autoplay]);

function Highlighted(props) {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const dataWines = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}wines`,
      });
      const winesFiltered = response.data.filter((wine) => wine.highlighted);
      setWines(winesFiltered.sort((a, b) => 0.5 - Math.random()));
      return response;
    };
    dataWines();
  }, []);

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
    wines && (
      <>
        <div className="d-none d-lg-block container py-5">
          <AboutTitle title={"PRODUCTOS DESTACADOS"} />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            className="contenedor_style pt-4"
            pagination={{ clickable: true, className: "pagination" }}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slides}
          </Swiper>
        </div>
        <div className="d-none d-md-block d-lg-none container">
          <span className="recommended__title mt-5">
            <AiOutlineLine className="text-white me-2" />{" "}
            <AboutTitle title={"PRODUCTOS DESTACADOS"} />
            <AiOutlineLine className="text-white ms-2" />
          </span>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            className="contenedor_style"
            pagination={{ clickable: true, className: "pagination" }}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slides}
          </Swiper>
        </div>
        <div className="d-block d-md-none container">
          <AboutTitle title={"PRODUCTOS DESTACADOS"} />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            className="contenedor_style"
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slides}
          </Swiper>
        </div>
      </>
    )
  );
}

export default Highlighted;
