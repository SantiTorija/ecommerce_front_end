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

  return (
    wine && (
      <>
        <div
          style={{
            backgroundImage: `url("https://www.latiendavinos.es/wp-content/uploads/2022/02/base-madera.webp")`,
          }}
          className="row Wine__main"
        >
          <div className="col-5 wine-image-card mt-3 mb-3">
            <img className="Wine__picture" src={wine.picture} alt="imagen vino" />
          </div>

          <div className="col-7 text-white py-3">
            <div className="Wine__card">
              {wine.type ? <h5 className="Wine__type">{wine.type}</h5> : null}
              <h3 className="Wine__title">{wine.name}</h3>
              {wine.description ? <h5 className="wine__ul">{wine.description}</h5> : null}
              <hr></hr>
              {wine.price ? (
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="wine__price">
                    US$ {wine.price} <span className="Wine__iva">IVA INCLUIDO</span>
                  </h4>
                  <Cantidad wine={wine} setShowCart={props.setShowCart} />
                </div>
              ) : null}
              <div className="product__data">
                {wine.variety ? (
                  <>
                    <div className="d-flex justify-content-between">
                      <h5 className="wine__ul">variedad : {wine.variety}</h5>
                      <h5 className="wine__ul">variedad : {wine.variety}</h5>
                    </div>
                    <hr></hr>
                  </>
                ) : null}
                {wine.country ? (
                  <>
                    <div className="d-flex justify-content-between mt-1 product-description-table">
                      <h5 className="wine__ul">Pais</h5>
                      <h5 className="wine__ul">{wine.country}</h5>
                    </div>
                  </>
                ) : null}

                {wine.harvest ? (
                  <>
                    <div className="d-flex justify-content-between mt-1 product-description-table">
                      <h5 className="wine__ul">Cosecha</h5>
                      <h5 className="wine__ul">{wine.harvest}</h5>
                    </div>
                  </>
                ) : null}
                {wine.cellar ? (
                  <>
                    <div className="d-flex justify-content-between mt-1 product-description-table">
                      <h5 className="wine__ul">Bodega</h5>
                      <h5 className="wine__ul">{wine.cellar}</h5>
                    </div>
                  </>
                ) : null}
                {wine.capacity ? (
                  <>
                    {" "}
                    <div className="d-flex justify-content-between mt-1 product-description-table">
                      <h5 className="wine__ul">Capacidad</h5>
                      <h5 className="wine__ul">{wine.capacity}</h5>
                    </div>
                  </>
                ) : null}
                <div className="d-flex justify-content-between mt-1 product-description-table mb-2">
                  <h5 className="wine__ul">Alcohol</h5>
                  <h5 className="wine__ul">{genRand(10, 15, 1)}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default Wine;
