import React, { useState } from "react";
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
    copy: "From established brands to fresh beginnings, we ensure every visual element communicates clearly, feels intentional, and amplifies your identity across every touchpoint.",
    image: "/assets/chrono-morph.jpg",
    imageAlt: "Design a Strong Visual Identity — styleframe render",
  },
  {
    title: "Build to Scale",
    tagline: "Modular Systems",
    copy: "We engineer modular 3D design systems built for flexibility and consistency across marketing campaigns, platforms, and international broadcast formats.",
    image: "/assets/void-textiles.jpg",
    imageAlt: "Build to Scale — modular 3D simulation system",
  },
  {
    title: "Launch with Impact",
    tagline: "Engagement & Reach",
    copy: "We craft scroll-stopping motion and high-fidelity visuals that command attention, clarify technical value, and drive meaningful audience engagement.",
    image: "/assets/precision-archive.jpg",
    imageAlt: "Launch with Impact — high-end product visualization",
  },
];

export const ApproachSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? approachItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === approachItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 sm:py-16 overflow-hidden w-full">
      <div className="mx-auto max-w-[1600px]">
        {/* Single Cohesive Borderless Card Container */}
        <div className="w-full flex flex-col lg:grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground overflow-hidden shadow-sm dark:shadow-2xl border-0">
          
          {/* Left Column: Text Canvas */}
          <div className="w-full p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between gap-8 sm:gap-12">
            <div>
              <h2 className="font-serif text-4xl lg:text-6xl font-bold tracking-tight text-brand-foreground">
                The Power of Our Approach
              </h2>

              {/* 2-Column Tabs & Continuous Morphing Content */}
              <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] items-start">
                {/* Tab Options with Continuous Variable Font Morphing */}
                <ul className="flex flex-col gap-3.5 font-display text-lg sm:text-2xl lg:text-2xl">
                  {approachItems.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <li key={item.title}>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => setActiveIndex(idx)}
                          style={{
                            fontVariationSettings: isActive ? "'wght' 700" : "'wght' 400",
                            transition: "font-variation-settings 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease, opacity 0.25s ease",
                          }}
                          className={`text-left select-none cursor-pointer block w-full tracking-tight ${
                            isActive
                              ? "text-brand-foreground opacity-100"
                              : "text-brand-subtle hover:text-brand-foreground hover:opacity-90"
                          }`}
                        >
                          {item.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* Vertical Sliding Text Reel */}
                <div className="relative h-[180px] sm:h-[170px] overflow-hidden border-t md:border-t-0 md:border-l border-brand-foreground/10 pt-5 md:pt-0 md:pl-8">
                  <div
                    className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
                    style={{ transform: `translateY(-${activeIndex * 100}%) translateZ(0)` }}
                  >
                    {approachItems.map((item, idx) => {
                      const isActive = activeIndex === idx;
                      return (
                        <div
                          key={item.title}
                          className={`h-[180px] sm:h-[170px] shrink-0 flex flex-col justify-start transition-opacity duration-300 ease-out ${
                            isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-subtle mb-2 font-medium">
                            {item.tagline}
                          </span>
                          <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-brand-foreground/85 font-normal">
                            {item.copy}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Step Counter Footer */}
            <div className="hidden sm:flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-brand-subtle pt-6 border-t border-brand-foreground/10">
              <span className="font-bold text-brand-foreground">Approach 0{activeIndex + 1}</span>
              <span className="h-px w-8 bg-brand-foreground/20" />
              <span>0{approachItems.length}</span>
            </div>
          </div>

          {/* Right Column: Physical Sliding Image Strip */}
          <div className="p-4 sm:p-6 lg:p-6 xl:p-8 flex items-center justify-center bg-brand-bg/40 border-t lg:border-t-0 lg:border-l border-brand-foreground/10">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[1/1] max-h-[460px] rounded-xl sm:rounded-2xl overflow-hidden bg-brand-muted shadow-md group border-0">
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
                  className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md transition-opacity duration-150 hover:opacity-90 cursor-pointer border-0"
                >
                  <ChevronLeft className="size-4 sm:size-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next approach"
                  className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md transition-opacity duration-150 hover:opacity-90 cursor-pointer border-0"
                >
                  <ChevronRight className="size-4 sm:size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Indicator Bar */}
        <div className="block md:hidden mt-4">
          <ul className="flex justify-center gap-2 items-center">
            {approachItems.map((_, i) => (
              <li key={i} className="h-8 flex-1 flex items-center">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="w-full h-1 rounded-full transition-colors duration-200"
                >
                  <div
                    className={`w-full h-1 rounded-full transition-colors duration-300 ${
                      activeIndex === i
                        ? "bg-brand-foreground"
                        : "bg-brand-foreground/20"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApproachSlider;
