import { useState, useEffect } from 'react';
import '../styles/main.css';

export default function InteractiveBrandName() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Trigger typewriter animation after component mounts
    setTimeout(() => setShowTypewriter(true), 500);
  }, []);

  const handleMouseEnter = () => {
    // This brief toggle forces the animation to restart
    setIsHovering(false);
    setTimeout(() => setIsHovering(true), 10);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="brand-container"
      onClick={scrollToTop}
    >
      <div
        className={`brand-text ${showTypewriter ? 'typewriter' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {'Analise Erlbacher'.split('').map((letter, index) => (
          <span
            key={index}
            className={`letter ${isHovering ? 'wave-animation' : ''}`}
            style={{ '--index': index }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    </div>
  );
}