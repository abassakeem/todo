import React from 'react'
import { Image, Nav } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../assets/la-white.png"

export default function 
() {
  return (
    <div>
        <Navbar className="m-0 p-0 bg-dark text-light justify-content-between">
      <Container>
        <Navbar.Brand href="#home"><Image src={logo} alt="lanre-abass logo " fluid className='la-logo mb-2'/></Navbar.Brand>
        <Navbar.Toggle />
       
        <Navbar.Collapse className="justify-content-end align-items-center">
 <Nav className="">
        <Nav.Link className='navbar-link' href="#pricing">About</Nav.Link>
        <Nav.Link className='navbar-link' href="#pricing">Project</Nav.Link>
        <Nav.Link className='navbar-link' href="#pricing">Contact</Nav.Link>
         </Nav></Navbar.Collapse>
       
      </Container>
    </Navbar>
        
    </div>
  )
}
