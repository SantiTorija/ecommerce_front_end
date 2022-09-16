import "../styles/home.css";
import HeroHome from "../components/HeroHome";
import FeatureHome from "../components/FeatureHome";
import AboutHome from "../components/AboutHome";
import CuadrantsHome from "../components/CuadrantsHome";
import AboutThisProyectHome from "../components/AboutThisProyectHome";

export const Home = () => {
  return (
    <>
      <HeroHome />

      <FeatureHome />
      <CuadrantsHome />
      <AboutThisProyectHome />
    </>
  );
};
