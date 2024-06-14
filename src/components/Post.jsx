import React from "react";
import "../css/Post.css";
import { useNavigate } from "react-router-dom";

const Post = ({ id, title, author, post, onPostClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className='post'
      onClick={() => {
        onPostClick(post);
        navigate(`/post/${post.id}/post-details`);
      }}
    >
      <h2 className='post-title'>{title}</h2>
      <p className='post-author'>Author: {author}</p>
      <p className='post-id'>ID: {id}</p>
    </div>
  );
};

export default Post;
