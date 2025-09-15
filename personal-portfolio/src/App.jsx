import React from 'react';
import './styles/main.css';
import experienceData from './data/experienceData';
import ExperiencesContainer from './sections/ExperiencesContainer';
import projectData from './data/projectData';
import ProjectsContainer from './sections/ProjectsContainer';
import GeometricBackground from './components/GeometricBackground';
import InteractiveBrandName from './components/InteractiveBrandName';
import SidebarNavigation from './components/SidebarNavigation';

function App() {
  return (
    <>
      <GeometricBackground />
      <header>
        <nav>
          <InteractiveBrandName brandName="Analise Erlbacher"/>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <SidebarNavigation />
      <div className="main-content-wrapper">
        <div className="container">
          <div className="section-header">
            <h1>Hi, I'm Analise!</h1>
          </div>
          <section className="about-section" id="about">
            <div>
              <img
                className="photo"
                src="/assets/square-headshot.png"
                alt="Analise Erlbacher"
              />
            </div>
            <div>
              <p className="subheading">Nice to meet you!</p>
              <h2 className="section-heading">About Me</h2>
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
            <InteractiveBrandName brandName={"Experience"} />
            <p>
              I am a current student at University of Nebraska-Lincoln, pursuing a
              double major in <em>Computer Science</em> and <em>Business Management</em> with an
              emphasis in Entrepreneurship.
            </p>
            <ExperiencesContainer experiences={experienceData} />
          </section>
          <section id="projects">
            <InteractiveBrandName brandName={"Projects"} />
            <ProjectsContainer projects={projectData} />
          </section>
          <section id="skills">
            <InteractiveBrandName brandName={"Skills"} />
            <p>
              Languages: Java, Python, Basic JavaScript, HTML, CSS Frameworks:
              React, Vite, Playwright Tools: Git, GitHub, Visual Studio Code, Figma
            </p>
          </section>
          <section id="contact">
            <InteractiveBrandName brandName={"Contact"} />
          </section>
        </div> 
      </div> 
      <footer>
        {/* You can add footer content here, like contact information or copyright */}
      </footer>
    </>
  );
}

export default App;