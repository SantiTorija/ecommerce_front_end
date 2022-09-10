import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Wine.css";
import Cantidad from "../components/Cantidad.jsx";

function Wine(props) {
  const [wine, setWine] = useState({});
  const { slug } = useParams(); // pasar a slug
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
          <div className="col-5">
            <img className="Wine__picture" src={wine.picture} alt="imagen vino" />
          </div>
          <div className="col-6 my-3 col__wine__first">
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
        </div>
      </>
    )
  );
}
export default Wine;
