
import React from 'react';

const Projects = () => {
    
    const h = {
        paddingLeft:30
    }
    const p = {
        paddingLeft: 25
    }
    const projects = {
        marginTop: 100
    }
    
  return (
    <section style={projects}>
      <h2 style={h}>Projects</h2>
      <div className="project">
        <h3 style={h}>Horiseon Webpage</h3>
        <p style={p}>This is my first project that I worked on in my Coding Course. I had a great time going through the source code
                    and updating the webpage to be functional.</p>
        <a href="https://marc01710.github.io/challenge-1-module-1/" target="_blank" rel="noopener noreferrer"><img className="first-project"  src="./src/assets/01-html-css-git-homework-demo.png" alt="picture of marc hernandez's first project"></img></a>
      </div>
      <div className="project">
        <h3 style={h}>Cocktail Companion - Your Personal Mixologist</h3>
        <p style={p}>This is the first project that I worked on with a group of four other developers including myself.  This was such a great way of 
                    learning and utilizing the git flow of pushing up pull requests and having others approve them to be on the main branch.</p>
        <a href="https://evanilla57.github.io/cocktail-companions/" target="_blank" rel="noopener noreferrer"><img className="first-project"  src="./src/assets/second.png" alt="picture of marc hernandez's second project"></img></a>
      </div>
      
    </section>
  );
};

export default Projects;
