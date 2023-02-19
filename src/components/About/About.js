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


            <div className='page-summary'>
                <div className='single-summary'>
                    <Image src='https://xpressrow.com/html/edulan/assets/img/icon/c_01.png'></Image>
                    <div>
                        <h2>146<sub>+</sub></h2>
                        <p>Award Wining</p>
                    </div>
                </div>
                <div className='single-summary'>
                    <Image src='https://xpressrow.com/html/edulan/assets/img/icon/c_02.png'></Image>
                    <div>
                        <h2>56k<sub>+</sub></h2>
                        <p>Students</p>
                    </div>
                </div>
                <div className='single-summary'>
                    <Image src='https://xpressrow.com/html/edulan/assets/img/icon/c_03.png'></Image>
                    <div>
                        <h2>103<sub>+</sub></h2>
                        <p>Instructors</p>
                    </div>
                </div>
                <div className='single-summary'>
                    <Image src='https://xpressrow.com/html/edulan/assets/img/icon/c_04.png'></Image>
                    <div>
                        <h2>186<sub>+</sub></h2>
                        <p>Countries</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;