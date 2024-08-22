import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.jpg'; 

function HomePage() {
  return (
    <div className="home-page">
      <nav className="navbar">
      <img src={Logo} alt="Unleashing Potential Logo" className="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="/partners">Partners</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>

      <div className="quote">
        <h1>Connecting Aspiring IT talent with innovative ICT Leaders for a Brighter Future</h1>
      </div>

      <div className="buttons">
        <Link to="/courses">
          <button className="explore-btn">Explore Courses</button>
        </Link>
        <button className="view-blogs-btn">View Blogs</button>
      </div>
    </div>
  );
}

export default HomePage;
