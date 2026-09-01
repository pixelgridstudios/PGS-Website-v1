import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./animations/FadeIn";

const clients = [
  "Nike",
  "Razer",
  "Polestar",
  "Logitech",
  "Sony",
  "Bose",
  "Teenage Engineering",
  "Rivian",
  "Apple",
  "Netflix",
  "Dropbox",
  "Framer",
];

// Divide into 4 arrays for 4 cells
const col1 = [clients[0], clients[4], clients[8]];
const col2 = [clients[1], clients[5], clients[9]];
const col3 = [clients[2], clients[6], clients[10]];
const col4 = [clients[3], clients[7], clients[11]];

const LogoCell = ({ items }: { items: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Randomize the interval slightly so they don't all flip at once
    const intervalTime = 2500 + Math.random() * 2000;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative h-20 sm:h-24 md:h-32 w-full rounded-xl sm:rounded-2xl bg-brand-muted/40 overflow-hidden flex items-center justify-center border border-brand-foreground/5 shadow-inner">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={items[index]}
          initial={{ y: "100%", opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: "-100%", opacity: 0, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center w-full h-full"
        >
          <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-foreground/30 tracking-wider uppercase text-center px-4 leading-none select-none">
            {items[index]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ClientLogos: React.FC = () => {
  return (
    <section className="w-full pt-4 pb-12 sm:pt-6 sm:pb-16 overflow-hidden">
      <FadeIn delay={0.1}>
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="px-1">
            <h3 className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-brand-subtle font-semibold">
              Trusted by visionary brands
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            <LogoCell items={col1} />
            <LogoCell items={col2} />
            <LogoCell items={col3} />
            <LogoCell items={col4} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ClientLogos;
