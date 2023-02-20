import React from "react";
import "./Blog.css";
import Image from "react-bootstrap/Image";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = (params) => {
  const { blogName, id, photo, author, view } = params.blog;
  return (
    <div className="blog">
      <Image className="blog-image" src={photo} alt="photo"></Image>
      <Link className='blog-header' to={`${id}`}>{blogName}</Link>
      <div className='d-flex justify-content-around align-items-center mt-1'>
        <p><small>Author: <b>{author}</b></small></p>
        <p><FaEye className='ml-2' /><b style={{marginLeft: '4px'}}>{view}</b></p>
      </div>
    </div>
  );
};

export default Blog;
