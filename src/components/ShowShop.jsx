import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineLine } from "react-icons/ai";
import BounceLoader from "react-spinners/BounceLoader";
import ProductCard from "./ProductCard";
import "../styles/showShop.css";
import { Container } from "react-bootstrap";

function ShowShop(props) {
  const [wines, setWines] = useState(null);
  const [type, setType] = useState("todos");

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/wines/filter/${type}`,
      });
      setWines(response.data);
      return response;
    };
    dataWine();
  }, [type]);

  if (wines) {
    return (
      <>
        <div className="text-white w-100 text-center mb-5 wine__title show-shop-block">
          <div className="d-flex align-items-center justify-content-center w-100 mb-3">
            <AiOutlineLine className="text-white me-2" />
            <span className="wine__title">SELECCIONAR TIPO</span>
            <AiOutlineLine className="text-white ms-2" />
          </div>
          <Link
            onClick={() => setType("tinto")}
            className="link mx-1"
            to={"/tienda/tinto"}
            style={{ color: type === "tinto" ? "#fbb701" : "white", transition: "0.15s" }}
          >
            tinto
          </Link>
          ·
          <Link
            onClick={() => setType("blanco")}
            className="link mx-1"
            to={"/tienda/blanco"}
            style={{ color: type === "blanco" ? "#fbb701" : "white", transition: "0.15s" }}
          >
            blanco
          </Link>
          ·
          <Link
            onClick={() => setType("rose")}
            className="link mx-1"
            to={"/tienda/rose"}
            style={{ color: type === "rose" ? "#fbb701" : "white", transition: "0.15s" }}
          >
            rose
          </Link>
          ·
          <Link
            onClick={() => setType("espumante")}
            className="link mx-1"
            to={"/tienda/espumante"}
            style={{ color: type === "espumante" ? "#fbb701" : "white", transition: "0.15s" }}
          >
            espumante
          </Link>
          ·
          <Link
            onClick={() => setType("licoroso")}
            className="link mx-1"
            to={"/tienda/licoroso"}
            style={{ color: type === "licoroso" ? "#fbb701" : "white", transition: "0.15s" }}
          >
            licoroso
          </Link>
        </div>
        <Container className="d-flex justify-content-center row mb-5">
          {wines.map((wine, index) => {
            return <ProductCard setShowCart={props.setShowCart} wine={wine} />;
          })}
        </Container>
      </>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 spinner__wines">
        <BounceLoader color="#fbb701" loading size={50} />
      </div>
    );
  }
}

export default ShowShop;
