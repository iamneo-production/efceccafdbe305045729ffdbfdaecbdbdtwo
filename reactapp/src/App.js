// App.js
import React, { useState } from 'react';
import './App.css';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import EnrollmentForm from './components/EnrollmentForm';
import UserProfile from './components/UserProfile';

// Sample course data
const coursesData = [
  {
    id: 1,
    title: 'Mathematics 101',
    description: 'Introduction to Mathematics',
    instructor: 'Prof. Smith',
    duration: '8 weeks',
  },
  {
    id: 2,
    title: 'History of Art',
    description: 'Exploring the Art World',
    instructor: 'Dr. Johnson',
    duration: '10 weeks',
  },
  {
    id: 3,
    title: 'Computer Science Fundamentals',
    description: 'Basic Concepts of Computer Science',
    instructor: 'Dr. Brown',
    duration: '12 weeks',
  },
  // Add more courses as needed
];

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleEnroll = (studentName) => {
    
    const newEnrolledCourses = [...enrolledCourses, selectedCourse];
    setEnrolledCourses(newEnrolledCourses);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>EduLearn LMS</h1>
      </header>
      <div className="App-container">
        <CourseList courses={coursesData} onCourseSelect={handleCourseSelect} />
        <CourseDetail course={selectedCourse} />
        <EnrollmentForm onEnroll={handleEnroll} />
        <UserProfile user={user} enrolledCourses={enrolledCourses} />
      </div>
    </div>
  );
}

export default App;
