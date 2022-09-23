import { AiOutlineLine } from "react-icons/ai";
import "../styles/home.css";

function AboutTitle({ title }) {
  return (
    <h2 className="title hackWines d-flex justify-content-center text-center m-5" id="aboutTitle">
      <AiOutlineLine className="me-2" />
      {title}
      <AiOutlineLine className="ms-2" />
    </h2>
  );
}

export default AboutTitle;
