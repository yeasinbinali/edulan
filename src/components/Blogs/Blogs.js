import React from 'react';
import './Blogs.css';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import Blog from './Blog/Blog';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    const blogs = useLoaderData();
    useTitle('Blogs');
    return (
        <Container>
            <h1 className='header-name'>All Blogs</h1>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                        blog = {blog}
                        key = {blog.id}
                    ></Blog>)
                }
            </div>
        </Container>
    );
};

export default Blogs;