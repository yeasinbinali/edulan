import React, { useContext, useState } from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/UserContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "@firebase/auth";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const {signInUser, googleSignIn} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  let from = location.state?.from?.pathname || "/";

  const handleLoginForm = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then((result) => {
      const user = result.user;
      form.reset();
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    })
  }

  const handleGoogleProvider = () => {
    googleSignIn(googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate('/');
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
        <p className='text-center my-3'>New in Edulan? <Link to='/register'>Register</Link></p>
        <button className='google-btn w-100' onClick={handleGoogleProvider}><FaGoogle /> Google</button>
      </Form>
    </Container>
  );
};

export default Login;
