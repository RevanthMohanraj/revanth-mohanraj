import React, { useEffect, useState } from 'react';
import './HomePage.scss';

// Move greetings outside the component to avoid dependency issues
const greetings = ['hi', 'வணக்கம்', 'नमस्ते','ನಮಸ್ತೆ','హాయ్','ഹായ്'];

const HomePage = ({ id }) => {
  const [greet, setGreet] = useState(greetings[0]);

  useEffect(() => {
    let i = 1;
    const intervalId = setInterval(() => {
      setGreet(greetings[i]);
      i = (i + 1) % greetings.length;
    }, 750);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // No warning since greetings is outside the component

  return (
    <div className="content-container" id={id}>
      <div className="content-wrapper">
        {greet}.
        <br />
        I'm
        <br />
        <strong>Revanth.</strong>
        <div className="info">
          I'm a Full Stack Developer, creating dynamic web applications with Java, Springboot and ReactJS.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
