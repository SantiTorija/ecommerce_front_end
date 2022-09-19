import { AiOutlineLine } from "react-icons/ai";
import "../styles/home.css";

function AboutTitle() {
  return (
    <h2 className="title hackWines d-flex justify-content-center">
      <AiOutlineLine className="me-2" /> Sobre este proyecto <AiOutlineLine className="ms-2" />
    </h2>
  );
}

export default AboutTitle;
