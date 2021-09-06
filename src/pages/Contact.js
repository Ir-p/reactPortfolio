import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "firstName") {
      setFirstName(inputValue);
    } else {
      setLastName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !firstName || !lastName) {
      setErrorMessage("Email, first name or last name is invalid");
      return;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return (
    <Form style = {{height: "41.7rem"}}>
      <Form.Group>
        <Row>
          <Col>
            <Form.Control
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First name"
            />
          </Col>
          <Col>
            <Form.Control
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last name"
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          name="email"
          type="email"
          placeholder="name@example.com"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" onChange={handleInputChange} rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form>
  );
};
export default Contact;
