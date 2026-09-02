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
        <section className="relative mt-3 overflow-hidden rounded-[1.4rem] bg-black text-white px-6 py-12 sm:px-12 lg:h-[calc(100vh-6rem)] lg:min-h-[640px] shadow-2xl flex flex-col justify-between border-0">
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

          {/* Main Hero Headline */}
          <div className="relative z-10 my-auto py-8">
            <TextReveal
              text="We make complex products and systems visually understandable through motion design, 3D visualization, and brand film."
              className="max-w-[22ch] font-display text-[8.5vw] font-bold leading-[1.05] tracking-tight sm:text-[5.5vw] lg:text-[3.2vw] text-white drop-shadow-md"
              delay={0.1}
            />
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

        {/* We are Pixel Grid: Signature Dot4 Asymmetric Split Card */}
        <FadeIn delay={0.1} className="my-6 sm:my-8">
          <div className="w-full flex flex-col md:grid md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] xl:grid-cols-[400px_1fr] rounded-2xl sm:rounded-3xl bg-brand-muted overflow-hidden shadow-sm dark:shadow-2xl border-0">
            
            {/* Left/Top Column: Context, Branding & Action */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-11 pb-2 sm:pb-3 md:pb-8 lg:pb-10 xl:pb-11 flex flex-row md:flex-col justify-between items-center md:items-start gap-3 sm:gap-4 md:gap-7 bg-transparent md:bg-black/[0.045] md:dark:bg-black/30 text-brand-foreground">
              <div>
                <h2 className="font-serif text-2xl md:text-4xl xl:text-6xl font-bold tracking-tight text-brand-foreground leading-tight md:leading-[1.08]">
                  <span className="inline md:block whitespace-nowrap">Hi, we're </span>
                  <span className="inline md:block md:mt-1 whitespace-nowrap">Pixel Grid</span>
                </h2>
              </div>

              <div className="shrink-0">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 rounded-full bg-brand-panel text-brand-panel-foreground px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 lg:py-3.5 text-sm sm:text-base font-medium tracking-wide shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 border-0"
                >
                  <span>More about us</span>
                  <ArrowRight className="size-3.5 sm:size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right/Bottom Column: Narrative */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-11 pt-2 sm:pt-3 md:pt-8 lg:pt-10 xl:pt-11 flex flex-col justify-center bg-brand-muted text-brand-foreground">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-4.5 text-sm sm:text-base lg:text-lg xl:text-lg leading-relaxed text-brand-subtle font-normal">
                <p>
                  Pixel Grid Studios was founded in 2020 by Subhanshu Gajbhiye, Creative Director. We turn complex engineering, products, and technical concepts into motion that audiences immediately understand.
                </p>
                <p>
                  There is no permanent bench here. For every brief, we curate seasoned specialists chosen specifically for that project, coordinated directly by the founder — delivering campaign-defining work for leading technology and consumer brands globally.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

        <DotDivider />

        {/* Highlighted Work: Clean Borderless Project Cards */}
        <section className="py-6 sm:py-8">
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

          <div className="grid gap-6 md:grid-cols-2">
            {highlightedProjects.map((project, i) => (
              <FadeIn key={project.title} delay={0.2 + (i * 0.1)} className="h-full">
                <Link
                  to={`/work/${project.slug}`}
                  className="block h-full group overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-3.5 sm:p-4.5 md:p-5 flex flex-col gap-4 sm:gap-5 transition-transform duration-300 ease-out hover:-translate-y-2 border-0 transform-gpu select-none cursor-pointer"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-end justify-between px-1 pb-1">
                  <div>

                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-4xl text-brand-foreground">
                      {project.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-bg px-3 py-1 font-mono text-sm uppercase tracking-wider text-brand-foreground font-medium border-0"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-45">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
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
        <FadeIn delay={0.1} fullWidth>
          <ApproachSlider />
        </FadeIn>

        <DotDivider />

        {/* From Concept to Delivery Timeline */}
        <FadeIn delay={0.1} direction="up" fullWidth>
          <TimelineTrack />
        </FadeIn>

        <DotDivider />

        {/* How Our Motion Can Work for You - Unified Minimal Layout */}
        <section className="py-12 sm:py-16 overflow-hidden w-full">
          <div className="mx-auto max-w-[900px]">
            <FadeIn delay={0.1} className="flex flex-col md:items-center md:text-center mb-10 sm:mb-12">
              <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight text-brand-foreground">
                How Our Motion Can Work for You
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
        <ClientLogos />
      </div>
    </div>
  );
};

export default Home;
