import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLine } from "react-icons/ai";

function Highlighted(props) {
  const [wines, setWines] = useState(null);
  useEffect(() => {
    const dataWines = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}wines`,
      });
      const winesFiltered = response.data.filter((wine) => wine.highlighted);
      setWines(winesFiltered.sort((a, b) => 0.5 - Math.random()).slice(0, 3));
      return response;
    };
    dataWines();
  }, []);
  return (
    wines && (
      <>
        <span className="recommended__title mt-5">
          <AiOutlineLine className="text-white me-2" /> PRODUCTOS DESTACADOS
          <AiOutlineLine className="text-white ms-2" />
        </span>
        <div className=" d-flex justify-content-center ">
          <div className="arrow__carrousel">
            <span className="flecha">
              <ArrowBackIosNewIcon />
            </span>
          </div>
          {wines.map((reccomended) => (
            <div className="mx-3 " key={reccomended._id}>
              <ProductCard wine={reccomended} setShowCart={props.setShowCart} />
            </div>
          ))}
          <div className="arrow__carrousel">
            <span className="flecha">
              <ArrowForwardIosIcon />
            </span>
          </div>
        </div>
      </>
    )
  );
}

export default Highlighted;
