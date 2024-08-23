import React from 'react';
import './Achievements.css';
import Badge from './images/Badge.jpg'

function Achievements() {
  return (
    <div className="achievements-page">
      <div className="achievement-header">
        <h1>Our Achievements</h1>
      </div>
      <img src={require('./Achievements.png')} alt="Achievement Badge" className="achievement-badge" />
      <div className="achievement-content">
        <h2>Empowering Over 1,000 IT Professionals:</h2>
        <p>
          Through our dedicated skill development programs, we have supported more than 
          1,000 aspiring IT professionals in enhancing their expertise and advancing their 
          careers. Our training initiatives are designed to equip individuals with the knowledge 
          and skills needed to thrive in the rapidly evolving tech landscape.
        </p>
      </div>
   </div>
  );
}

export default Achievements;