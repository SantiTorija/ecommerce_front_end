import "../styles/home.css";
import HeroHome from "../components/HeroHome";
import FeatureHome from "../components/FeatureHome";
import AboutHome from "../components/AboutHome";

export const Home = () => {
	return (
		<>
			<HeroHome />
			<FeatureHome />
			<AboutHome />
		</>
	);
};
