import "../styles/home.css";
import HeroVideo from "../components/HeroVideo";
import CuadrantsHome from "../components/CuadrantsHome";
import Highlighted from "../components/Highlighted";
import HomeTitle from "../components/HomeTitle";
import HomeSecondTitle from "../components/HomeSecondTitle";
import AboutThisProyectHome from "../components/AboutThisProyectHome";
import OffCanvasAboutUs from "../components/OffCanvasAboutUs";

export const Home = (props) => {
  return (
    <>
      <HeroVideo />
      <HomeTitle />
      <CuadrantsHome />
      <Highlighted setShowCart={props.setShowCart} />
      <HomeSecondTitle />
      <AboutThisProyectHome />
    </>
  );
};
