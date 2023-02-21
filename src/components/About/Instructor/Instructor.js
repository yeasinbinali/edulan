import React from 'react';
import './Instructor.css';
import Image from "react-bootstrap/Image";
import useTitle from '../../../hooks/useTitle';

const Instructor = (params) => {
    useTitle('Instructor');
    const {name, designation, image} = params.instructor;
    return (
        <div className='instructor'>   
            <Image className='instructor-image' src={image} alt=''></Image>
            <h2>{name}</h2>
            <p>{designation}</p>
        </div>
    );
};

export default Instructor;