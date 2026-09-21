import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface AnimatedHoverLogoProps {
  setIsOpen: (open: boolean) => void;
}

export const AnimatedHoverLogo: React.FC<AnimatedHoverLogoProps> = ({ setIsOpen }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalFrames = 32; // The animation holds at frame 31. Frames 32-62 are the built-in animate-out which we skip in favor of smooth reverse playback.
  const timerRef = useRef<number | null>(null);

  // Preload images to ensure flicker-free animation
  useEffect(() => {
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = `/assets/pg-emblem-frames/frame_${i}.png`;
    }
  }, []);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);

    if (isHovered) {
      // Play forward
      timerRef.current = window.setInterval(() => {
        setCurrentFrame((prev) => {
          if (prev >= totalFrames - 1) {
            if (timerRef.current) window.clearInterval(timerRef.current);
            return totalFrames - 1; // Hold on last frame
          }
          return prev + 1;
        });
      }, 25); // ~40fps (20% faster)
    } else {
      // Play in reverse
      timerRef.current = window.setInterval(() => {
        setCurrentFrame((prev) => {
          if (prev <= 0) {
            if (timerRef.current) window.clearInterval(timerRef.current);
            return 0; // Hold on first frame
          }
          return prev - 1;
        });
      }, 25); // ~40fps (20% faster)
    }

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isHovered]);

  return (
    <Link
      to="/"
      onClick={() => setIsOpen(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center"
      aria-label="Pixel Grid home"
    >
      {/* Static Default Logo (Used as bounding box placeholder and base visible element) */}
      <img
        src="/assets/pg-emblem.png"
        alt="Pixel Grid"
        className={`h-[29px] w-auto sm:h-[31px] dark:invert object-contain select-none shrink-0 ${isHovered || currentFrame > 0 ? "opacity-0" : "opacity-100"}`}
      />
      {/* Animated Sequence Frames on Hover */}
      <img
        src={`/assets/pg-emblem-frames/frame_${currentFrame}.png`}
        alt="Pixel Grid Animated"
        className={`absolute left-0 bottom-0 h-[26px] w-auto sm:h-[32px] max-w-none invert dark:invert-0 object-[left_bottom] object-contain select-none shrink-0 origin-bottom-left pointer-events-none ${isHovered || currentFrame > 0 ? "opacity-100" : "opacity-0"}`}
      />
    </Link>
  );
};
