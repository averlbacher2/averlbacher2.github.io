import React from 'react';
import './styles/main.css'; 
import ExperienceCardList from './sections/ExperienceCardList';
import experienceData from './data/experienceData';

function App() {
  return (
    <>
      <header>
        <nav>
          <p>Analise Erlbacher</p>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="section-header">
          <h1>Hi, I'm Analise!</h1>
        </div>
        <section className="about-section" id="about">
          <div>
            <img
              className="photo"
              src="../public/assets/square-headshot.png"
              alt="Analise Erlbacher"
            />
          </div>
          <div>
            <p className="subheading">Nice to meet you!</p>
            <h2>About Me</h2>
            <p className="emphasis-text" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
              Hi there! I am a college student with a passion for software
              development, web design, and entrepreneurship.
            </p>
            <p>
              When I'm not hitting maximum laptop overdrive, you can find me writing,
              playing piano, or walking with my headphones on somewhere outside.
            </p>
          </div>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <p>
            I am a current student at University of Nebraska-Lincoln, pursuing a
            double major in Computer Science and Business Management with an
            emphasis in Entrepreneurship.
          </p>
          {/* Use your React component for each work experience */}
          <ExperienceCardList experiences={experienceData} />
          {/* Add more ExperienceCard components here */}
        </section>
        <section id="projects">
          <h2>Projects</h2>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <p>
            Languages: Java, Python, Basic JavaScript, HTML, CSS Frameworks:
            React, Vite, Playwright Tools: Git, GitHub, Visual Studio Code, Figma
          </p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </div>

      <footer>
        {/* You can add footer content here, like contact information or copyright */}
      </footer>
    </>
  );
}

export default App;