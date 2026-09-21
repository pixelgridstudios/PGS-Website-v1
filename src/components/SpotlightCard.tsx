import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

interface SpotlightCardProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ to, children, className, delay }) => {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link
      ref={divRef}
      to={to}
      data-reveal
      data-reveal-delay={delay}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden ${className || ""}`}
    >
      {/* Interactive Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.05) 40%, transparent 60%)`,
        }}
      />
      {children}
    </Link>
  );
};
