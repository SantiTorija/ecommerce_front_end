import "../styles/home.css";
import HeroVideo from "../components/HeroVideo";
import CuadrantsHome from "../components/CuadrantsHome";
import Highlighted from "../components/Highlighted";
import HomeTitle from "../components/HomeTitle";
import AboutThisProyectHome from "../components/AboutThisProyectHome";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as ScrollSVG } from "./scroll.svg";

export const Home = (props) => {
  return (
    <>
      <HeroVideo />
      <HomeTitle />
      <CuadrantsHome />
      <Highlighted setShowCart={props.setShowCart} />
      <AboutThisProyectHome />
      <ScrollToTop smooth component={<ScrollSVG />} className="scrollIcon" />
    </>
  );
};
