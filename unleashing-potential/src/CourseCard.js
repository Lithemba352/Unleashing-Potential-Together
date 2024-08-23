import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, level, duration, instructor, views, icon, customClass }) => {
  return (
    <div className={`course-card ${customClass}`}>
      <div className="course-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="course-level">{level}</p>
      <p className="course-duration">Duration: {duration}</p>
      <p className="course-instructor">{instructor}</p>
      <p className="course-views">{views} views</p>
    </div>
  );
};

export default CourseCard;