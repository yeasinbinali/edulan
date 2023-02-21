import React from "react";
import "./Course.css";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegStar, FaStar, FaStarHalfAlt, FaStickyNote, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = (params) => {
  const {
    id,
    headname,
    subjectname,
    authorImg,
    courseImg,
    price,
    votes,
    user,
    notes,
    view,
  } = params.course;
  return (
    <div className='course-container'>
      <Image className='course-img' src={courseImg}></Image>
      <div className='main'> 
      <div className="d-flex justify-content-between align-items-center">
        <h4 className='subject-name'>{subjectname}</h4>
        <h3 className='price'>${price}</h3>
      </div>
      <Link className='headname' to={`${id}`}>{headname}</Link>
      <div className="d-flex align-items-center mt-2">
        <p className='vote'>{votes} votes</p>
        <p className='ms-3 star'><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></p>
      </div>
      <div className="card-description">
        <p><FaStickyNote /> {notes}</p>
        <p><FaUsers /> {user}</p>
        <p><FaEye /> {view}</p>
        <p><Image src={authorImg}></Image></p>
      </div>
      </div>
    </div>
  );
};

export default Course;
