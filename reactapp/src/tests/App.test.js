import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; 


const courses = [
  { id: 1, name: 'Mathematics 101', description: 'Introduction to Mathematics' },
  { id: 2, name: 'History of Art', description: 'Exploring the Art World' },
  { id: 3, name: 'Computer Science Fundamentals', description: 'Basic Concepts of Computer Science' },
];

test('renders_the_application_header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/EduLearn LMS/i);
  expect(headerElement).toBeInTheDocument();
});

test('displays_course_details_after_clicking_course', () => {
  const { getByTestId ,getByText} =render(<App />);  
 
 // Find a product element and click it
 const courseIdToClick = 1;
 const courseElement = getByTestId(`course-item-${courseIdToClick}`);
  fireEvent.click(courseElement);

  const expectedCourse = courses.find((course) => course.id === courseIdToClick);
  const expectedTitle = `Title: ${expectedCourse.name}`;
  const expectedDescription = `Description: ${expectedCourse.description}`;

  const courseDetails = getByText(expectedTitle);
  const courseDescrp = getByText(expectedDescription);
 
  expect(courseDetails).toBeInTheDocument();
  expect(courseDescrp).toBeInTheDocument();

});

test('enrolls_a_course_clicking_Enroll_button', () => {
 
  const { getByText } = render(<App />);
 
  const enrollButton = getByText(/Enroll Me/);
  
  expect(enrollButton).toBeInTheDocument();

});

test('check_the_enrolled_course', () => {
  const { getByText } = render(<App />);

   const headerElement = getByText(/Enrolled Courses/);
  expect(headerElement).toBeInTheDocument();
});