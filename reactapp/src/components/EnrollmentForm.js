// EnrollmentForm.js
import React, { useState } from 'react';

function EnrollmentForm({ onEnroll }) {
  const [studentName, setStudentName] = useState('');

  const handleEnroll = () => {
    // Perform enrollment logic and call the onEnroll function with studentName
    onEnroll(studentName);
  };

  return (
    <div>
      <h2>Enrollment Form</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={handleEnroll}data-testid="enroll">Enroll Me</button>
    </div>
  );
}

export default EnrollmentForm;
