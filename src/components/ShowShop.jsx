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
        url: `${process.env.REACT_APP_API_URL}wines/filter/${type}`,
      });
      setWines(response.data.slice(0, 16));
      return response;
    };
    dataWine();
  }, [type]);

  if (wines) {
    return (
      <>
        <div className="text-white w-100 text-center mb-5 wine__title ">
          <div className="d-flex align-items-center justify-content-center w-100 mb-3">
            <AiOutlineLine className="text-white me-2" />
            <span className="wine__title">SELECCIONAR TIPO</span>
            <AiOutlineLine className="text-white ms-2" />
          </div>
          <Link
            onClick={() => setType("todos")}
            className="link mx-1"
            to={"/tienda/todos"}
            style={{
              color: type === "todos" ? "#fbb701" : "white",
              transition: "0.15s",
              fontWeight: type === "todos" ? "600" : "400",
            }}
          >
            Todos
          </Link>
          ·
          <Link
            onClick={() => setType("tinto")}
            className="link mx-1"
            to={"/tienda/tinto"}
            style={{
              color: type === "tinto" ? "#fbb701" : "white",
              transition: "0.15s",
              fontWeight: type === "tinto" ? "600" : "400",
            }}
          >
            tinto
          </Link>
          ·
          <Link
            onClick={() => setType("blanco")}
            className="link mx-1"
            to={"/tienda/blanco"}
            style={{
              color: type === "blanco" ? "#fbb701" : "white",
              transition: "0.15s",
              fontWeight: type === "blanco" ? "600" : "400",
            }}
          >
            blanco
          </Link>
          ·
          <Link
            onClick={() => setType("rose")}
            className="link mx-1"
            to={"/tienda/rose"}
            style={{
              color: type === "rose" ? "#fbb701" : "white",
              transition: "0.15s",
              fontWeight: type === "rose" ? "600" : "400",
            }}
          >
            rose
          </Link>
          ·
          <Link
            onClick={() => setType("espumante")}
            className="link mx-1"
            to={"/tienda/espumante"}
            style={{
              color: type === "espumante" ? "#fbb701" : "white",
              transition: "0.15s",
              fontWeight: type === "espumante" ? "600" : "400",
            }}
          >
            espumante
          </Link>
        </div>
        <Container className="d-flex justify-content-center row mb-5">
          {wines.map((wine, index) => {
            return <ProductCard setShowCart={props.setShowCart} wine={wine} key={wine._id} />;
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
