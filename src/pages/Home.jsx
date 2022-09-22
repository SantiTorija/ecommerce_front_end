import "../styles/home.css";
import HeroVideo from "../components/HeroVideo";
import CuadrantsHome from "../components/CuadrantsHome";
import Highlighted from "../components/Highlighted";
import AboutTitle from "../components/AboutTitle";
import AboutThisProyectHome from "../components/AboutThisProyectHome";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as ScrollSVG } from "./scroll.svg";

export const Home = (props) => {
  return (
    <>
      <HeroVideo />
      <div className="py-5 d-flex justify-content-center">
        <AboutTitle title={"UN MUNDO DE VINOS"} />
      </div>
      <CuadrantsHome />
      <Highlighted setShowCart={props.setShowCart} />
      <AboutThisProyectHome />
      <ScrollToTop smooth component={<ScrollSVG />} className="scrollIcon" />
    </>
  );
};
