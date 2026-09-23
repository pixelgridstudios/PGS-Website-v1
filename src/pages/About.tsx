import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Motion Graphics",
    tagline: "Our foundation.",
    desc: "We design and animate visuals that help brands communicate with clarity and character. From campaign assets to full visual systems, we focus on movement that feels intentional, refined, and built to last.",
    image: "/assets/styleframe-glass.jpg"
  },
  {
    id: "02",
    title: "3D Design",
    tagline: "Handcrafted depth.",
    desc: "3D allows us to move past a flat frame. We build objects and environments by hand. Every material, every detail, exists to support the design and vision. This is how we add depth to a brand's world.",
    image: "/assets/styleframe-hardware.jpg"
  },
  {
    id: "03",
    title: "Brand Systems",
    tagline: "Built to scale.",
    desc: "Instead of creating isolated pieces, we build structured visual systems. A foundation that enables multiple videos, renders, and applications to live together. Consistent, flexible, and designed to grow with the brand.",
    image: "/assets/styleframe-tech.jpg"
  },
  {
    id: "04",
    title: "Tailored Work",
    tagline: "Custom by design.",
    desc: "Every brand is different, and so is every collaboration. We work closely with our clients, thinking alongside them and refining solutions that respond directly to their goals. Flexible in execution, consistent in quality.",
    image: "/assets/styleframe-abstract.jpg"
  }
];

const team = [
  {
    name: "Subhanshu Gajbhiye",
    role: "Creative Director",
    initials: "SG"
  },
  {
    name: "Design & Motion Team",
    role: "3D & VFX Artists",
    initials: "DM"
  },
  {
    name: "Production Strategy",
    role: "Client & Creative Ops",
    initials: "PS"
  }
];

export const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] py-8 sm:py-12 space-y-12 lg:space-y-20">
        
        {/* Intro Section */}
        <section data-reveal className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-8">
          <div className="flex-1 max-w-4xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-brand-foreground leading-[1.05]" style={{ fontVariationSettings: "'wght' 700" }}>
              We are a motion & design studio dedicated to purposeful storytelling.
            </h1>
          </div>
          <div className="flex-1 max-w-xl text-lg sm:text-xl text-brand-subtle font-normal leading-relaxed flex flex-col gap-6">
            <p>
              <strong className="text-brand-foreground font-semibold">Pixel Grid Studios</strong> transforms complex ideas into dynamic, high-impact visuals. By blending diverse backgrounds with a shared technical hand, we’re a foundation of collective expertise designed to bring brands to life through movement and design.
            </p>
            <p>
              Since launching in 2020, we've grown into a specialized motion design company with a deep understanding of the modern landscape. We understand the speed, the platforms, and the visual language that comes with today's audiences, allowing us to create animation that feels relevant, and impossible to scroll past.
            </p>
          </div>
        </section>

        {/* Team Section (Agency Presentation) */}
        <section data-reveal className="flex flex-col gap-10">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-brand-foreground" style={{ fontVariationSettings: "'wght' 700" }}>
              Meet the Team
            </h2>
            <p className="mt-4 text-brand-subtle text-lg">
              A curated collective of world-class 3D animators, technical artists, and directors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl bg-brand-muted border-0">
                <div className="size-16 rounded-2xl bg-brand-panel text-brand-panel-foreground flex items-center justify-center font-display text-2xl font-bold shadow-sm">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-mono uppercase tracking-wider text-brand-subtle">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

                {/* Services Section (ApproachSlider Inspired) */}
        <section data-reveal className="w-full">
          <div className="w-full flex flex-col lg:grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground overflow-hidden shadow-sm dark:shadow-2xl border-0">
            
            {/* Left Column: Text Canvas */}
            <div className="w-full p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between gap-8 sm:gap-12">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-brand-foreground" style={{ fontVariationSettings: "'wght' 700" }}>
                  Services
                </h2>

                {/* 2-Column Tabs & Continuous Morphing Content */}
                <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] items-start">
                  {/* Tab Options */}
                  <ul className="flex flex-col gap-3.5 font-display text-lg lg:text-2xl">
                    {services.map((service, idx) => {
                      const isActive = activeIndex === idx;
                      return (
                        <li key={service.id}>
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
                              {service.title}
                            </button>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Vertical Sliding Text Reel */}
                  <div className="relative h-[250px] sm:h-[220px] md:h-[260px] lg:h-[260px] overflow-hidden border-t md:border-t-0 md:border-l border-brand-foreground/10 pt-5 md:pt-0 md:pl-8">
                    <div
                      className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
                      style={{ transform: `translateY(-${activeIndex * 100}%) translateZ(0)` }}
                    >
                      {services.map((service, idx) => {
                        const isActive = activeIndex === idx;
                        return (
                          <div
                            key={service.id}
                            className={`h-[250px] sm:h-[220px] md:h-[260px] lg:h-[260px] shrink-0 flex flex-col justify-start transition-opacity duration-300 ease-out ${
                              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                            style={{ backfaceVisibility: "hidden" }}
                          >
                            <p className="font-display text-xl text-brand-foreground mb-3" style={{ fontVariationSettings: "'wght' 700" }}>
                              {service.tagline}
                            </p>
                            <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-brand-foreground/85 font-normal">
                              {service.desc}
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
            <div className="p-4 sm:p-6 lg:p-6 xl:p-8 flex items-center justify-center bg-brand-bg/40 border-t lg:border-t-0 lg:border-l border-brand-foreground/10">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[1/1] max-h-[460px] rounded-xl sm:rounded-2xl overflow-hidden bg-brand-muted shadow-md group border-0">
                {/* Continuous Horizontal Strip */}
                <div
                  className="flex h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {services.map((service) => (
                    <div key={service.id} className="relative h-full w-full shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
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
              {services.map((_, i) => (
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
        </section>

        {/* Bottom CTA Box (Seamless Borderless) */}
        <section data-reveal className="rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-8 sm:p-12 shadow-sm dark:shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border-0">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium mb-2">
              <Sparkles className="size-4 text-brand-foreground" />
              <span>Let's Create Together</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl tracking-tight text-brand-foreground" style={{ fontVariationSettings: "'wght' 700" }}>
              Ready to bring your next product launch to life?
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-8 py-4 font-display text-sm font-medium shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 shrink-0 border-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
          </Link>
        </section>

      </div>
    </div>
  );
};

export default About;
