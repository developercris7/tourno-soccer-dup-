import { React, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
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
          <FaBars color="white"/>
          {/* <SlMenu color="white"/> */}
        </button>
        <p className="my-auto fs-6">Tourno Soccer</p>

        <nav className="d-none d-md-flex">
          <Link className="nav-link">Home</Link>
          <Link className="nav-link">Tournaments</Link>
          <Link className="nav-link">About</Link>
          <Link className="nav-link">Contact</Link>
        </nav>

        <button className="login-btn">Login</button>

        <Offcanvas show={show}  onHide={handleClose} style={{ width: "90%" ,backgroundColor:"black",color:"white"}}>
          <Offcanvas.Header >
            <Offcanvas.Title>Tourno Soccer</Offcanvas.Title>
            <IoClose color="white" className="fs-3" onClick={handleClose} />
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
