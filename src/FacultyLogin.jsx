import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const FacultyLogin = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginId === '' || password === '') {
      alert('Please fill in all the fields');
    } else {
      navigate('/faculty-success');
    }
  };

  return (
    <div className="login-page">
      <h2>Faculty Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="loginId">Login ID:</label>
          <input
            id="loginId"
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="login-options">
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
