import { useState, useEffect } from 'react';
import '../styles/main.css';

export default function InteractiveBrandName() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // Trigger typewriter animation after component mounts
    setTimeout(() => setShowTypewriter(true), 500);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="brand-container" 
      onClick={scrollToTop}
    >
      <div className={`brand-text ${showTypewriter ? 'typewriter' : ''}`}>
        {'Analise Erlbacher'.split('').map((letter, index) => (
          <span 
            key={index} 
            className="letter"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    </div>
  );
}