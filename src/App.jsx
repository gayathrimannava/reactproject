import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserSelection from './UserSelection';
import {StudentLogin} from './StudentLogin';
import {FacultyLogin} from './FacultyLogin';
import StudentDashboard from './StudentDashboard';
import FacultyDashboard from './FacultyDashboard';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import StudentAttendance from './StudentAttendance';
import StudentMarks from './StudentMarks';
import StudentInfo from './Studentinfo';
import FacultyAttendance from './FacultyAttendance';
import FacultySections from './FacultySections';
import AddMarks from './AddMarks';
import './App.css';

function App() {

  return (
    <Router>
      
        
          <Routes>
            
                <Route path="/student_success" element={<StudentDashboard />} />
                <Route path="/student-attendance" element={<StudentAttendance />} />
                <Route path="/student-marks" element={<StudentMarks />} />
                <Route path="/student-info" element={<StudentInfo />} />
              
                <Route path="/faculty-success" element={<FacultyDashboard  />} />
                <Route path="/faculty-attendance" element={<FacultyAttendance />} />
                <Route path="/faculty-sections" element={<FacultySections />} />
                <Route path="/add-marks" element={<AddMarks />} />
    
            <Route path="/" element={<UserSelection />} />
            <Route path="/student_Login" element={<StudentLogin />} />
            <Route path="/faculty_Login" element={<FacultyLogin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
     
    </Router>
    
  );
}

export default App;
