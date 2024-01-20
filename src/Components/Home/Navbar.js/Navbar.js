import { React, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <button className="menu-btn d-md-none" onClick={handleShow}>
          {" "}
          <FaBars />
        </button>
        <p className="my-auto">Tourno Soccer</p>

        <nav className="d-none d-md-flex">
          <Link className="nav-link">Home</Link>
          <Link className="nav-link">Tournaments</Link>
          <Link className="nav-link">About</Link>
          <Link className="nav-link">Contact</Link>
        </nav>

        <button className="login-btn">Login</button>

        <Offcanvas show={show} onHide={handleClose} style={{ width: "90%" }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tourno Soccer</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="d-flex flex-column justify-content-center align-items-center">
              <Link className="nav-link">Home</Link>
              <Link className="nav-link">Tournaments</Link>
              <Link className="nav-link">About</Link>
              <Link className="nav-link">Contact</Link>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Navbar;
