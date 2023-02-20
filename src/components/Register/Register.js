import React, {useContext, useState} from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
// import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(false);
  const {createUser, verifyEmail, profileUpdate} = useContext(AuthContext);

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
      form.reset();
      handleEmailVerify();
      handleUpdateProfile(name, photoURL);
      navigate('/');
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    })
  }

  const handleUpdateProfile = (name, photoURL) => {
    profileUpdate({
      displayName: name,
      photoURL: photoURL
    })
    .then(() => {})
    .catch((error) => {console.error(error)})
  }

  const handleEmailVerify = () => {
    verifyEmail()
    .then(() => {
      // toast.success('Check your email and verify')
    })
  }

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  }
  return (
    <Container className="submit-form">
      <h1 className="submit-header text-center">Register</h1>
      <Form onSubmit={handleSubmitForm} className="submit">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="name" placeholder="Your Name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="photoURL" placeholder="Your PhotoURL" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleChecked} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
        </Form.Group>
        <p className='text-danger text-center'>{error}</p>
        <Button disabled={!checked} className="submit-btn w-100" type="submit">
          Submit
        </Button>
      </Form>
      <p className='text-center my-3'>Already have an account? <Link to='/login'>Login</Link></p>
    </Container>
  );
};

export default Register;
