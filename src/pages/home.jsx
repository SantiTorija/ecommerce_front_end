import "../styles/home.css";
/* import HeroHome from "../components/HeroHome"; */
import HeroVideo from "../components/HeroVideo";
import FeatureHome from "../components/FeatureHome";
import CuadrantsHome from "../components/CuadrantsHome";
import Highlighted from "../components/Highlighted";
import HomeTitle from "../components/HomeTitle";
import HomeSecondTitle from "../components/HomeSecondTitle";
import AboutThisProyectHome from "../components/AboutThisProyectHome";

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
