import React, { useState } from 'react';

const EnrollmentProcess = () => {
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    // Perform enrollment logic (e.g., API call)
    // For demo purposes, just set enrolled to true
    setEnrolled(true);
  };

  return (
    <div className="container mt-5">
      {!enrolled && (
        <>
          <h2>Enrollment Process</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Course Title</h5>
              <p className="card-text">Instructor: John Doe</p>
              <button className="btn btn-primary" onClick={handleEnroll}>
                Enroll
              </button>
            </div>
          </div>
        </>
      )}
      {enrolled && (
        <>
          <h2>Congratulations!</h2>
          <p>You have successfully enrolled in the course.</p>
          <button className="btn btn-primary">Access Course</button>
        </>
      )}
    </div>
  );
};

export default EnrollmentProcess;
