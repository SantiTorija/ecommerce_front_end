import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Wine.css";
import Cantidad from "../components/Cantidad.jsx";
import ProductCard from "../components/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AiOutlineLine } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import React from "react";
import "../styles/highlighted.css";

SwiperCore.use([Pagination, Navigation]);

function Wine(props) {
  const [wine, setWine] = useState(null);
  const { slug } = useParams();
  const [wines, setWines] = useState([]);

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
  }, []);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}wines`,
      });
      setWines(response.data.sort((a, b) => 0.5 - Math.random()));
      return response;
    };
    dataWine();
  }, []);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  }

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
        <div className=" Wine__main">
          <div className="row">
            <div className="d-flex  Wine__picture__background">
              <div className="col-1"></div>
              <div className="col-5  pt-5">
                <img className="Wine__picture" src={wine.picture} alt="imagen vino" />
              </div>
              <div className="col-5 col__wine__first">
                <h2 className="Wine__title">{wine.name}</h2>
                <h5 className="wine__description">{truncateString(wine?.description, 200)}</h5>
                <h5 className="wine__ul text-capitalize">Tipo: {wine.type.name}</h5>
                <h5 className="wine__ul">Pais: {wine.country}</h5>
                <h5 className="wine__ul">Cosecha: {wine.harvest}</h5>
                <h5 className="wine__ul">Bodega: {wine.cellar}</h5>
                <h5 className="wine__ul">Capacidad: {wine.capacity}</h5>
                <h5 className="wine__price">Precio: ${wine.price}</h5>
                <Cantidad wine={wine} setShowCart={props.setShowCart} />
              </div>
              <div className="col-2"></div>
            </div>
            <div>
              <span className="recommended__title">
                <AiOutlineLine className="text-white me-2" /> PRODUCTOS RELACIONADOS
                <AiOutlineLine className="text-white ms-2" />
              </span>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={3}
                loop={true}
                className="contenedor_style"
                navigation
              >
                {slides}
              </Swiper>
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default Wine;
