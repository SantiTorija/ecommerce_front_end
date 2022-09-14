import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Wine.css";
import Cantidad from "../components/Cantidad.jsx";
import ProductCard from "../components/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AiOutlineLine } from "react-icons/ai";

function Wine(props) {
  const [wine, setWine] = useState(null);
  const { slug } = useParams();
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/wines/${slug}`,
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
        url: `http://localhost:8000/wines`,
      });
      setWines(response.data.sort((a, b) => 0.5 - Math.random()).slice(0, 3));
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
                <h5 className="wine__ul">Tipo: {wine.type.name}</h5>
                <h5 className="wine__ul">Pais: {wine.country}</h5>
                <h5 className="wine__ul">Cosecha: {wine.harvest}</h5>
                <h5 className="wine__ul">Bodega: {wine.cellar}</h5>
                <h5 className="wine__ul">Capacidad: {wine.capacity}</h5>
                <h5 className="wine__price">Precio: ${wine.price}</h5>
                <Cantidad wine={wine} setShowCart={props.setShowCart} />
              </div>
              <div className="col-2"></div>
            </div>
            <span className="recommended__title">
              <AiOutlineLine className="text-white me-2" /> RECOMENDADOS{" "}
              <AiOutlineLine className="text-white ms-2" />
            </span>
            <div className=" d-flex justify-content-center">
              <div className="arrow__carrousel">
                <span className="flecha">
                  <ArrowBackIosNewIcon />
                </span>
              </div>
              {wines.map((reccomended) => (
                <div className="mx-3 ">
                  <ProductCard wine={reccomended} setShowCart={props.setShowCart} />
                </div>
              ))}
              <div className="arrow__carrousel">
                <span className="flecha">
                  <ArrowForwardIosIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default Wine;
