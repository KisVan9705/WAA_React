// src/components/Post.js
import React from "react";
import "../css/Post.css"; // Import the CSS file for styling

const Post = ({ id, title, author }) => {
  return (
    <div className='post'>
      <h2 className='post-title'>{title}</h2>
      <p className='post-author'>Author: {author}</p>
      <p className='post-id'>ID: {id}</p>
    </div>
  );
};

export default Post;
