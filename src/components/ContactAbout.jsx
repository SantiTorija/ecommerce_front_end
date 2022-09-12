import "../styles/contact.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Envelope, Telephone, Whatsapp, Shop } from "react-bootstrap-icons";

function ContactAbout() {
  return (
    <Container className="position-relative pt-5">
      <Col className="col__wine__first contactLeftColumn">
        <div className="w-100 d-flex">
          <Shop size={20} color="rgba(240, 240, 240, 0.799)" className="me-3" />
          <h5>Lorem ipsum</h5>
        </div>
        <div className="w-100 d-flex">
          <Whatsapp size={20} color="rgba(240, 240, 240, 0.799)" className="me-3" />
          <h5>Lorem ipsum</h5>
        </div>
        <div className="w-100 d-flex">
          <Telephone size={20} color="rgba(240, 240, 240, 0.799)" className="me-3" />
          <h5>Lorem ipsum</h5>
        </div>
        <div className="w-100 d-flex">
          <Envelope size={20} color="rgba(240, 240, 240, 0.799)" className="me-3" />
          <h5>Lorem ipsum</h5>
        </div>
      </Col>
      <Col></Col>
    </Container>
  );
}

export default ContactAbout;
