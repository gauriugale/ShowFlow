import React, { useEffect } from 'react';
import './LandingPage.css';

const LandingPage = ({ onDone }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone(); // Call parent to hide LandingPage
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="landing-page d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="landing-quote">
        “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”
      </h1>
      <p className="landing-subtext">Get ready to explore knowledge, skills, and opportunities...</p>
    </div>
  );
};

export default LandingPage;
