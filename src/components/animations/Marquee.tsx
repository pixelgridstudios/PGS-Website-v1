import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "framer-motion";

interface MarqueeProps {
  children: string;
  baseVelocity?: number;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ children, baseVelocity = 100, className = "" }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden m-0 whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div className="font-display font-bold uppercase flex whitespace-nowrap flex-nowrap gap-4 sm:gap-8 items-center" style={{ x }}>
        <span className="block">{children}</span>
        <span className="block text-brand-subtle/30">✦</span>
        <span className="block">{children}</span>
        <span className="block text-brand-subtle/30">✦</span>
        <span className="block">{children}</span>
        <span className="block text-brand-subtle/30">✦</span>
        <span className="block">{children}</span>
        <span className="block text-brand-subtle/30">✦</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
