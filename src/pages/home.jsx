import "../styles/home.css";
/* import HeroHome from "../components/HeroHome"; */
import HeroVideo from "../components/HeroVideo";
import FeatureHome from "../components/FeatureHome";
import CuadrantsHome from "../components/CuadrantsHome";
import Highlighted from "../components/Highlighted";
import HomeTitle from "../components/HomeTitle";

export const Home = (props) => {
  return (
    <>
      {/* <HeroHome /> */}
      <HeroVideo />
      {/* <FeatureHome /> */}
      <HomeTitle />
      <CuadrantsHome />
      <Highlighted setShowCart={props.setShowCart} />
    </>
  );
};
