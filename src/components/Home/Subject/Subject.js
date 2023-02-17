import React from "react";
import Image from "react-bootstrap/Image";
import "./Subject.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Subject = (params) => {
  const { name, description, image } = params.subject;
  return (
    <div className="subject-description">
      <Image src={image} alt=""></Image>
      <h5 className="subject-name">{name}</h5>
      <p>{description}</p>
      <Link to='/courses'><FaArrowRight /></Link>
    </div>
  );
};

export default Subject;
