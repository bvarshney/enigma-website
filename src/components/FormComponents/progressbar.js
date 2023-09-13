import React from 'react';

const ProgressBar = ({ currentSection }) => {
  const totalSections = 4; // Total number of sections in your form
  const progress = ((currentSection - 1) / (totalSections - 1)) * 100; // Adjusted calculation

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;