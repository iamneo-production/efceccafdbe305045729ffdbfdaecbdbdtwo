// CourseList.js
import React from 'react';

function CourseList({ courses, onCourseSelect }) {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} onClick={() => onCourseSelect(course)}
          data-testid={`course-item-${course.id}`} >
            {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
