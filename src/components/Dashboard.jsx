// src/components/Dashboard.js
import React, { useState } from "react";
import "../css/Dashboard.css";
import Posts from "./Posts";

const Dashboard = () => {
  const [posts, setPosts] = useState([
    { id: 111, title: "Happiness", author: "John Cena" },
    { id: 112, title: "Success", author: "Dwayne Johnson" },
    { id: 113, title: "Motivation", author: "Bruce Lee" },
  ]);

  const [newTitle, setNewTitle] = useState("");

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const updateFirstPostTitle = () => {
    const updatedPosts = posts.map((post, index) => {
      if (index === 0) {
        return { ...post, title: newTitle };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className='dashboard'>
      <h1 className='dashboard-title'>Dashboard</h1>
      <div className='dashboard-controls'>
        <input
          type='text'
          value={newTitle}
          onChange={handleTitleChange}
          placeholder='New title for the first post'
        />
        <button onClick={updateFirstPostTitle}>Change Title</button>
      </div>
      <div className='dashboard-cards'>
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Dashboard;
