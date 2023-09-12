// CourseDetail.js
import React from 'react';

function CourseDetail({ course }) {
  if (!course) {
    return <div><h3>Click on a course to view details.</h3></div>;
  }

  return (
    <div>
      <h2>Course Details</h2>
      <p>Title: {course.title}</p>
      <p>Description: {course.description}</p>
      {/* Add more course details here */}
    </div>
  );
}

export default CourseDetail;
