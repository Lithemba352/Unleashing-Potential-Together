import React from 'react';
import CourseCard from './CourseCard';
import './Courses.css'
import { FaDatabase, FaKeyboard, FaJava, FaLaptopCode } from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';
import { AiFillFileExcel } from 'react-icons/ai';

function Courses() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="heading-container">
          <h1>Courses</h1>
        </div>
        <p>Unlock Your Potential: Explore Wide Range of Courses Today!!</p>
      </header>
      <div className="course-container">
        <CourseCard 
          title="Mastering Excel" 
          level="Intermediate Level" 
          duration="10 hours" 
          instructor="By Smith Kotze" 
          views="1k" 
          icon={<AiFillFileExcel />} 
          customClass="excel-icon"
        />
        <CourseCard 
          title="Java" 
          level="Advanced Level" 
          duration="14 hours" 
          instructor="By Lee Nakay" 
          views="1k" 
          icon={<FaJava />} 
          customClass="java-icon"
        />
        <CourseCard 
          title="Computer Literacy" 
          level="Beginner Level" 
          duration="8 hours" 
          instructor="By Jon Deon" 
          views="1M" 
          icon={<FaLaptopCode />} 
          customClass="computer-literacy-icon"
        />
        <CourseCard 
          title="Database" 
          level="Beginner Level" 
          duration="6 hours" 
          instructor="By Sam Masuku" 
          views="3k" 
          icon={<FaDatabase />} 
          customClass="database-icon"
        />
        <CourseCard 
          title="Typing" 
          level="Beginner Level" 
          duration="6 hours" 
          instructor="By Sam Masuku" 
          views="3k" 
          icon={<FaKeyboard />}
        />
        <CourseCard 
          title="Graphic Design" 
          level="Intermediate Level" 
          duration="15 hours" 
          instructor="By Sam Masuku" 
          views="3k" 
          icon={<SiAdobexd />} 
          customClass="graphic-design-icon"
        />
      </div>
      <div className="explore-more">
        <button>Explore more courses</button>
      </div>
    </div>
  );
}

export default Courses;