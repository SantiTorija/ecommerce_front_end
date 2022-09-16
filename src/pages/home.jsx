import "../styles/home.css";
/* import HeroHome from "../components/HeroHome"; */
import HeroVideo from "../components/HeroVideo";
import FeatureHome from "../components/FeatureHome";
import AboutHome from "../components/AboutHome";
import CuadrantsHome from "../components/CuadrantsHome";
import HomeTitle from "../components/HomeTitle";

export const Home = () => {
  return (
    <>
      {/* <HeroHome /> */}
      <HeroVideo />
      {/* <FeatureHome /> */}
      <HomeTitle />
      <CuadrantsHome />
    </>
  );
};
