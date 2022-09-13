import "../styles/mobileMenu.css";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function MobileMenu() {
  return (
    <>
      <div className="mainMenuSection">
        <div className="cardMenu">
          <img alt="hackWinesLogo" src={newHackWinesLogo} />
          <div>
            <Nav className="menu-section align-items-center justify-content-center gap-2 linkSection ">
              <Link className="navbar-link navbar-responsive" to={"/"}>
                Home
              </Link>
              <h5 className="m-0 navbar-link">·</h5>
              <Link className="navbar-link navbar-responsive" to={"/tienda"}>
                Tienda
              </Link>
              <h5 className="m-0 navbar-link">·</h5>
              <Link className="navbar-link navbar-responsive" to="/aboutThisProyect">
                Sobre este Proyecto
              </Link>
              <h5 className="m-0 navbar-link ">·</h5>
              <Link className="navbar-link navbar-responsive" to={"/contacto"}>
                Contacto
              </Link>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
