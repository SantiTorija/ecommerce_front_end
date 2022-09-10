import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import BounceLoader from "react-spinners/BounceLoader";
import ProductCard from "./ProductCard";

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
  if (wines) {
    return (
      <>
        <div className="d-flex justify-content-around row ms-5 me-5 mb-5">
          {wines.map((wine, index) => {
            return (
              <div className="col-12 col-md-6 col-xl-4 mt-5">
                <ProductCard wine={wine} index={index} />
              </div>
            );
          })}
        </div>
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
