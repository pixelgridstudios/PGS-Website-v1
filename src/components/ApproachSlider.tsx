import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ApproachItem {
  title: string;
  tagline: string;
  copy: string;
  image: string;
  imageAlt: string;
}

const approachItems: ApproachItem[] = [
  {
    title: "Design a Strong Visual Identity",
    tagline: "Clarity & Character",
    copy: "From established brands to fresh beginnings, we make sure every visual element communicates clearly, feels considered, and amplifies your identity. We focus on clarity and character, so your brand resonates wherever it appears.",
    image: "/assets/styleframe-glass.jpg",
    imageAlt: "Design a Strong Visual Identity – styleframe exploration",
  },
  {
    title: "Adaptable Visual Systems",
    tagline: "Built to Scale",
    copy: "We approach every project with a design system in mind, built for flexibility and scalability across campaigns, platforms, and applications. Each system is modular, forming a foundation that can grow, adapt, and support the brand over time.",
    image: "/assets/void-textiles.jpg",
    imageAlt: "Adaptable Visual Systems – modular 3D simulation system",
  },
  {
    title: "Ideas into Storytelling",
    tagline: "Engagement & Reach",
    copy: "We combine clarity, motion, and high-fidelity design to make products and ideas easier to see, understand, and remember.",
    image: "/assets/precision-archive.jpg",
    imageAlt: "Ideas into Storytelling – high-end product visualization",
  },
];

export const ApproachSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Physics-based Drag to Scroll for Mobile Layout
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const lastMouseXRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? approachItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === approachItems.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    isDraggingRef.current = true;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
    lastMouseXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) handleMouseUp();
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    const applyInertia = () => {
      if (!carouselRef.current) return;
      if (Math.abs(velocityRef.current) > 0.1) {
        carouselRef.current.scrollLeft -= velocityRef.current * 16; 
        velocityRef.current *= 0.92;
        rafRef.current = requestAnimationFrame(applyInertia);
      }
    };
    if (Math.abs(velocityRef.current) > 0.2) {
      rafRef.current = requestAnimationFrame(applyInertia);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
    
    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (e.pageX - lastMouseXRef.current) / dt;
    }
    lastMouseXRef.current = e.pageX;
    lastTimeRef.current = now;
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!carouselRef.current || carouselRef.current.children.length === 0) return;
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = (carouselRef.current.children[0] as HTMLElement).offsetWidth + 24; // Account for gap
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < approachItems.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-12 sm:py-16 overflow-hidden w-full">
      <div className="mx-auto max-w-[1600px] px-4 md:px-0">
        
        {/* DESKTOP LAYOUT (Hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] rounded-3xl bg-brand-muted text-brand-foreground overflow-hidden shadow-sm dark:shadow-2xl border-0">
          
          {/* Left Column: Text Canvas */}
          <div className="w-full p-10 lg:p-12 xl:p-14 flex flex-col justify-between gap-12">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-brand-foreground">
                The Value Behind the Visuals
              </h2>

              {/* 2-Column Tabs & Continuous Morphing Content */}
              <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] items-start">
                {/* Tab Options with Continuous Variable Font Morphing */}
                <ul className="flex flex-col gap-3.5 font-display text-lg lg:text-2xl">
                  {approachItems.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <li key={item.title}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveIndex(idx)}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                              fontVariationSettings: isActive ? "'wght' 700" : "'wght' 600",
                              transition: "font-variation-settings 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease, opacity 0.25s ease",
                            }}
                            className={`text-left select-none cursor-pointer block w-full tracking-tight transition-all duration-300 ${
                              isActive
                                ? "text-brand-foreground opacity-100"
                                : "text-brand-foreground opacity-90 hover:opacity-100"
                            }`}
                          >
                            {item.title}
                          </button>
                      </li>
                    );
                  })}
                </ul>

                {/* Vertical Sliding Text Reel */}
                <div className="relative h-[180px] overflow-hidden border-l border-brand-foreground/10 pl-8">
                  <div
                    className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
                    style={{ transform: `translateY(-${activeIndex * 100}%) translateZ(0)` }}
                  >
                    {approachItems.map((item, idx) => {
                      const isActive = activeIndex === idx;
                      return (
                        <div
                          key={item.title}
                          className={`h-[180px] shrink-0 flex flex-col justify-start transition-opacity duration-300 ease-out ${
                            isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <p className="text-lg lg:text-lg leading-relaxed text-brand-foreground/85 font-normal mt-2">
                            {item.copy}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Sliding Image Strip */}
          <div className="p-6 lg:p-6 xl:p-8 flex items-center justify-center bg-brand-bg/40 border-l border-brand-foreground/10">
            <div className="relative w-full aspect-[4/3] xl:aspect-[1/1] max-h-[460px] rounded-2xl overflow-hidden bg-brand-muted shadow-md group border-0">
              {/* Continuous Horizontal Strip */}
              <div
                className="flex h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {approachItems.map((item) => (
                  <div key={item.title} className="relative h-full w-full shrink-0">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Inset Circular Controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous approach"
                  className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md transition-opacity duration-150 hover:opacity-90 cursor-pointer border-0"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next approach"
                  className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md transition-opacity duration-150 hover:opacity-90 cursor-pointer border-0"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* MOBILE / TABLET LAYOUT (Dot4 Free-Scroll Native) */}
        <div className="md:hidden flex flex-col gap-6 w-full mt-4">
          <h2 className="font-display text-[2.25rem] font-bold tracking-tight text-brand-foreground leading-tight px-4">
            The Value Behind<br/>the Visuals
          </h2>
          
          {/* Native Horizontal Scroll Container */}
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-6 px-4 pb-2 [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {approachItems.map((item, idx) => (
              <div 
                key={item.title} 
                className="shrink-0 w-[85vw] sm:w-[60vw] flex flex-col gap-5 transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-sm bg-brand-muted shrink-0">
                  <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover pointer-events-none" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-brand-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[1.05rem] leading-[1.6] text-brand-foreground/80">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dot4 Dash Indicators */}
          <div className="flex justify-center gap-2 items-center px-4 mt-2">
            {approachItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                   if (carouselRef.current) {
                     const cardWidth = (carouselRef.current.children[0] as HTMLElement).offsetWidth + 24;
                     carouselRef.current.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
                   }
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === i 
                    ? "w-8 bg-brand-foreground" 
                    : "w-8 bg-brand-foreground/20 hover:bg-brand-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachSlider;
