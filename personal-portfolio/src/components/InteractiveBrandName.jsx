import { useState } from 'react';
import '../styles/main.css';

export default function InteractiveBrandName( {brandName} ) {
  // We use a counter as a key to force component remounting
  const [animationKey, setAnimationKey] = useState(0);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    // Increment the key to force a re-render and restart animation
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <div
      className="brand-container"
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {}} // Optional: Can be used to handle hover-out effects
    >
      <div 
        key={animationKey} 
        className="brand-text typing"
        style={{ '--char-count': brandName.length }}
      >
        {brandName}
      </div>
    </div>
  );
}