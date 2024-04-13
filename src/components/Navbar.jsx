import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../assets/la-white.png";

export default function Navigation() {
  const handleAbout = () => {
    const element = document.querySelector(".about-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    });
  };

  const handleProjects = () => {
    const element = document.querySelector(".projects-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    });
  };

  const handleContact = () => {
    const element = document.querySelector(".contact-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    });
  };

  return (
    <div>
      <Navbar className="m-0 p-0  justify-content-between navbar-container">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} alt="lanre-abass logo" fluid className='la-logo mb-2' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end align-items-center">
            <Nav>
              <Nav.Link className='navbar-link' onClick={handleAbout}>About</Nav.Link>
              <Nav.Link className='navbar-link' onClick={handleProjects}>Project</Nav.Link>
              <Nav.Link className='navbar-link' onClick={handleContact}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
