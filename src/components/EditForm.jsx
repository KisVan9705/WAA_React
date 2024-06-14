import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const { selectedPost, setEditable, changeDbFlag } = useContext(PostContext);
  const [title, setTitle] = useState(selectedPost.title);
  const [author, setAuthor] = useState(selectedPost.author);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);

  const handleSave = () => {
    const updatedPost = { ...selectedPost, title, author };
    axios
      .put(`http://localhost:8080/api/v1/posts/${selectedPost.id}`, updatedPost)
      //   .post(`http://localhost:8080/api/v1/posts`, updatedPost)
      .then((response) => {
        changeDbFlag();
        setEditable(false);
      })
      .catch((error) => console.log(error.message));
  };

  const navigate = useNavigate();
  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <div className='card-header'>
            <h2>Edit Form</h2>
          </div>
          <div className='card-body'>
            <div className='mb-3'>
              <label htmlFor='Title'>Title:</label>
              <input type='text' value={title} onChange={handleTitleChange} />
              <label htmlFor='Author'>Author:</label>
              <input type='text' value={author} onChange={handleAuthorChange} />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditForm;
