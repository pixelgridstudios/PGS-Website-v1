import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  FileText,
  Search,
  PenTool,
  Box,
  MonitorPlay,
  Rocket,
  PartyPopper
} from "lucide-react";

const pipelineSteps = [
  {
    id: "scoping",
    title: "Discovery & Scoping",
    description: "Deep dive into product mechanics, brand architecture, and campaign objectives to define the visual territory.",
    icon: <Search className="size-4" />,
  },
  {
    id: "creative",
    title: "Creative Direction",
    description: "Developing storyboards, styleframes, and motion tests that set the exact tone and physical behavior of the piece.",
    icon: <PenTool className="size-4" />,
  },
  {
    id: "modeling",
    title: "Modeling & Shading",
    description: "Building production-ready CAD data, crafting procedural textures, and defining realistic lighting environments.",
    icon: <Box className="size-4" />,
  },
  {
    id: "animation",
    title: "Motion & Physics",
    description: "Rigging systems and keyframing cinematic cameras to translate static engineering into compelling rhythm and pacing.",
    icon: <MonitorPlay className="size-4" />,
  },
  {
    id: "rendering",
    title: "Rendering & Composite",
    description: "Executing high-fidelity GPU renders, grading color passes, and layering atmospheric effects for photoreal finishing.",
    icon: <FileText className="size-4" />,
  },
  {
    id: "delivery",
    title: "Delivery & Implementation",
    description: "Finalizing master files, versioning out multi-platform formats, and handing over organized assets for rollout.",
    icon: <Rocket className="size-4" />,
  },
  {
    id: "wohoo",
    title: "Wohoo!",
    description: "Project launched, metrics climbing, team celebrating. The precise execution meets maximum impact.",
    icon: <PartyPopper className="size-4" />,
  },
];

const TimelineTrack: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const fireConfetti = () => {
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FFD700", "#FF8C00", "#FF1493"]
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FFD700", "#FF8C00", "#FF1493"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section className="py-16 sm:py-24 border-t border-brand-foreground/10">
      <div className="flex flex-col md:flex-row gap-12 sm:gap-24">
        {/* Left: Title */}
        <div className="md:w-[400px] shrink-0">
          <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-7xl text-brand-foreground md:sticky md:top-24">
            Our Pipeline
          </h2>
        </div>

        {/* Right: Editorial List */}
        <div className="flex-1 flex flex-col gap-0 border-t border-brand-foreground/10">
          {pipelineSteps.map((step, idx) => {
            const isWohoo = step.id === "wohoo";
            return (
              <div 
                key={step.id} 
                className="group relative border-b border-brand-foreground/10 py-8 sm:py-12 flex flex-col sm:flex-row gap-6 sm:gap-12 transition-colors hover:bg-brand-muted/30 cursor-crosshair"
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => isWohoo && fireConfetti()}
              >
                {/* Index */}
                <div className="shrink-0 w-12 font-mono text-xl sm:text-2xl text-brand-subtle group-hover:text-brand-foreground transition-colors">
                  0{idx + 1}
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-brand-foreground">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-brand-subtle font-normal max-w-2xl leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon hidden natively but reveals on hover maybe? Or just keep it stark and simple without icon */}
                <div className="hidden sm:flex shrink-0 w-12 h-12 items-center justify-center text-brand-subtle group-hover:text-brand-foreground transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                  {step.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineTrack;
