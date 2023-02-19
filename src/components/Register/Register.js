import React from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="submit-form">
      <h1 className="submit-header text-center">Register</h1>
      <Form className="submit">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="photoURL" placeholder="Your PhotoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={<Link to='/terms'>Terms and Conditions</Link>} />
        </Form.Group>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default Register;
