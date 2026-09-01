import React, { useState, useEffect, useRef } from "react";
import { FolderSearch, Sparkles, Palette, Film, RefreshCw, Send, Play, Pause } from "lucide-react";
import confetti from "canvas-confetti";

interface TimelineStep {
  id: number;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  colStart: number;
  colEnd: number;
  description: string;
}

const TOTAL_COLS = 30;
const START_NEEDLE = 1.67; // Column 1 center
const END_NEEDLE = 98.33;   // Column 30 center

const pipelineSteps: TimelineStep[] = [
  {
    id: 0,
    title: "Discovery & Strategy",
    shortTitle: "Discovery",
    icon: <FolderSearch className="size-4 shrink-0" />,
    colStart: 1,
    colEnd: 8,
    description:
      "We explore your objectives, research your brand, industry and target audience, and develop a clear creative roadmap for the project.",
  },
  {
    id: 1,
    title: "Concept & Storytelling",
    shortTitle: "Concept",
    icon: <Sparkles className="size-4 shrink-0" />,
    colStart: 5,
    colEnd: 13,
    description:
      "Scriptwriting, storyboarding to visualize the flow, and developing style frames to establish the definitive visual direction.",
  },
  {
    id: 2,
    title: "Design & Art Direction",
    shortTitle: "Art Direction",
    icon: <Palette className="size-4 shrink-0" />,
    colStart: 10,
    colEnd: 18,
    description:
      "Moodboards, color palette, typography styling, custom 3D asset modeling, procedural lighting, and overall aesthetic look-development.",
  },
  {
    id: 3,
    title: "Animation & Motion Design",
    shortTitle: "Animation",
    icon: <Film className="size-4 shrink-0" />,
    colStart: 15,
    colEnd: 23,
    description:
      "Keyframe animation, fluid motion design, 3D rendering, multipass compositing, and impactful sound design & music mastering.",
  },
  {
    id: 4,
    title: "Feedback & Refinements",
    shortTitle: "Refinements",
    icon: <RefreshCw className="size-4 shrink-0" />,
    colStart: 20,
    colEnd: 26,
    description:
      "Iterative review and revisions based on your input, edit adjustments to timing, pacing, and transitions, followed by final quality checks.",
  },
  {
    id: 5,
    title: "Delivery & Implementation",
    shortTitle: "Delivery",
    icon: <Send className="size-4 shrink-0" />,
    colStart: 22,
    colEnd: 30,
    description:
      "Optimized master exports for all your marketing channels in multiple formats, resolutions, and a final delivery package with usage guidelines.",
  },
];

const stepProgressPoints = [5, 25, 45, 63, 78, 90];

const getStepFromProgress = (p: number): number => {
  if (p < 18) return 0;
  if (p < 36) return 1;
  if (p < 54) return 2;
  if (p < 72) return 3;
  if (p < 84) return 4;
  return 5;
};

export const TimelineTrack: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisibleRef = useRef<boolean>(false);
  const timelineCardRef = useRef<HTMLDivElement>(null);
  const playheadRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(5);
  const activeStepRef = useRef<number>(0);
  const isAutoPlayingRef = useRef<boolean>(true);
  const hasFiredConfettiRef = useRef<boolean>(false);
  const desktopStep6ButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileStep6ButtonRef = useRef<HTMLButtonElement | null>(null);
  const glideTweenRef = useRef<{
    active: boolean;
    startProgress: number;
    targetProgress: number;
    startTime: number;
    duration: number;
  }>({
    active: false,
    startProgress: 5,
    targetProgress: 5,
    startTime: 0,
    duration: 380, // ~0.38s swift split-second travel
  });

  isAutoPlayingRef.current = isAutoPlaying;
  activeStepRef.current = activeStep;

  // Viewport Observer: Auto-pauses playhead when out of screen and instantly cleans up confetti residue
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
          isVisibleRef.current = isVisible;

          // When user scrolls away from the section, instantly clear all lingering confetti particles
          if (!entry.isIntersecting) {
            try {
              confetti.reset();
            } catch {}
          }
        });
      },
      { threshold: [0, 0.15, 0.5] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Celebratory Confetti Burst directly centered at the Delivery Button (ONLY when section is actively visible)
  const triggerDeliveryConfetti = (explicitButton?: HTMLElement | null) => {
    // STRICT GUARD: Never fire if the timeline section is not actively on screen
    if (!isVisibleRef.current) return;

    let originX = 0.5;
    let originY = 0.5;

    // Target the actual interactive button element
    const targetEl =
      explicitButton ||
      (desktopStep6ButtonRef.current && desktopStep6ButtonRef.current.offsetParent !== null
        ? desktopStep6ButtonRef.current
        : mobileStep6ButtonRef.current);

    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      if (rect.bottom < 50 || rect.top > window.innerHeight - 50) {
        return; // Button is scrolled out of view, do not fire
      }
      originX = Math.min(0.95, Math.max(0.05, (rect.left + rect.width / 2) / window.innerWidth));
      originY = Math.min(0.95, Math.max(0.05, (rect.top + rect.height / 2) / window.innerHeight));
    } else if (timelineCardRef.current) {
      const rect = timelineCardRef.current.getBoundingClientRect();
      if (rect.bottom < 50 || rect.top > window.innerHeight - 50) {
        return; // Card is out of view, do not fire
      }
      // Accurate fallback onto track 6 button zone (left side, near bottom of track)
      originX = Math.min(0.95, Math.max(0.1, (rect.left + rect.width * 0.45) / window.innerWidth));
      originY = Math.min(0.95, Math.max(0.1, (rect.top + rect.height * 0.78) / window.innerHeight));
    }

    const colors = ["#10B981", "#F59E0B", "#6366F1", "#EC4899", "#FFFFFF", "#06B6D4"];

    // 1. Left Upward Fan (Crisp 140 ticks lifecycle to prevent drifting into bottom sections)
    confetti({
      particleCount: 38,
      angle: 65,
      spread: 55,
      origin: { x: originX, y: originY },
      colors,
      ticks: 140,
      gravity: 0.95,
      startVelocity: 28,
      decay: 0.90,
      scalar: 0.9,
      drift: -0.02,
      disableForReducedMotion: true,
    });

    // 2. Right Upward Fan
    confetti({
      particleCount: 38,
      angle: 115,
      spread: 55,
      origin: { x: originX, y: originY },
      colors,
      ticks: 140,
      gravity: 0.95,
      startVelocity: 28,
      decay: 0.90,
      scalar: 0.9,
      drift: 0.02,
      disableForReducedMotion: true,
    });

    // 3. Central Sparkle Pop
    setTimeout(() => {
      if (!isVisibleRef.current) return;
      confetti({
        particleCount: 24,
        spread: 80,
        origin: { x: originX, y: originY - 0.02 },
        colors,
        ticks: 120,
        gravity: 0.9,
        startVelocity: 22,
        decay: 0.91,
        scalar: 1.05,
        shapes: ["circle", "square"],
        disableForReducedMotion: true,
      });
    }, 150);
  };

  // Continuous Seamless Autoplay requestAnimationFrame Engine with Split-Second Travel Interpolation
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    const durationMs = 24000; // 24 seconds smooth continuous cycle

    const tick = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // 1. Split-Second Smooth Playhead Travel Interpolation
      if (glideTweenRef.current.active) {
        const elapsed = currentTime - glideTweenRef.current.startTime;
        const progressRatio = Math.min(1, Math.max(0, elapsed / glideTweenRef.current.duration));

        // Quintic Out Easing: 1 - (1 - t)^4 (swift launch & feather-soft arrival)
        const ease = 1 - Math.pow(1 - progressRatio, 4);

        progressRef.current =
          glideTweenRef.current.startProgress +
          (glideTweenRef.current.targetProgress - glideTweenRef.current.startProgress) * ease;

        if (progressRatio >= 1) {
          progressRef.current = glideTweenRef.current.targetProgress;
          glideTweenRef.current.active = false;
          lastTime = performance.now();
        }

        // Render traveling playhead needle smoothly
        const needle = START_NEEDLE + (progressRef.current / 100) * (END_NEEDLE - START_NEEDLE);
        if (playheadRef.current) {
          playheadRef.current.style.left = `${needle}%`;
        }
      }
      // 2. Continuous Autoplay Scrubbing (when actively visible)
      else if (isAutoPlayingRef.current && isVisibleRef.current) {
        progressRef.current += (delta / durationMs) * 100;

        // Instant seamless loop when hitting 100% (zero dead-zone freeze)
        if (progressRef.current >= 100) {
          progressRef.current = progressRef.current % 100;
          hasFiredConfettiRef.current = false;
        }

        // Re-arm trigger when playhead enters early phases
        if (progressRef.current < 50) {
          hasFiredConfettiRef.current = false;
        }

        // Fire celebratory confetti immediately upon reaching Delivery & Implementation (only if visible)
        if (progressRef.current >= 84 && !hasFiredConfettiRef.current) {
          hasFiredConfettiRef.current = true;
          triggerDeliveryConfetti();
        }

        // Continuous linear mapping across active track bounds
        const needle = START_NEEDLE + (progressRef.current / 100) * (END_NEEDLE - START_NEEDLE);
        if (playheadRef.current) {
          playheadRef.current.style.left = `${needle}%`;
        }

        // Synchronize active step
        const currentStep = getStepFromProgress(progressRef.current);
        if (currentStep !== activeStepRef.current) {
          activeStepRef.current = currentStep;
          setActiveStep(currentStep);
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleSelectStep = (idx: number, e?: React.MouseEvent<HTMLButtonElement>) => {
    setActiveStep(idx);
    activeStepRef.current = idx;

    const targetProgress = stepProgressPoints[idx];

    // Trigger split-second smooth glide travel from current position to target position
    glideTweenRef.current = {
      active: true,
      startProgress: progressRef.current,
      targetProgress: targetProgress,
      startTime: performance.now(),
      duration: 380, // ~0.38s smooth split-second travel
    };

    if (idx === 5) {
      hasFiredConfettiRef.current = true;
      triggerDeliveryConfetti(e?.currentTarget);
    }
  };

  return (
    <section ref={sectionRef} className="py-6 sm:py-8 overflow-hidden w-full">
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3 md:items-center md:text-center mb-6 sm:mb-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-foreground">
            From Concept to Delivery
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-brand-subtle font-normal">
            Our pipeline is structured like a production timeline — streamlined, transparent, and
            guided directly by the creative director from start to finish.
          </p>
        </div>

        {/* Unified Timeline & Inspector Container: Clean Borderless Outer Card */}
        <div
          ref={timelineCardRef}
          className="hidden lg:grid lg:grid-cols-[1.25fr_360px] xl:grid-cols-[1.3fr_390px] rounded-2xl sm:rounded-3xl bg-brand-muted overflow-hidden shadow-sm dark:shadow-xl border-0"
        >
          {/* Left: Interactive Multi-Track DAW Timeline */}
          <div className="relative p-6 sm:p-8 flex flex-col justify-between select-none bg-brand-muted/80 dark:bg-neutral-950/80">
            {/* Timeline Canvas Container */}
            <div className="relative w-full">
              {/* 1. Timeline Ruler Bar with Subtle Spaced Ticks */}
              <div className="relative h-7 w-full border-b border-brand-foreground/10 flex items-end">
                {/* 31 Precision Equally-Spaced Ticks across 30 Columns */}
                <div className="relative w-full h-2.5 pointer-events-none">
                  {Array.from({ length: TOTAL_COLS + 1 }).map((_, i) => {
                    const isMajor = i % 5 === 0;
                    const leftPercent = (i / TOTAL_COLS) * 100;
                    const transform =
                      i === 0
                        ? "none"
                        : i === TOTAL_COLS
                        ? "translateX(-100%)"
                        : "translateX(-50%)";
                    return (
                      <div
                        key={i}
                        style={{ left: `${leftPercent}%`, transform }}
                        className={`absolute bottom-0 w-[1px] ${
                          isMajor
                            ? "h-3 bg-neutral-400/60 dark:bg-neutral-600/50"
                            : "h-1.5 bg-neutral-300/40 dark:bg-neutral-800/60"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* 2. Track Area with Subtle Low-Contrast Vertical Grid Lines (Non-Eyecandy) */}
              <div className="relative mt-6 mb-2 h-[280px] w-full">
                {/* Vertical Grid Rules (31 Precision Equally-Spaced Subtle Grey Lines) */}
                <div className="pointer-events-none absolute inset-0">
                  {Array.from({ length: TOTAL_COLS + 1 }).map((_, i) => {
                    const isMajor = i % 5 === 0;
                    const leftPercent = (i / TOTAL_COLS) * 100;
                    const transform =
                      i === 0
                        ? "none"
                        : i === TOTAL_COLS
                        ? "translateX(-100%)"
                        : "translateX(-50%)";
                    return (
                      <div
                        key={i}
                        style={{ left: `${leftPercent}%`, transform }}
                        className={`absolute top-0 bottom-0 w-[1px] ${
                          isMajor
                            ? "bg-neutral-400/25 dark:bg-neutral-700/30"
                            : "bg-neutral-300/15 dark:bg-neutral-800/25"
                        }`}
                      />
                    );
                  })}
                </div>

                {/* 6 Department Tracks */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  {pipelineSteps.map((s, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <div
                        key={s.id}
                        className="relative grid grid-cols-[repeat(30,1fr)] items-center h-9 sm:h-9.5"
                      >
                        <button
                          ref={idx === 5 ? desktopStep6ButtonRef : undefined}
                          type="button"
                          onClick={(e) => handleSelectStep(idx, e)}
                          style={{
                            gridColumnStart: s.colStart,
                            gridColumnEnd: s.colEnd + 1,
                          }}
                          className={`flex h-9 sm:h-9.5 w-full items-center gap-2 rounded-xl px-3 sm:px-3.5 text-left transition-colors duration-200 cursor-pointer shadow-xs whitespace-nowrap overflow-hidden border-0 ${
                            isActive
                              ? "bg-black text-white dark:bg-neutral-200 dark:text-neutral-950 font-semibold"
                              : "bg-white text-black hover:bg-neutral-100 dark:bg-neutral-900/90 dark:text-neutral-300 dark:hover:bg-neutral-800 font-medium"
                          }`}
                        >
                          <span
                            className={`shrink-0 transition-colors ${
                              isActive ? "text-white dark:text-neutral-950" : "text-black dark:text-neutral-300"
                            }`}
                          >
                            {s.icon}
                          </span>
                          <span className="font-display text-[12.5px] sm:text-sm font-medium tracking-tight whitespace-nowrap">
                            {s.title}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Smooth Continuous Vector CTI Playhead */}
              <div
                ref={playheadRef}
                style={{
                  left: "6.5%",
                  transform: "translateX(-50%) translateZ(0)",
                  willChange: "left",
                  backfaceVisibility: "hidden",
                }}
                className="pointer-events-none absolute -top-1 bottom-0 z-30 flex flex-col items-center"
              >
                {/* Premiere Pro / AE CTI Head Pentagon */}
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  className="shrink-0 overflow-visible pointer-events-none"
                  style={{ shapeRendering: "geometricPrecision" }}
                >
                  <path
                    d="M1 0.5 H15 V8.5 L8 13.5 L1 8.5 Z"
                    className="fill-black dark:fill-neutral-500"
                    style={{ shapeRendering: "geometricPrecision" }}
                  />
                  <circle
                    cx="8"
                    cy="5.5"
                    r="1.5"
                    className="fill-white dark:fill-neutral-900"
                    style={{ shapeRendering: "geometricPrecision" }}
                  />
                </svg>
                {/* Refined 1.5px Non-Flickering Line */}
                <div
                  className="w-[1.5px] flex-1 bg-black dark:bg-neutral-600 -mt-[1px]"
                  style={{ shapeRendering: "crispEdges" }}
                />
              </div>
            </div>

            {/* Bottom Timeline Controls */}
            <div className="mt-4 pt-3 border-t border-brand-foreground/10 flex items-center justify-between font-mono text-sm uppercase tracking-wider text-brand-subtle">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-bg px-2.5 py-1 text-[13px] font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors duration-150 cursor-pointer border-0"
                title={isAutoPlaying ? "Pause Timeline Autoplay" : "Resume Timeline Autoplay"}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="size-3 fill-current" />
                    <span>Pause Scrub</span>
                  </>
                ) : (
                  <>
                    <Play className="size-3 fill-current" />
                    <span>Auto Scrub</span>
                  </>
                )}
              </button>
              <span className="text-[13px] text-brand-subtle dark:text-neutral-500">
                Click tracks to jump
              </span>
            </div>
          </div>

          {/* Right: Vertical Scrolling Content Reel with Crisp Zero-Ghosting Transitions */}
          <div className="border-t lg:border-t-0 lg:border-l border-brand-foreground/10 bg-brand-bg/60 dark:bg-neutral-900/90 p-6 sm:p-8 flex flex-col justify-center">
            <div>
              {/* Vertical Scrolling Content Reel */}
              <div className="relative h-[180px] sm:h-[160px] overflow-hidden">
                <div
                  className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
                  style={{ transform: `translateY(-${activeStep * 100}%) translateZ(0)` }}
                >
                  {pipelineSteps.map((s, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <div
                        key={s.id}
                        className={`h-[180px] sm:h-[160px] shrink-0 flex flex-col justify-center transition-opacity duration-300 ease-out ${
                          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <h3 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-neutral-700 dark:text-neutral-300 font-normal">
                          {s.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Step Accordion Stack */}
        <div className="mt-6 grid gap-2.5 lg:hidden">
          {pipelineSteps.map((s, idx) => {
            const isOpen = activeStep === idx;
            return (
              <div
                key={s.id}
                className={`overflow-hidden rounded-xl transition-colors duration-200 shadow-xs border-0 ${
                  isOpen
                    ? "bg-black text-white shadow-md dark:bg-neutral-900"
                    : "bg-white text-black hover:bg-neutral-200 dark:bg-neutral-900/70 dark:text-white"
                }`}
              >
                <button
                  ref={idx === 5 ? mobileStep6ButtonRef : undefined}
                  type="button"
                  onClick={(e) => handleSelectStep(idx, e)}
                  className="flex w-full items-center justify-between p-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-8 items-center justify-center rounded-lg ${
                        isOpen
                          ? "bg-white/15 text-white"
                          : "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white"
                      }`}
                    >
                      {s.icon}
                    </span>
                    <span className="font-display text-[15px] sm:text-base font-medium tracking-tight">
                      {s.title}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-[13px] font-medium ${
                      isOpen ? "text-white/70" : "text-neutral-500"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>

                {/* Pure CSS Grid Expansion */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out bg-neutral-950 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 p-4 pt-3 text-sm">
                      <p className="leading-relaxed text-white/90 font-normal">
                        {s.description}
                      </p>

                    </div>
                  </div>
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
