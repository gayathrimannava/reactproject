import React from 'react';
import { Link } from 'react-router-dom';
import './UserSelection.css'; // Link to the CSS file

const UserSelection = () => {
  return (
    <div className="main-container">
      <div className="title">
        <h1>Portal Access</h1>
      </div>
      <div className="user-selection-container">
        <div className="selection-card faculty">
          <div className="content">
            <h2>Faculty</h2>
            <Link to="/faculty_Login">
              <button className="login-button" aria-label="Login as Faculty">Login</button>
            </Link>
          </div>
        </div>
        <div className="selection-card student">
          <div className="content">
            <h2>Student</h2>
            <Link to="/student_Login">
              <button className="login-button" aria-label="Login as Student">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSelection;
