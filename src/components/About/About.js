import React from 'react';
import './About.css';
import Image from "react-bootstrap/Image";
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className='about-header'>
                <div>
                    <Image className='about-img' src='https://xpressrow.com/html/edulan/assets/img/about/about_img.png'></Image>
                </div>
                <div className='about-header-description'>
                    <h1>We are turitor an online learning community.</h1>
                    <p>At Turitor, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts</p>
                </div>
            </div>
        </Container>
    );
};

export default About;