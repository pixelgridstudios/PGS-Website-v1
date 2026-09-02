import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Play } from "lucide-react";
import DotDivider from "../components/DotDivider";
import ApproachSlider from "../components/ApproachSlider";
import TimelineTrack from "../components/TimelineTrack";
import TextReveal from "../components/animations/TextReveal";
import FadeIn from "../components/animations/FadeIn";
import ClientLogos from "../components/ClientLogos";

const highlightedProjects = [
  {
    slug: "thinking-architecture",
    title: "Thinking Architecture",
    meta: "Brand Film · Architectural CGI",
    image: "/assets/chrono-morph.jpg",
    tags: ["Architectural CGI", "Spatial Motion", "3D LookDev"],
  },
  {
    slug: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    meta: "Brand Film · Smart System",
    image: "/assets/void-textiles.jpg",
    tags: ["Brand Film", "3D Motion", "Storytelling"],
  },
];

const motionServices = [
  {
    id: "01",
    title: "Product Launch Films",
    tag: "3D Animation & CGI",
    copy: "High-impact launch films that visually articulate what a new product does, its engineering precision, and why it matters to the market.",
  },
  {
    id: "02",
    title: "3D Technical & System Explainer",
    tag: "Visualization & Diagrams",
    copy: "Transform complex cloud architectures, hardware internals, and enterprise software platforms into clear, elegant, and cinematic 3D motion graphics that close deals.",
  },
  {
    id: "03",
    title: "Brand Film Systems",
    tag: "Identity & Visual Language",
    copy: "Cohesive visual identity packages, channel branding kits, and master design languages engineered for enterprise scale and multi-platform consistency.",
  },
  {
    id: "04",
    title: "Event Visuals & Keynotes",
    tag: "Immersive & Large Scale",
    copy: "Cinematic, stage-ready visual assets for major product keynotes, global summits, trade displays, and immersive brand experiences.",
  },
  {
    id: "05",
    title: "Broadcast & Digital Campaigns",
    tag: "High-Reach Motion",
    copy: "Multi-format master deliverables optimized across 16:9, 9:16, and custom aspect ratios for high-performance marketing and global digital campaigns.",
  },
];

export const Home: React.FC = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px]">
        {/* Dot4 Style Hero Canvas with Background Video */}
        <section className="-mt-20 relative w-full h-[100svh] overflow-hidden flex flex-col justify-end p-6 sm:p-12 pb-12 sm:pb-16 bg-black">
          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-60 transition-opacity duration-700"
              poster="/assets/showreel-card.jpg"
            >
              <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Cinematic Gradient Overlays for High Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
          </div>

          {/* Bottom Row: Showreel Overlay */}
          <FadeIn delay={0.6} direction="up" className="relative z-10 flex items-center justify-end">
            {/* Interactive Showreel Hover Card */}
            <Link
              to="/showreel"
              className="group flex w-full sm:w-auto max-w-[340px] items-center gap-3.5 rounded-2xl bg-white text-black p-2.5 pr-4 shadow-2xl transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] cursor-pointer select-none backdrop-blur-md border-0"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-900 shadow-inner">
                <img
                  src="/assets/showreel-card.jpg"
                  alt="Pixel Grid showreel preview"
                  className="h-full w-full object-cover ease-out"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm uppercase tracking-wider text-neutral-500 font-medium">
                  Studio Reel
                </span>
                <span className="font-display text-sm font-bold leading-tight text-black">
                  Watch Full Showreel
                </span>
              </div>
              <span className="ml-auto flex size-8 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-sm transition-transform duration-[400ms] ease-spring-vibe group-hover:scale-[1.1]">
                <Play className="size-3.5 fill-current ml-0.5" />
              </span>
            </Link>
          </FadeIn>
        </section>

        {/* We are Pixel Grid: Signature Dot4 Asymmetric Split Card (Simplified) */}
        <FadeIn delay={0.1} className="my-16 sm:my-24 max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="w-full flex flex-col md:flex-row items-center gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-brand-muted p-6 sm:p-10 md:p-12 lg:p-16 shadow-sm dark:shadow-2xl border-0">
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-brand-foreground leading-tight md:leading-[1.15]">
                Pixel Grid is a global creative company that brings brands, stories, and experiences to life through art, design, and technology.
              </h2>
            </div>
            <div className="shrink-0 flex items-center justify-center pt-2 md:pt-0">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-brand-panel text-brand-panel-foreground px-5 md:px-7 py-3 md:py-4 text-sm sm:text-base font-medium tracking-wide shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 border-0"
              >
                <span>More about us</span>
                <ArrowRight className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeIn>

        <DotDivider />

        {/* Highlighted Work: Clean Borderless Project Cards */}
        <section className="py-12 sm:py-24 max-w-[1600px] mx-auto px-6 sm:px-12">
          <FadeIn delay={0.1} className="flex items-end justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-6xl text-brand-foreground">
                Highlighted Work
              </h2>
            </div>
            <Link
              to="/work"
              className="group hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-muted px-6 py-3 text-sm font-medium text-brand-foreground shadow-xs transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-brand-panel hover:text-brand-panel-foreground hover:shadow-md active:scale-95 border-0"
            >
              Discover More <ArrowRight className="size-4 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
            </Link>
          </FadeIn>

          <div className="grid gap-12 md:gap-8 md:grid-cols-2">
            {highlightedProjects.map((project, i) => (
              <FadeIn key={project.title} delay={0.2 + (i * 0.1)} className="h-full">
                <Link
                  to={`/work/${project.slug}`}
                  className="block h-full group flex flex-col gap-4 sm:gap-6 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-brand-foreground">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-brand-subtle font-sans text-sm sm:text-base">
                      {project.tags.join(" • ")}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-muted px-6 py-3 text-sm font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] shadow-xs border-0"
            >
              Discover More <ArrowRight className="size-4 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <DotDivider />

        {/* The Power of Our Approach Slider */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12"><FadeIn delay={0.1} fullWidth>
          <ApproachSlider />
        </FadeIn></div>

        <div className="max-w-[1600px] mx-auto px-6 sm:px-12"><DotDivider /></div>

        {/* From Concept to Delivery Timeline */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12"><FadeIn delay={0.1} direction="up" fullWidth>
          <TimelineTrack />
        </FadeIn></div>

        <div className="max-w-[1600px] mx-auto px-6 sm:px-12"><DotDivider /></div>

        {/* How Motion Can Work for You - Unified Minimal Layout */}
        <section className="py-12 sm:py-16 overflow-hidden w-full max-w-[1600px] mx-auto px-6 sm:px-12">
          <div className="mx-auto max-w-[900px]">
            <FadeIn delay={0.1} className="flex flex-col md:items-center md:text-center mb-10 sm:mb-12">
              <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight text-brand-foreground">
                How Motion Can Work for You
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full flex flex-col gap-3">
              {motionServices.map((service, i) => {
                const isOpen = openService === i;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setOpenService(i)}
                    onClick={() => setOpenService((prev) => (prev === i ? null : i))}
                    tabIndex={-1}
                    className={`overflow-hidden rounded-2xl transition-all duration-200 cursor-pointer border-0 outline-none ring-0 select-none ${
                      isOpen
                        ? "bg-brand-muted text-brand-foreground shadow-sm"
                        : "bg-brand-bg text-brand-foreground hover:bg-brand-muted/50"
                    }`}
                  >
                    <div
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-7 text-left select-none outline-none focus:outline-none ring-0"
                    >
                      <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                        <span
                          className={`font-mono text-sm sm:text-base font-medium transition-colors ${
                            isOpen ? "text-brand-foreground font-semibold" : "text-brand-subtle"
                          }`}
                        >
                          {service.id}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <span className="truncate font-display text-lg sm:text-xl font-semibold tracking-tight text-brand-foreground">
                            {service.title}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                          isOpen
                            ? "bg-brand-panel text-brand-panel-foreground rotate-45 shadow-xs"
                            : "bg-brand-muted text-brand-foreground"
                        }`}
                      >
                        <Plus className="size-4 sm:size-5" />
                      </span>
                    </div>

                    {/* Pure CSS Morphing Grid Height Expansion */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-brand-foreground/10 px-5 sm:px-7 pb-5 sm:pb-7 pt-4 text-base sm:text-lg leading-relaxed text-brand-subtle font-normal">
                          <p>{service.copy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10 sm:mt-14 flex justify-center w-full">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-8 py-4 font-display text-base font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-0 select-none cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="size-5" />
              </Link>
            </FadeIn>
          </div>
        </section>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12"><ClientLogos /></div>
      </div>
    </div>
  );
};

export default Home;
