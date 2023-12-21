// About.jsx
import React from 'react';

const About = () => {

    const about = {
        display: 'flex',
        position: 'fixed',
        top: 150,
    };
    const p = {
        display: 'flex',
        position: 'fixed',
        top: 200,
    };

  return (
    <section >
      <h2 style={about}>About Me</h2>
      <p style={p}>
        Welcome to my portfolio! I'm a passionate developer with a focus on...
        
      </p>
    </section>
  );
};

export default About;
