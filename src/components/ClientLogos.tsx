import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./animations/FadeIn";

interface ClientLogo {
  name: string;
  src: string;
}

// Using placehold.co for temporary PNG placeholders. 
// Replace these src paths with your actual local paths (e.g., "/assets/clients/nike.png")
const clients: ClientLogo[] = [
  { name: "Nike", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=NIKE" },
  { name: "Razer", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=RAZER" },
  { name: "Polestar", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=POLESTAR" },
  { name: "Logitech", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=LOGITECH" },
  { name: "Sony", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=SONY" },
  { name: "Bose", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=BOSE" },
  { name: "Teenage Engineering", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=TEENAGE+ENG" },
  { name: "Rivian", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=RIVIAN" },
  { name: "Apple", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=APPLE" },
  { name: "Netflix", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=NETFLIX" },
  { name: "Dropbox", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=DROPBOX" },
  { name: "Framer", src: "https://placehold.co/240x100/1a1a1a/4a4a4a?text=FRAMER" },
];

// Divide into 4 arrays for 4 cells
const col1 = [clients[0], clients[4], clients[8]];
const col2 = [clients[1], clients[5], clients[9]];
const col3 = [clients[2], clients[6], clients[10]];
const col4 = [clients[3], clients[7], clients[11]];

const LogoCell = ({ items, currentIndex, colIdx }: { items: ClientLogo[], currentIndex: number, colIdx: number }) => {
  const item = items[currentIndex % items.length];
  
  return (
    <div className="relative h-20 sm:h-24 md:h-32 w-full rounded-xl sm:rounded-2xl bg-brand-muted/40 overflow-hidden flex items-center justify-center border border-brand-foreground/5 shadow-inner p-4 sm:p-6">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={item.name}
          initial={{ y: "100%", opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: "-100%", opacity: 0, scale: 1.05 }}
          transition={{ 
            type: "spring", 
            stiffness: 80, 
            damping: 18, 
            delay: colIdx * 0.12 // Cascade from left to right
          }}
          className="absolute inset-0 flex items-center justify-center w-full h-full"
        >
          <img 
            src={item.src} 
            alt={`${item.name} logo`} 
            className="max-h-full max-w-full object-contain opacity-70 contrast-125 select-none pointer-events-none mix-blend-luminosity"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ClientLogos: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Coordinated timer: swaps the logos every 3.5 seconds
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

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
            <LogoCell items={col1} currentIndex={index} colIdx={0} />
            <LogoCell items={col2} currentIndex={index} colIdx={1} />
            <LogoCell items={col3} currentIndex={index} colIdx={2} />
            <LogoCell items={col4} currentIndex={index} colIdx={3} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ClientLogos;
