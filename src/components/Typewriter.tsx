import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 40, delay = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isStarted, speed, text.length]);

  return (
    <span className="inline-block w-full text-left">
      {text.split('').map((char, index) => {
        const isVisible = index < currentIndex;
        
        if (char === '\n') {
          return <br key={index} />;
        }
        
        return (
          <span 
            key={index} 
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            {char}
          </span>
        );
      })}
      {/* Blinking Cursor */}
      <span 
        style={{ opacity: currentIndex >= text.length ? 0.75 : 1 }}
        className="inline-block w-[0.1em] h-[0.9em] ml-[0.05em] align-middle bg-current animate-pulse" 
      />
    </span>
  );
};
