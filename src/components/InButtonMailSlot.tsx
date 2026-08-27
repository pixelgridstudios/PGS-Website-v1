import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, Send } from "lucide-react";

interface InButtonMailSlotProps {
  onTrigger: () => boolean | void; // returns false if validation fails
  onComplete: () => void;
}

export const InButtonMailSlot: React.FC<InButtonMailSlotProps> = ({
  onTrigger,
  onComplete,
}) => {
  const [phase, setPhase] = useState<"idle" | "inserting" | "delivered">("idle");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (phase !== "idle") return;

    // Trigger form validation callback
    const isValid = onTrigger();
    if (isValid === false) return;

    setPhase("inserting");

    // Phase 1: Letter slides in & Flap springs shut (1.0s)
    setTimeout(() => {
      setPhase("delivered");

      // Phase 2: Show confirmation receipt (1.1s later)
      setTimeout(() => {
        onComplete();
        setPhase("idle");
      }, 1100);
    }, 950);
  };

  return (
    <div className="relative inline-block">
      {/* Animated Document Card Gliding Down into the Slot */}
      <AnimatePresence>
        {phase === "inserting" && (
          <motion.div
            className="absolute -top-10 left-3.5 z-30 pointer-events-none"
            initial={{ y: -24, scale: 0.9, opacity: 0, rotateX: 20 }}
            animate={{
              y: [-24, -8, 12, 34],
              scale: [0.9, 1, 0.95, 0.45],
              opacity: [0, 1, 1, 0],
              rotateX: [20, 0, -15, -35],
            }}
            transition={{
              duration: 0.9,
              times: [0, 0.25, 0.72, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="w-10 h-6.5 rounded bg-white text-black shadow-lg border border-neutral-300 p-0.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="h-0.5 w-4 bg-emerald-500 rounded-xs" />
                <span className="font-mono text-[5px] font-bold text-neutral-400">BRIEF</span>
              </div>
              <div className="space-y-0.5">
                <div className="h-0.5 w-7 bg-neutral-400 rounded-full" />
                <div className="h-0.5 w-5 bg-neutral-300 rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compact, Perfectly Proportioned Pill Button (Strict Zero Excess Negative Space) */}
      <button
        type="button"
        onClick={handleClick}
        disabled={phase !== "idle"}
        className={`group relative h-[44px] w-[156px] rounded-full px-3.5 flex items-center justify-center gap-2.5 shadow-md cursor-pointer select-none transition-colors duration-200 border-0 overflow-hidden shrink-0 ${
          phase === "delivered"
            ? "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-black"
            : phase === "inserting"
            ? "bg-brand-panel text-brand-panel-foreground"
            : "bg-brand-panel text-brand-panel-foreground hover:opacity-90"
        }`}
      >
        {/* Left: Mechanical Mail Slot Flap Hatch */}
        <div className="relative w-8 h-4.5 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
          {/* Precision Brushed Metal Flap that pushes inward with spring bounce */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-900 border-b border-neutral-400/60 origin-top flex items-center justify-center"
            animate={
              phase === "inserting"
                ? { rotateX: [0, -68, 20, -8, 0] }
                : { rotateX: 0 }
            }
            transition={{
              duration: 0.85,
              times: [0, 0.35, 0.65, 0.85, 1],
              ease: "easeInOut",
            }}
          >
            <div className="w-4 h-0.5 rounded-full bg-neutral-400/80 shadow-xs" />
          </motion.div>
          <Mail className="size-2.5 text-neutral-400" />
        </div>

        {/* Center Label (Tight, Evenly Spaced) */}
        <span className="font-display text-xs sm:text-[13px] font-semibold tracking-tight whitespace-nowrap">
          {phase === "delivered"
            ? "Sent!"
            : phase === "inserting"
            ? "Sealing..."
            : "Send Brief"}
        </span>

        {/* Right Status Icon (Prominent size-4 Icon, Directly Adjacent with Balanced Gap) */}
        <div className="flex items-center justify-center shrink-0">
          {phase === "delivered" ? (
            <Check className="size-4 stroke-[3] text-white dark:text-black" />
          ) : (
            <Send
              className={`size-4 rotate-12 transition-transform duration-200 ${
                phase === "inserting"
                  ? "text-emerald-400 scale-105"
                  : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              }`}
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default InButtonMailSlot;
