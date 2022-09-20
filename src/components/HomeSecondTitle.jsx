import { AiOutlineLine } from "react-icons/ai";
import "../styles/home.css";

function HomeSecondTitle() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100  homeTitle ">
      <AiOutlineLine className="text-white me-2" />
      <span className="wine__title">SOBRE EL PROYECTO</span>
      <AiOutlineLine className="text-white ms-2" />
    </div>
  );
}

export default HomeSecondTitle;
