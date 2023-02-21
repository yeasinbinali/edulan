import React from 'react';
import './CourseDetail.css';
import { Container } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const CourseDetail = () => {
    const course = useLoaderData();
    const courseParse = JSON.parse(course);
    useTitle('CourseDetail');
    const {courseImg, price, subjectname, headname, review, description} = courseParse;
    return (
        <Container className='course-detail p-3'>
            <Image src={courseImg} alt=''></Image>
            <h5 className='subject-name m-0'>{subjectname}</h5>
            <p className='m-0 star'><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></p>
            <p className='m-1 review'><b>{review}</b> Reviews</p>
            <p className='m-0 price'>${price}.00</p>
            <h4 className='head-name'>{headname}</h4>
            <p className='description'>{description}</p>
            <Link to='/courses'>Back to Courses</Link>
        </Container>
    );
};

export default CourseDetail;