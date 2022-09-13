import "../styles/footer.css";
import { Container } from "react-bootstrap";
import { Instagram, Facebook, Whatsapp, Envelope } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import newHackWinesLogo from "../assets/images/newHackWinesLogo.png";
import handleAlert from "./Alert";

function FooterWeb() {
  return (
    <footer>
      <Container className="border-top">
        <div className="footer  pt-5 pb-1">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <img alt="hackWineslogo" src={newHackWinesLogo} />
              <div className="d-flex flex-row gap-2 mt-3">
                <Instagram color="rgba(240, 240, 240, 0.799)" />
                <Facebook color="rgba(240, 240, 240, 0.799)" />
                <Whatsapp color="rgba(240, 240, 240, 0.799)" />
                <Envelope color="rgba(240, 240, 240, 0.799)" />
              </div>
            </div>

            <div className="col-6 col-md-2">
              <h3 className="titleFooter navbar-link">MENU</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="navbar-link  " to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="navbar-link " to={"/tienda"}>
                    Tienda
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="navbar-link " to={"/sobre-este-proyecto"}>
                    Sobre este proyecto
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="navbar-link me-3" to={"/contacto"}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 footerSection">
              <h3 className="titleFooter">LOCAL </h3>

              <p>
                Avda Rivera 4321. Montevideo.
                <br /> L a V: 9 a 18 hs.
              </p>
            </div>

            <div className="col-md-5 offset-md-1 footerSection">
              <form>
                <h3 className="titleFooter">NEWSLETTER</h3>
                <p>Suscribite, y recibi antes que nadie nuestras promociones y noticias.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <button
                    className="btn goldenButton"
                    type="button"
                    showCloseButton
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

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top mt-5">
            <p>&copy; 2022 Todos los derechos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default FooterWeb;
