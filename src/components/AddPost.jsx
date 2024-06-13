import axios from "axios";
import React, { useState, useEffect } from "react";

const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const publishPost = () => {
    const updatePost = { title, author, content };
    axios
      .post(`http://localhost:8080/api/v1/posts`, updatePost)
      .then((response) => {
        props.changeDbFlag();
        props.changeAddPostFlag();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <div className='card-header'>
            <h2>Add Post</h2>
          </div>
          <label htmlFor='Title'>Title:</label>
          <input
            type='text'
            value={title}
            placeholder='Enter Title'
            onChange={handleTitleChange}
          />
          <label htmlFor='Author'>Author:</label>
          <input
            type='text'
            value={author}
            placeholder='Enter Author'
            onChange={handleAuthorChange}
          />
          <label htmlFor='Content'>Content:</label>
          <input
            type='text'
            value={content}
            placeholder='Enter Author'
            onChange={handleContentChange}
          />
          <div>
            <button
              type='button'
              className='btn btn-primary me-2 mt-2 '
              onClick={publishPost}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
