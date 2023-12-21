
import React from 'react';

const About = () => {

    const about = {
        display: 'flex',
        position: 'fixed',
        top: 115,
        alignItems: 'center',
        paddingLeft: 30
    };
    const p = {
        display: 'flex',
        position: 'fixed',
        top: 160,
        paddingLeft: 25
    };

  return (
    <section >
      <h2 style={about}>About Me</h2>
      <p style={p}>
        Welcome to my portfolio! My name is Marc Hernandez. I am currently in a coding bootcamp to become a Full Stack Developer.
                The coding languages that I have currently learned are HTML, CSS and JavaScript.
        
      </p>
    </section>
  );
};

export default About;
