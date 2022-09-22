import "../styles/footer.css";
import { Container } from "react-bootstrap";
import { Instagram, Facebook, Whatsapp, Envelope } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import handleAlert from "./Alert";

function FooterWeb() {
  return (
    <Container>
      <footer className="border-top border-bottom pb-5">
        <div className="footer  pt-5 pb-1">
          <div className="row justify-content-between">
            <div className="footerColumn col">
              <img alt="hackWineslogo" src={newHackWinesLogo} />
              <div className="d-flex flex-row gap-2 mt-3">
                <Instagram color="#F0F0F0" />
                <Facebook color="#F0F0F0" />
                <Whatsapp color="#F0F0F0" />
                <Envelope color="#F0F0F0" />
              </div>
            </div>

            <div className=" footerColumn col" id="menuColumn">
              <h3 className="titleFooter ">MENU</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="navbar-link footerLinks " to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="navbar-link footerLinks" to={"/tienda/todos"}>
                    Tienda
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="navbar-link footerLinks" to={"/sobreEsteProyecto"}>
                    Sobre este proyecto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footerSection footerColumn col">
              <h3 className="titleFooter">LOCAL </h3>

              <p>
                Avda Rivera 4321. Montevideo.
                <br /> L a V: 9 a 18 hs.
              </p>
            </div>

            <div className="footerSection footerColumn col d-none d-md-block">
              <form className="w-100">
                <h3 className="titleFooter">NEWSLETTER</h3>
                <p>Suscribite, y recibi antes que nadie nuestras promociones y noticias.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email
                  </label>
                  <input type="text" className="form-control" placeholder="Email" />
                  <button
                    className=" goldenButton"
                    type="button"
                    onClick={() => handleAlert("Esta función esta fuera del alcance del proyecto.")}
                  >
                    Subscribite
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4  mt-5">
        <p>&copy; 2022 Todos los derechos reservados.</p>
      </div>
    </Container>
  );
}

export default FooterWeb;
