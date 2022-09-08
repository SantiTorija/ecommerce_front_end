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
        <div className="row Wine__main">
          <div className="col-6 Wine__picture">
            <img
              src="https://vinosdelsur.com.ec/wp-content/uploads/2020/09/b-domaine-barondarques.png"
              alt="imagen vino"
            />
          </div>
          <div className="col-6 text-white py-3">
            <div className="Wine__card">
              {wine.type ? <h5 className="Wine__type">{wine.type}</h5> : null}
              <h3 className="Wine__title">{wine.name}</h3>
              {wine.description ? (
                <h5 className="wine__ul">{wine.description}</h5>
              ) : null}
              <hr></hr>
              {wine.price ? (
                <h4 className="wine__price">
                  $ {wine.price} <span className="Wine__iva">IVA INCLUIDO</span>
                </h4>
              ) : null}
              <Cantidad />
              <div className="product__data">
                <h4 className="d-flex justify-content-center mb-5 Wine__type">
                  Product Data
                </h4>
                {wine.variety ? (
                  <>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="wine__ul">variedad : {wine.variety}</h5>
                      <h5 className="wine__ul">variedad : {wine.variety}</h5>
                    </div>
                    <hr></hr>
                  </>
                ) : null}
                {wine.country ? (
                  <>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="wine__ul">Pais</h5>
                      <h5 className="wine__ul">{wine.country}</h5>
                    </div>
                    <hr></hr>
                  </>
                ) : null}

                {wine.region ? (
                  <>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="wine__ul">Region</h5>
                      <h5 className="wine__ul">{wine.region}</h5>
                    </div>
                    <hr></hr>
                  </>
                ) : null}
                {wine.harvest ? (
                  <>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="wine__ul">Cosecha</h5>
                      <h5 className="wine__ul">{wine.harvest}</h5>
                    </div>
                    <hr></hr>
                  </>
                ) : null}
                {wine.cellar ? (
                  <>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="wine__ul">Bodega</h5>
                      <h5 className="wine__ul">{wine.cellar}</h5>
                    </div>
                    <hr></hr>
                  </>
                ) : null}
                {wine.capacity ? (
                  <>
                    {" "}
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="wine__ul">Capacidad</h5>
                      <h5 className="wine__ul">{wine.capacity}</h5>
                    </div>
                    <hr></hr>
                  </>
                ) : null}
                <div className="d-flex justify-content-between mb-3">
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
