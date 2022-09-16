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
          <div className="row">
            <div className="col-3 footerColumn">
              <img alt="hackWineslogo" src={newHackWinesLogo} />
              <div className="d-flex flex-row gap-2 mt-3">
                <Instagram color="rgba(240, 240, 240, 0.799)" />
                <Facebook color="rgba(240, 240, 240, 0.799)" />
                <Whatsapp color="rgba(240, 240, 240, 0.799)" />
                <Envelope color="rgba(240, 240, 240, 0.799)" />
              </div>
            </div>

            <div className="col-3 footerColumn" id="menuColumn">
              <h3 className="titleFooter navbar-link">MENU</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="navbar-link footerLinks " to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="navbar-link footerLinks" to={"/tienda"}>
                    Tienda
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="navbar-link footerLinks" to={"/sobre-este-proyecto"}>
                    Sobre este proyecto
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="navbar-link footerLinks" to={"/contacto"}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-3 footerSection footerColumn">
              <h3 className="titleFooter">LOCAL </h3>

              <p>
                Avda Rivera 4321. Montevideo.
                <br /> L a V: 9 a 18 hs.
              </p>
            </div>

            <div className="col-3 footerSection footerColumn">
              <form className="w-100">
                <h3 className="titleFooter">NEWSLETTER</h3>
                <p>Suscribite, y recibi antes que nadie nuestras promociones y noticias.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email
                  </label>
                  <input type="text" className="form-control" placeholder="Email" />
                  <button
                    className="btn goldenButton"
                    type="button"
                    onClick={() =>
                      handleAlert("Esta funcionalidad está fuera del alcance del proyecto")
                    }
                  >
                    Subscribite
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4  mt-5">
        <p>&copy; 2022 Todos los derechos reservados.</p>
      </div>
    </Container>
  );
}

export default FooterWeb;
