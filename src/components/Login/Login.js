import React from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <Container className="login-form">
      <h1 className="text-center login-header">Please Login</h1>
      <Form className="login">
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default Login;
