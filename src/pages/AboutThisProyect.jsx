import { Link } from "react-router-dom";
import "../styles/aboutThisProyect.css";
import { Container } from "react-bootstrap";
import AboutTitle from "../components/AboutTitle";
import AboutTitle2 from "../components/AboutTitle2";
import AboutStep1 from "../components/AboutStep1";
import AboutStep2 from "../components/AboutStep2";
import AboutStep3 from "../components/AboutStep3";
import AboutStep4 from "../components/AboutStep4";
import AboutTeam from "../components/AboutTeam";
import AboutHero from "../components/AboutHero";
import AboutTechnologies from "../components/AboutTechnologies";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as ScrollSVG } from "./scroll.svg";

function AboutThisProyect() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutHero />
      <div className="container">
        <AboutTeam />
      </div>
      <AboutTechnologies />
      <div className="container">
        <div className="row mb-5 mt-5">
          <AboutTitle2 />
          <AboutStep1 />
          <AboutStep2 />
          <AboutStep3 />
          {/*    <AboutStep4 /> */}
        </div>
      </div>
      <ScrollToTop smooth component={<ScrollSVG />} className="scrollIcon" />
    </>
  );
}

export default AboutThisProyect;
