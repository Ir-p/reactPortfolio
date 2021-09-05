import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="tel:+19299006445">(929) 900-6445</Nav.Link>
          <Nav.Link href="#mailto:ir.pyak@gmail.com">
            ir.pyak@gmail.com
          </Nav.Link>
          <Nav.Link href="#https://github.com/Ir-p/Portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/irina-pyak-9935a113b/">
            LinkedIn
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Footer;
