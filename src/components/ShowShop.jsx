import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineLine } from "react-icons/ai";
import BounceLoader from "react-spinners/BounceLoader";
import ProductCard from "./ProductCard";
import "../styles/showShop.css";
import { Container, Row } from "react-bootstrap";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function ShowShop(props) {
  const [wines, setWines] = useState(null);
  const [allWines, setAllWines] = useState([]);
  const [type, setType] = useState("todos");
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(12);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}wines/filter/${type}`,
      });
      setAllWines(response.data);
      setWines(
        response.data.slice(
          Math.min(minNum, response.data.length),
          Math.min(maxNum, response.data.length),
        ),
      );
      return response;
    };
    dataWine();
  }, [type, minNum, maxNum]);

  function handlePagePlus() {
    if (page < allWines.length / 12) {
      setMinNum(minNum + 12);
      setMaxNum(maxNum + 12);
      setPage(page + 1);
    }
  }

  function handlePageMinus() {
    if (page > 1) {
      setMinNum(minNum - 12);
      setMaxNum(maxNum - 12);
      setPage(page - 1);
    }
  }

  function setWineType(value) {
    setType(value);
    setPage(1);
    setMinNum(0);
    setMaxNum(12);
  }

  if (wines) {
    return (
      <>
        <div className="text-white w-100 text-center mb-5 wine__title ">
          <div className="d-flex align-items-center justify-content-center w-100 mb-3">
            <AiOutlineLine className="text-white me-2" />
            <span className="wine__title">SELECCIONAR TIPO</span>
            <AiOutlineLine className="text-white ms-2" />
          </div>
          <div className="d-block d-md-inline">
            <Link
              onClick={() => setWineType("todos")}
              className="link mx-1"
              to={"/tienda/todos"}
              style={{
                color: type === "todos" ? "#F0A202" : "white",
                transition: "0.15s",
                fontWeight: type === "todos" ? "500" : "400",
              }}
            >
              Todos
            </Link>
            ·
            <Link
              onClick={() => setWineType("tinto")}
              className="link mx-1"
              to={"/tienda/tinto"}
              style={{
                color: type === "tinto" ? "#F0A202" : "white",
                transition: "0.15s",
                fontWeight: type === "tinto" ? "500" : "400",
              }}
            >
              tinto
            </Link>
            ·
            <Link
              onClick={() => setWineType("blanco")}
              className="link mx-1"
              to={"/tienda/blanco"}
              style={{
                color: type === "blanco" ? "#F0A202" : "white",
                transition: "0.15s",
                fontWeight: type === "blanco" ? "500" : "400",
              }}
            >
              blanco
            </Link>
            ·
          </div>
          <div className="d-block d-md-inline">
            <Link
              onClick={() => setWineType("rose")}
              className="link mx-1"
              to={"/tienda/rose"}
              style={{
                color: type === "rose" ? "#F0A202" : "white",
                transition: "0.15s",
                fontWeight: type === "rose" ? "500" : "400",
              }}
            >
              rose
            </Link>
            ·
            <Link
              onClick={() => setWineType("espumante")}
              className="link mx-1"
              to={"/tienda/espumante"}
              style={{
                color: type === "espumante" ? "#F0A202" : "white",
                transition: "0.15s",
                fontWeight: type === "espumante" ? "500" : "400",
              }}
            >
              espumante
            </Link>
          </div>
        </div>
        <Container className="mb-5 ">
          <Row className="justify-content-between gx-4">
            {wines.map((wine, index) => {
              return <ProductCard setShowCart={props.setShowCart} wine={wine} key={wine._id} />;
            })}
            <div className="d-flex justify-content-center pt-4">
              <button onClick={handlePageMinus} className="button_flecha">
                <ArrowBackIosNewIcon />
              </button>
              <h4 className="text-white pt-2">{page}</h4>
              <button onClick={handlePagePlus} className="button_flecha">
                <ArrowForwardIosIcon />
              </button>
            </div>
          </Row>
        </Container>
      </>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 spinner__wines">
        <BounceLoader color="#F0A202" loading size={50} />
      </div>
    );
  }
}

export default ShowShop;
