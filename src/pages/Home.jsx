import "../styles/home.css";
import HeroVideo from "../components/HeroVideo";
import CuadrantsHome from "../components/CuadrantsHome";
import Highlighted from "../components/Highlighted";
import HomeTitle from "../components/HomeTitle";
import AboutThisProyectHome from "../components/AboutThisProyectHome";

export const Home = (props) => {
  return (
    <>
      <HeroVideo />
      <HomeTitle />
      <CuadrantsHome />
      <Highlighted setShowCart={props.setShowCart} />
      <AboutThisProyectHome />
    </>
  );
};
