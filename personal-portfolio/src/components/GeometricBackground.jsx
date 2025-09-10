import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.css';

// Helper function to get a random value within a range
const getRandomValue = (min, max) => Math.random() * (max - min) + min;

// Helper function to pick a random item from an array
const getRandomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Define possible shape types, colors, and animation properties
const possibleShapeTypes = ['circle', 'square', 'border-circle'];
const possibleColorVars = ['--turquoise', '--bittersweet', '--indigo-dye', '--oxford-blue-light']; 
const possibleSizes = [30, 50, 70, 90, 110]; 
const possibleAnimationDelays = ['0s', '-1s', '-2s', '-3s', '-4s', '-5s'];
const possibleTransforms = ['none', 'rotate(0deg)', 'rotate(45deg)', 'rotate(90deg)', 'rotate(135deg)', 'rotate(-45deg)'];


export default function GeometricBackground({ children, numShapes = 20 }) { 
  const [shapes, setShapes] = useState([]);
  const shapesRef = useRef({});

  useEffect(() => {
    const generatedShapes = [];
    for (let i = 0; i < numShapes; i++) {
      const type = getRandomArrayItem(possibleShapeTypes);
      const colorVar = getRandomArrayItem(possibleColorVars);
      const size = getRandomArrayItem(possibleSizes);
      const animationDelay = getRandomArrayItem(possibleAnimationDelays);
      const transform = getRandomArrayItem(possibleTransforms);

      // Random position (top/left/right/bottom)
      const positionKey1 = getRandomArrayItem(['top', 'bottom']);
      const positionVal1 = `${getRandomValue(0, 100)}%`;
      const positionKey2 = getRandomArrayItem(['left', 'right']);
      const positionVal2 = `${getRandomValue(0, 100)}%`;

      generatedShapes.push({
        id: i, // Unique ID for key prop
        type,
        colorVar,
        size,
        animationDelay,
        transform,
        [positionKey1]: positionVal1, // Dynamically set top/bottom
        [positionKey2]: positionVal2, // Dynamically set left/right
      });
    }
    setShapes(generatedShapes);
  }, [numShapes]); // Re-generate if numShapes changes

  return (
    <section className="hero-section">
      <div className="floating-shapes">
        {shapes.map(shape => (
          <div
            key={shape.id}
            ref={el => (shapesRef.current[shape.id] = el)}
            className={`shape ${shape.type}`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom,
              transform: shape.transform || 'none',
              animationDelay: shape.animationDelay,
              
              backgroundColor: shape.type !== 'border-circle' ? `var(${shape.colorVar})` : 'transparent',
              border: shape.type === 'border-circle' ? `3px solid var(${shape.colorVar})` : 'none',
            }}
          ></div>
        ))}
      </div>
      {children}
    </section>
  );
}