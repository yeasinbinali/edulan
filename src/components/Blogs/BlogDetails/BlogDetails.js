import React from 'react';
import './BlogDetails.css';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const BlogDetails = () => {
    const blog = useLoaderData();
    const blogParse = JSON.parse(blog);
    useTitle('BlogDetail');
    const {blogName, description, photo} = blogParse;
    return (
        <Container className='blog-detail'>
            <Image className='detail-image' src={photo} alt=''></Image>
            <h3>{blogName}</h3>
            <p>{description}</p>
            <Link to='/blogs'>Back to Blogs</Link>
        </Container>
    );
};

export default BlogDetails;