import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/educourse-logo.png";

const Header = () => {
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
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
};

export default Header;
