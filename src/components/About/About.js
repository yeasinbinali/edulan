import React from "react";
import "./About.css";
import Image from "react-bootstrap/Image";
import { useLoaderData } from "react-router-dom";
import { Container } from "react-bootstrap";
import Instructor from "./Instructor/Instructor";
import { FaArrowRight } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const About = () => {
  const instructors = useLoaderData();
  useTitle('About');
  return (
    <Container>
      {/* about header */}
      <div className="about-header">
        <div>
          <Image
            className="about-img"
            src="https://xpressrow.com/html/edulan/assets/img/about/about_img.png"
          ></Image>
        </div>
        <div className="about-header-description">
          <h1>We are turitor an online learning community.</h1>
          <p>
            At Turitor, we believe everyone should have the opportunity to
            create progress through technology and develop the skills of
            tomorrow. With assessments, learning paths and courses authored by
            industry experts
          </p>
        </div>
      </div>

      {/* page summary */}
      <div className="page-summary">
        <div className="single-summary">
          <Image src="https://xpressrow.com/html/edulan/assets/img/icon/c_01.png"></Image>
          <div>
            <h2>
              146<sub>+</sub>
            </h2>
            <p>Award Wining</p>
          </div>
        </div>
        <div className="single-summary">
          <Image src="https://xpressrow.com/html/edulan/assets/img/icon/c_02.png"></Image>
          <div>
            <h2>
              56k<sub>+</sub>
            </h2>
            <p>Students</p>
          </div>
        </div>
        <div className="single-summary">
          <Image src="https://xpressrow.com/html/edulan/assets/img/icon/c_03.png"></Image>
          <div>
            <h2>
              103<sub>+</sub>
            </h2>
            <p>Instructors</p>
          </div>
        </div>
        <div className="single-summary">
          <Image src="https://xpressrow.com/html/edulan/assets/img/icon/c_04.png"></Image>
          <div>
            <h2>
              186<sub>+</sub>
            </h2>
            <p>Countries</p>
          </div>
        </div>
      </div>

      {/* Instructors container */}
      <div className='instructors'>
        <h1>Featured Instructors</h1>
        <p>
          Online learning offers a new way to explore subjects you’re passionate
          about.
        </p>
        <div className="instructors-container">
          {instructors.map((instructor) => (
            <Instructor
              instructor={instructor}
              key={instructor.id}
            ></Instructor>
          ))}
        </div>
      </div>

      {/* join container */}
      <div className='join-container'>
        <Container>
          <h2>If your need join our course</h2>
          <p>We believe everyone has the capacity to be creative. Turitor is aplace where people develop their own potential.</p>
          <div className='join-input'>
            <input name='email' type='email' placeholder='Enter Email' />
            <button>Submit Now <FaArrowRight /></button>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default About;
