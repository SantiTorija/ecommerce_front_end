import "../styles/home.css";
import NavBar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import FeatureHome from "../components/FeatureHome";
import AboutHome from "../components/AboutHome";

export const Home = () => {
	return (
		<>
			<NavBar />
			<HeroHome />
			<FeatureHome />
			<AboutHome />
		</>
	);
};
