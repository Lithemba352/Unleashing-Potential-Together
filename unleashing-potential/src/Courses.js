// src/Courses.js
import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

function Courses() {
  const courses = [
    { name: "JAVA", img: "java-image-url" },
    { name: "COMPUTER LITERACY", img: "computer-literacy-image-url" },
    { name: "JS", img: "js-image-url" },
    { name: "Graphic Design", img: "graphic-design-image-url" },
    { name: "Mastering Excel", img: "excel-image-url" },
    { name: "Web Development", img: "web-development-image-url" }
  ];

  return (
    <div className="courses-page">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
      </nav>

      <h1>Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.img} alt={course.name} />
            <h2>{course.name}</h2>
          </div>
        ))}
      </div>
      <button className="explore-more-btn">Explore More Courses</button>
    </div>
  );
}

export default Courses;
