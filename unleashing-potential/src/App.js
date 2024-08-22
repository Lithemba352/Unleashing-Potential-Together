import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Courses from './Courses';
import Blog from './Blog';
import Achievements from './Achievements';
import Partners from './Partners';
import AboutUs from './AboutUs';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;