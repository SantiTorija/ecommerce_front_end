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

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/wines/filter/${props.type}`,
      });
      setWines(response.data);
      return response;
    };
    dataWine();
  }, [props.type]);

  function setTypeWine(type) {
    props.setType(type);
  }

  if (wines) {
    return (
      <>
        <div className="text-white w-100 text-center mb-5 wine__title show-shop-block">
          <div className="d-flex align-items-center justify-content-center w-100 mb-3">
            <AiOutlineLine className="text-white me-2" />
            <span className="wine__title">SELECCIONAR TIPO</span>
            <AiOutlineLine className="text-white ms-2" />
          </div>
          <Link onClick={() => setTypeWine(1)} className="link" to={"/tienda/tinto"}>
            tinto
          </Link>
          -
          <Link onClick={() => setTypeWine(2)} className="link" to={"/tienda/blanco"}>
            blanco
          </Link>
          -
          <Link onClick={() => setTypeWine(3)} className="link" to={"/tienda/rose"}>
            rose
          </Link>
          -
          <Link onClick={() => setTypeWine(4)} className="link" to={"/tienda/espumante"}>
            espumante
          </Link>
          -
          <Link onClick={() => setTypeWine(5)} className="link" to={"/tienda/licoroso"}>
            licoroso
          </Link>
        </div>
        <Container className="d-flex justify-content-between row mb-5">
          {wines.map((wine, index) => {
            return <ProductCard setShowCart={props.setShowCart} wine={wine} />;
          })}
        </Container>
      </>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 spinner__wines">
        <BounceLoader color="#6d1f2b" loading size={50} />
      </div>
    );
  }
}

export default ShowShop;
