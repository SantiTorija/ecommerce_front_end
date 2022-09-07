import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Wine.css";
import Cantidad from "../components/Cantidad.jsx";
import NavBar from "../components/Navbar";

function Wine() {
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

  return (
    wine && (
      <>
        <NavBar />
        <div className="container">
          <div className="row pt-5">
            <div className="col-6">
              <img src={wine.picture} alt="imagen vino" />
            </div>
            <div className="col-6 pt-5">
              <Link to="/tienda" className="wine__link">
                Vinos del mundo
              </Link>
              <h3 className="Wine__title">{wine.name}</h3>
              <hr></hr>
              {wine.price ? (
                <h4 className="wine__price">$ {wine.price}</h4>
              ) : null}
              <Cantidad />
              {wine.variety ? (
                <h5 className="wine__ul">variedad : {wine.variety}</h5>
              ) : null}
              {wine.country ? (
                <h5 className="wine__ul">Pais : {wine.country}</h5>
              ) : null}
              {wine.type ? (
                <h5 className="wine__ul">Tipo : {wine.type}</h5>
              ) : null}
              {wine.region ? (
                <h5 className="wine__ul">Region : {wine.region}</h5>
              ) : null}
              {wine.harvest ? (
                <h5 className="wine__ul">Cosecha : {wine.harvest}</h5>
              ) : null}
              {wine.cellar ? (
                <h5 className="wine__ul">Bodega : {wine.cellar}</h5>
              ) : null}
              {wine.capacity ? (
                <h5 className="wine__ul">Capacidad : {wine.capacity}</h5>
              ) : null}
              {wine.description ? (
                <h5 className="wine__ul">Descripcion : {wine.description}</h5>
              ) : null}
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default Wine;
