import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about">

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

       <div class="about-container">
        <h1>About Us</h1>
        <p class="intro">Welcome to "Unleashing Potential Together," an initiative dedicated to bridging the gap between aspiring IT professionals and innovative ICT companies.</p>

        <section>
            <h2>Our Mission</h2>
            <p>Our mission is to establish a robust partnership framework that connects emerging talent with opportunities to thrive in the IT sector.</p>
        </section>

        <section>
            <h2>Our Vision</h2>
            <p>We envision a world where everyone, regardless of their background or location, has the opportunity to access quality education and career opportunities in technology. Through strategic partnerships and targeted initiatives, we aim to build a more inclusive and empowered global tech community.</p>
        </section>

        <section>
            <h2>Our Values</h2>
            <p>Empowerment | Exclusivity | Collaboration | Sustainability</p>
        </section>

        <section>
            <h2>Our Initiatives</h2>
            <p>"Unleashing Potential Together" facilitates several key initiatives to support our mission: Project Skill Enhancement | Economic Empowerment | Digital Inclusivity | Collaborative Impact | Global Alignment</p>
        </section>

        <section>
            <h2>Get Involved</h2>
            <p>Whether you are an aspiring IT professional looking for opportunities, a company interested in partnering with us, or a mentor willing to share your expertise, there are many ways to get involved:</p>
            <ul>
                <li>Join a Program</li>
                <li>Become a Mentor</li>
                <li>Partner with Us</li>
            </ul>
        </section>
    </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section h2");

  sections.forEach(section => {
      section.addEventListener("click", () => {
          const content = section.nextElementSibling;
          content.style.display = content.style.display === "none" ? "block" : "none";
      });
  });
});

export default AboutUs;