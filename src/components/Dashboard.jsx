// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import EditForm from "./EditForm";
import AddPost from "./AddPost";

const Dashboard = () => {
  const [addPostFlag, setAddPostFlag] = useState(false);
  const [editable, setEditable] = useState(false);
  const [dbUpdateFlag, setDbUpdateFlag] = useState(false);

  const [selectedPost, setSelectedPost] = useState({
    id: 111,
    title: "Happiness",
    author: "John Cena",
    content: "",
  });
  const changeFlag = () => {
    setDbUpdateFlag(!dbUpdateFlag);
  };

  const onPostClick = (post) => {
    setSelectedPost(post);
  };

  const changeAddPostFlag = () => {
    setAddPostFlag(!addPostFlag);
  };

  return (
    <>
      <button onClick={changeAddPostFlag}>
        {!addPostFlag ? "Add Post" : "Collapse"}
      </button>
      {addPostFlag ? (
        <AddPost
          changeDbFlag={changeFlag}
          changeAddPostFlag={changeAddPostFlag}
        ></AddPost>
      ) : null}
      <div className='dashboard'>
        <h1 className='dashboard-title'>Dashboard</h1>

        <div className='dashboard-cards'>
          <Posts onPostClick={onPostClick} dbUpdateFlag={dbUpdateFlag} />
        </div>
        {editable ? (
          <EditForm
            selectedPost={selectedPost}
            setEditable={setEditable}
            changeDbFlag={changeFlag}
            dbUpdateFlag={dbUpdateFlag}
          ></EditForm>
        ) : (
          <PostDetails
            selectedPost={selectedPost}
            setEditable={setEditable}
            changeDbFlag={changeFlag}
          ></PostDetails>
        )}
      </div>
    </>
  );
};

export default Dashboard;
