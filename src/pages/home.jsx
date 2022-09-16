import "../styles/home.css";
import HeroHome from "../components/HeroHome";
import FeatureHome from "../components/FeatureHome";
import CuadrantsHome from "../components/CuadrantsHome";
import Highlighted from "../components/Highlighted";

export const Home = (props) => {
  return (
    <>
      <HeroHome />
      <FeatureHome />
      <CuadrantsHome />
      <Highlighted setShowCart={props.setShowCart} />
    </>
  );
};
