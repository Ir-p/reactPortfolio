import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {

    return(

        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="home">IRINA PYAK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="resume">Resume</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    
    )
}
export default Header;