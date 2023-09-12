// UserProfile.js
import React from 'react';

function UserProfile({ user, enrolledCourses }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h3>Enrolled Courses</h3>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
