import React from 'react';
import './Courses.css';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import Course from './Course/Course';
import useTitle from '../../hooks/useTitle';

const Courses = () => {
    const courses = useLoaderData();
    useTitle('Courses');
    return (
        <Container>
            <h1 className='course-headname'>All Catagory Courses are here</h1>
            <div className='courses'>
                {
                    courses.map(course => <Course
                        course = {course} 
                        key = {course.id}
                    ></Course>)
                }
            </div>
        </Container>
    );
};

export default Courses;