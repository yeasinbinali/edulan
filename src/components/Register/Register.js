import React, {useContext, useState} from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
  const [error, setError] = useState('');
  const {createUser} = useContext(AuthContext);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
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
    <Container className="submit-form">
      <h1 className="submit-header text-center">Register</h1>
      <Form onSubmit={handleSubmitForm} className="submit">
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
        <p className='text-danger text-center'>{error}</p>
        <button className="submit-btn w-100" type="submit">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default Register;
