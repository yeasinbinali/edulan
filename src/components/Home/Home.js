import React from "react";
import "./Home.css";
import Image from "react-bootstrap/Image";
import headerOne from "../../images/header/educourse-headerPic1.png";
import headerTwo from "../../images/header/educourse-headerPic2.png";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Subject from "./Subject/Subject";
import aboutImg from "../../images/educourse-about.png";

const Home = () => {
  const subjects = useLoaderData();
  return (
    <div>
      {/* Main header */}
      <Container className="my-5 header-container">
        <div className="header-description">
          <Image src={headerOne} alt=""></Image>
          <h5 className="tagline"># Learn Anytime, Anywhere, Anytime</h5>
          <h1 className="headline">Best Online Learning For your future.</h1>
          <p className="describe-sentence">
            We believe everyone has the capacity to be creative. Turitor is a
            place where people develop their own potential.
          </p>
          <Link to='/courses'>
            VIEW COURSES <FaArrowRight />
          </Link>
        </div>
        <div>
          <Image className="w-100" src={headerTwo} alt=""></Image>
        </div>
      </Container>

      {/* Subject container */}
      <div className="subjects">
        <Container className="subject-container">
          <h2 className="headword">Recent Popular Subjects</h2>
          <p className="described-sentence">
            Online learning offers a new way to explore subjects you’re <br />{" "}
            passionate about.
          </p>
          <div className="subject-page">
            {subjects.map((subject) => (
              <Subject subject={subject} key={subject.no}></Subject>
            ))}
          </div>
        </Container>
      </div>

      {/* Info container */}
      <Container className="info-container">
        <div>
          <Image className="w-100" src={aboutImg} alt=""></Image>
        </div>
        <div className="info-description">
          <h1>Learn something new, and Grow your skills.</h1>
          <p>
            Learning new skills can be highly beneficial to your career as it
            can help you position yourself to take on new projects and leverage
            new knowledge to advance.
          </p>
          <div className="feathers">
            <h6>
              <FaCheck /> Expert Trainer
            </h6>
            <h6>
              <FaCheck /> Remote Learning
            </h6>
            <h6>
              <FaCheck /> Lifetime Access
            </h6>
            <h6>
              <FaCheck /> Self Development
            </h6>
          </div>
          <Link to='/courses'>
            VIEW COURSES <FaArrowRight />
          </Link>
        </div>
      </Container>

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
    </div>
  );
};

export default Home;
