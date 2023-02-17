import React from "react";
import "./Home.css";
import Image from "react-bootstrap/Image";
import headerOne from "../../images/header/educourse-headerPic1.png";
import headerTwo from "../../images/header/educourse-headerPic2.png";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Subject from "./Subject/Subject";

const Home = () => {
  const subjects = useLoaderData();
  console.log(subjects);
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
          <Link>
            VIEW COURSES <FaArrowRight />
          </Link>
        </div>
        <div>
          <Image className="w-100" src={headerTwo} alt=""></Image>
        </div>
      </Container>

      <hr />

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

      <hr />

      {/* Info container */}
      <Container>
        <div>

        </div>
        <div>
          <h1>Learn something new, and Grow your skills.</h1>
          <p>Learning new skills can be highly beneficial to your career as it can help you position yourself to take on new projects and leverage new knowledge to advance.</p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
