import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Play } from "lucide-react";
import ApproachSlider from "../components/ApproachSlider";
import TimelineTrack from "../components/TimelineTrack";
import { SpotlightCard } from "../components/SpotlightCard";
import { Typewriter } from "../components/Typewriter";

const highlightedProjects = [
  {
    slug: "thinking-architecture",
    title: "Thinking Architecture",
    meta: "Brand Design",
    image: "/assets/chrono-morph-Db8Qrzc2.jpg",
    tags: ["Brand Design"],
  },
  {
    slug: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    meta: "Product Animation",
    image: "/assets/void-textiles-DxX08qfd.jpg",
    tags: ["Product Animation"],
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
        <section className="relative mt-3 overflow-hidden rounded-[1.4rem] bg-black text-white px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 min-h-[75vh] sm:min-h-[640px] lg:h-[calc(100vh-6rem)] shadow-2xl flex flex-col justify-end border-0">
          {/* Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-opacity duration-700"
              poster="/assets/showreel-card.jpg"
            >
              <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Note: Overlays removed per user request for a brighter video */}
          </div>

          {/* Main Content Wrapper (Stacks inline on Mobile, Absolute on Desktop) */}
          <div className="relative z-10 w-full flex flex-col gap-5 sm:block">
            {/* Main Hero Headline */}
            <div className="w-full max-w-2xl xl:max-w-4xl" data-reveal data-reveal-delay="50">
              <h1 className="font-display text-[2.5rem] sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.05] tracking-tight text-white drop-shadow-md">
                <Typewriter text={"We make complex things\nunderstandable."} speed={40} delay={500} />
              </h1>
            </div>

            {/* Showreel Button (Flows under text on mobile, anchors to bottom-right on desktop) */}
            <div data-reveal data-reveal-delay="150" className="self-start sm:absolute sm:bottom-0 sm:right-10 lg:-bottom-2 lg:right-14 shrink-0 z-20">
            <Link
              to="/showreel"
              className="group flex items-center rounded-2xl bg-white/95 dark:bg-neutral-900/95 text-black dark:text-white p-1.5 sm:p-2 shadow-xl backdrop-blur-md transition-all duration-[400ms] ease-in-out hover:shadow-2xl active:scale-[0.98] cursor-pointer select-none border-0"
            >
              {/* Always-visible Rectangular Thumbnail */}
              <div className="relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-xl bg-black flex items-center justify-center z-10">
                <img
                  src="/assets/showreel-card.jpg"
                  alt="Showreel preview"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <Play className="size-3.5 fill-white ml-0.5" />
                </div>
              </div>

              {/* Smooth Horizontal Slide-out Text */}
              <div className="grid grid-cols-[0fr] opacity-0 overflow-hidden transition-all duration-[400ms] ease-in-out group-hover:grid-cols-[1fr] group-hover:opacity-100">
                <div className="overflow-hidden">
                  <span className="font-display text-sm sm:text-sm font-bold leading-tight whitespace-nowrap pl-4 pr-5 block">
                    Watch Full Showreel
                  </span>
                </div>
              </div>
            </Link>
            </div>
          </div>
        </section>


        {/* Studio Statement */}
        <section data-reveal className="flex flex-col justify-center min-h-[75vh] lg:min-h-[90vh] py-24 sm:py-32">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.25rem] font-medium leading-[1.2] tracking-[-0.02em] text-brand-foreground">
            We develop visual ways to communicate products, technology and complex ideas using 3D, motion design and visual storytelling to reveal how things work, what matters, and why they matter.
          </p>
        </section>


        {/* Highlighted Work: Clean Borderless Project Cards */}
        <section className="py-6 sm:py-8">
          <div className="grid gap-6 md:grid-cols-2">
            {highlightedProjects.map((project, i) => (
              <SpotlightCard
                key={project.title}
                to={`/work/${project.slug}`}
                delay={i === 0 ? "100" : "200"}
                className="rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-3.5 sm:p-4.5 md:p-5 flex flex-col gap-4 sm:gap-5 transition-transform duration-[400ms] ease-spring-vibe hover:-translate-y-2 active:scale-[0.98] border-0"
              >
                <div className="relative z-10 aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover ease-out"
                  />
                </div>
                <div className="relative z-10 flex items-end justify-between px-1 pb-1">
                  <div>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl text-brand-foreground">
                      {project.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-bg px-3 py-1 font-mono text-xs uppercase tracking-wider text-brand-foreground font-medium border-0"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:-rotate-45">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div data-reveal className="mt-8 text-right">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-muted px-6 py-3 text-xs font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] shadow-xs border-0"
            >
              Discover More <ArrowRight className="size-4 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
            </Link>
          </div>
        </section>


        {/* The Power of Our Approach Slider */}
        <div data-reveal>
          <ApproachSlider />
        </div>


        {/* From Concept to Delivery Timeline */}
        <div data-reveal>
          <TimelineTrack />
        </div>


        {/* How Our Motion Can Work for You */}
        <section className="py-6 sm:py-8 overflow-hidden w-full">
          <div className="mx-auto max-w-[1600px]">
            {/* Section Header */}
            <div data-reveal className="flex flex-col gap-3 md:items-center md:text-center mb-6 sm:mb-8">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-foreground">
                What We Can Help You Visualise
              </h2>
            </div>

            {/* Clean Full-Width Accordion Card */}
            <div data-reveal data-reveal-delay="100" className="mx-auto w-full rounded-2xl sm:rounded-3xl bg-brand-muted p-4 sm:p-6 lg:p-10 shadow-sm dark:shadow-2xl border-0">
              <div
                
                className="flex flex-col gap-3"
              >
                {motionServices.map((service, i) => {
                  const isOpen = openService === i;
                  return (
                    <div
                      key={service.id}
                      
                      onClick={() => setOpenService((prev) => (prev === i ? null : i))}
                      tabIndex={-1}
                      className={`group overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none ring-0 focus:ring-0 select-none ${
                        isOpen
                          ? "bg-brand-bg text-brand-foreground shadow-sm"
                          : "bg-brand-muted text-brand-foreground hover:brightness-[0.97] dark:hover:brightness-110"
                      }`}
                    >
                      <div
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left select-none outline-none focus:outline-none ring-0"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <span
                            className={`font-mono text-xs font-medium transition-colors ${
                              isOpen ? "text-brand-foreground font-semibold" : "text-brand-subtle"
                            }`}
                          >
                            {service.id}
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span 
                              className={`truncate font-display text-lg lg:text-2xl tracking-tight transition-all duration-300 ${
                                isOpen
                                  ? "text-brand-foreground opacity-100"
                                  : "text-brand-foreground opacity-90"
                              }`}
                              style={{
                                fontVariationSettings: isOpen ? "'wght' 700" : "'wght' 600",
                                transition: "font-variation-settings 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease, opacity 0.25s ease",
                              }}
                            >
                              {service.title}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                            isOpen
                              ? "bg-brand-panel text-brand-panel-foreground rotate-45 shadow-xs"
                              : "bg-black/5 dark:bg-white/5 text-brand-foreground group-hover:bg-brand-panel group-hover:text-brand-panel-foreground group-hover:scale-110 group-hover:rotate-90"
                          }`}
                        >
                          <Plus className="size-4" />
                        </span>
                      </div>

                      {/* Pure CSS Morphing Grid Height Expansion */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-brand-foreground/10 px-5 pb-5 pt-3 text-sm sm:text-base leading-relaxed text-brand-subtle font-normal">
                            <p>{service.copy}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
