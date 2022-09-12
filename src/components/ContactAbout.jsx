import "../styles/contact.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Envelope, Telephone, Whatsapp, Shop } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";

function ContactAbout() {
  return (
    <Container className="d-flex pt-5 pb-5">
      <Col className="position-relative">
        <Col className="col__wine__first contactLeftColumn">
          <div className="w-100 d-flex">
            <Shop size={20} color="rgba(240, 240, 240, 0.799)" className="me-3" />
            <h5>Avda Rivera 4321. Montevideo.</h5>
          </div>
          <div className="w-100 d-flex">
            <Whatsapp size={20} color="rgba(240, 240, 240, 0.799)" className="me-3" />
            <h5>+598 98 508 452.</h5>
          </div>
          <div className="w-100 d-flex">
            <Telephone size={20} color="rgba(240, 240, 240, 0.799)" className="me-3" />
            <h5>2709 54 34.</h5>
          </div>
          <div className="w-100 d-flex">
            <Envelope size={20} color="rgba(240, 240, 240, 0.799)" className="me-3" />
            <h5>contacto@hack-wines.com.</h5>
          </div>
        </Col>
      </Col>
      <Col className="contactRightColumn d-flex">
        <Form /* onSubmit={this.handleSubmit} */ className="w-100">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
              type="text"
              /* value={this.state.value} onChange={this.handleChange} */ className="w-100"
              placeholder="Nombre"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
              type="email"
              placeholder="Email"
              className="w-100" /* value={this.state.value} onChange={this.handleChange} */
            />
          </Form.Group>
          <Form.Group className="" controlId="formBasicEmail">
            <textarea placeholder="Mensaje" className="w-100" id="formControlTextarea1"></textarea>
          </Form.Group>
          <button className="formButton mt-3">Enviar</button>
        </Form>
      </Col>
    </Container>
  );
}

export default ContactAbout;
