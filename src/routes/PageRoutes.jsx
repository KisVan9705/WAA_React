import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import Dashboard from "../components/Dashboard";
import EditForm from "../components/EditForm";
// Import other components for your routes here

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/post/:id/post-details' element={<PostDetails />} />
      <Route path='/post/:id/edit' element={<EditForm />} />
    </Routes>
  );
};

export default PageRoutes;
