import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import CreatePost from "./CreatePost";
import PostFeed from "./PostFeed";
import BusinessProfile from "./BusinessProfile";
import BusinessDashboard from "./BusinessDashboard";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Face Forward</h1>} />
        <Route path="/profile" element={<BusinessProfile />} />
        <Route path="/dashboard" element={<BusinessDashboard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/feed" element={<PostFeed />} />
      </Routes>
    </Router>
  );
}
