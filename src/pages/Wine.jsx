import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Wine.css";
import Cantidad from "../components/Cantidad.jsx";
import ProductCard from "../components/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Wine(props) {
  const [wine, setWine] = useState({});
  const { slug } = useParams();
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/wines/${slug}`,
      });
      //console.log(response.data.sort((a, b) => 0.5 - Math.random()).slice(0, 4));
      setWine(response.data);
      return response;
    };
    dataWine();
  }, []);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/wines/filter/${wine.type}`,
      });
      setWines(response.data.sort((a, b) => 0.5 - Math.random()).slice(0, 3));
      return response;
    };
    dataWine();
  }, [wine]);

  function genRand(min, max, decimalPlaces) {
    var rand =
      Math.random() < 0.5
        ? (1 - Math.random()) * (max - min) + min
        : Math.random() * (max - min) + min; // could be min or max or anything in between
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  }

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
            <div className="col-1"></div>
            <div className="col-5">
              <img className="Wine__picture" src={wine.picture} alt="imagen vino" />
            </div>
            <div className="col-5 mt-3 col__wine__first">
              <h2 className="Wine__title">{wine.name}</h2>
              <h5 className="wine__ul">{truncateString(wine?.description, 200)}</h5>
              <h5 className="wine__ul">Tipo: {wine.type}</h5>
              <h5 className="wine__ul">Pais: {wine.country}</h5>
              <h5 className="wine__ul">Cosecha: {wine.harvest}</h5>
              <h5 className="wine__ul">Bodega: {wine.cellar}</h5>
              <h5 className="wine__ul">Capacidad: {wine.capacity}</h5>
              <h5 className="wine__price">Precio: ${wine.price}</h5>
              <Cantidad wine={wine} setShowCart={props.setShowCart} />
            </div>
            <div className="col-2"></div>
            <div className="mt-5 d-flex justify-content-center">
              <div className="arrow__carrousel">
                <span className="flecha">
                  <ArrowBackIosNewIcon />
                </span>
              </div>
              {wines.map((reccomended) => (
                <div className="mx-3">
                  <ProductCard wine={reccomended} />
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
