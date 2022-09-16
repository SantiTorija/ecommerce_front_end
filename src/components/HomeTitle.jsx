import { AiOutlineLine } from "react-icons/ai";
import "../styles/home.css";

function HomeTitle() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100  " id="homeTitle">
      <AiOutlineLine className="text-white me-2" />
      <span className="wine__title">UN MUNDO DE VINOS PARA ELEGIR</span>
      <AiOutlineLine className="text-white ms-2" />
    </div>
  );
}

export default HomeTitle;
