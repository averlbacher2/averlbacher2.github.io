import { useState, useEffect } from 'react';
import '../styles/main.css';

export default function SidebarNavigation() {
  const [activeSection, setActiveSection] = useState('about');
  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  // Auto-detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sidebar-nav">
      {sections.map((section) => (
        <div
          key={section.id}
          className="sidebar-nav-item"
          onClick={() => scrollToSection(section.id)}
        >
          <div
            className={`sidebar-nav-dot ${
              activeSection === section.id ? 'active' : ''
            }`}
          />
        </div>
      ))}
    </nav>
  );
}