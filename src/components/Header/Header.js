import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/educourse-logo.png";
import { AuthContext } from "../../contexts/UserContext";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch((error) => {
      console.error(error);
    })
  }
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Image src={logo} alt=""></Image>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/about">About</Link>
              {
                user?.email ? 
                <>
                  <button onClick={handleLogOut} className='logout-btn'>Logout</button>
                  <Image className='photo' roundedCircle src={user?.photoURL} alt='photo'></Image>
                </>
                : 
                <>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
                  <FaUser className='mt-4' />
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
};

export default Header;
