import React, { useState } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/offCanvasFilter.css";
import hackWines from "../assets/images/hackWines.png";
import FilterAccordion from "./FilterAccordion";
import { FaWineGlass } from "react-icons/fa";

function OffCanvasFilter({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  function setTypeWine(type) {
    props.setType(type);
    setShow(false);
  }

  return (
    <>
      <button
        style={{ border: "none", background: "transparent", margin: "0" }}
        onClick={toggleShow}
        className="me-2 title-letter sidebar-offcanv-button"
      >
        ¿Qué vino estás buscando?
      </button>
      <Offcanvas
        style={{
          backgroundImage: `url("https://www.latiendavinos.es/wp-content/uploads/2022/02/base-madera.webp")`,
        }}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white">
            <img src={hackWines} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-white title-letter">
          <h2 className="title-letter fs-4">Filtrar por tipo</h2>
          <div className="mt-3">
            <Link className="link" to="" onClick={() => setTypeWine("tinto")}>
              <FaWineGlass /> <span className="ms-2">Tinto</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="" onClick={() => setTypeWine("blanco")}>
              {" "}
              <FaWineGlass /> <span className="ms-2">Blanco</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="" onClick={() => setTypeWine("rose")}>
              {" "}
              <FaWineGlass /> <span className="ms-2">Rose</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="" onClick={() => setTypeWine("licoroso")}>
              {" "}
              <FaWineGlass /> <span className="ms-2">Espumante</span>{" "}
            </Link>
          </div>
          <h2 className="title-letter fs-4 mt-3">Filtrar por Pais</h2>
          <div className="mt-3">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">Argentina</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2"> Australia</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">Brasil</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">Chile</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">España</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">Francia</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">Hungría</span>
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">Italia</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">Nueva Zelanda</span>{" "}
            </Link>
          </div>
          <div className="mt-2">
            <Link className="link" to="">
              {" "}
              <FaWineGlass /> <span className="ms-2">Uruguay</span>{" "}
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasFilter;
