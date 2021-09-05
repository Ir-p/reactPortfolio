import React from "react";
import { Container } from "react-bootstrap";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const Home = () => {
  return (
    <Container style={{ height: "53.7rem" }}>
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </Container>
  );
};
export default Home;
