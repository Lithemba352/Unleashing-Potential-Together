// src/HomePage.js
import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="explore-btn">Explore Courses</button>
        <button className="view-blogs-btn">View Blogs</button>
      </div>
    </div>
  );
}

export default HomePage;
