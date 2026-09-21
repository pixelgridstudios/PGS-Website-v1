import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isStarted]);

  return (
    <span className="relative inline-block w-full">
      {/* Invisible ghost text forces the container to its final layout size instantly */}
      <span className="invisible pointer-events-none">{text}</span>
      
      {/* Absolute overlay renders the actual typing effect without moving anything */}
      <span className="absolute top-0 left-0 w-full h-full text-left">
        {displayedText}
        <span className="inline-block w-[0.1em] h-[0.9em] ml-[0.05em] align-middle bg-current animate-pulse opacity-75" />
      </span>
    </span>
  );
};
