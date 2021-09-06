import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Avatar from "../assets/avatar.png";

const About = () => {
  return (
    <Container style={{ height: "41.7rem" }}>
      <Row>
      <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col>
    <h3>About</h3>
    <p>My name is Irina Pyak, a student at Columbia Engineering Coding Boot Camp. I have background in accounting and auditing. </p>
    <p>I am excited to learn coding at Columbia Engineering Boot Camp, and meet students and professionals who have the same interest in programming.</p>
    </Col>
      </Row>
    </Container>
  );
};
export default About;
