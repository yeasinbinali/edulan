import React, { useContext, useState } from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const [error, setError] = useState('');
  const {signInUser} = useContext(AuthContext);

  const handleLoginForm = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    })
  }
  return (
    <Container className="login-form">
      <h1 className="text-center login-header">Please Login</h1>
      <Form onSubmit={handleLoginForm} className="login">
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
        <p className='text-danger'>{error}</p>
        <button className="submit-btn w-100" type="submit">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default Login;
