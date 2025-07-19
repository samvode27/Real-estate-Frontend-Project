import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Home, Building, HeartHandshake, ThumbsUp, Mail, LandPlot } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const bsCollapse = document.getElementById("responsive-navbar-nav");

    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        if (bsCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click(); // close mobile menu
        }
      })
    );
  }, []);

  return (
    <Navbar fixed="top" expand="lg" bg="light" className="shadow header-navbar">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          🏡 RealEstate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-3 align-items-center">
            <a className="nav-link d-flex align-items-center gap-1" href="#home">
              <Home size={18} /> Home
            </a>
            <a className="nav-link d-flex align-items-center gap-1" href="#companies">
              <Building size={18} /> Companies
            </a>
            <a className="nav-link d-flex align-items-center gap-1" href="#values">
              <HeartHandshake size={18} /> Values
            </a>
            <a href="#properties" className="nav-link" onClick={() => setExpanded(false)}>
              <LandPlot className="me-1" /> Properties
            </a>
            <a className="nav-link d-flex align-items-center gap-1" href="#testimonials">
              <ThumbsUp size={18} /> Testimonials
            </a>
            <a className="nav-link d-flex align-items-center gap-1" href="#contact">
              <Mail size={18} /> Contact
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
