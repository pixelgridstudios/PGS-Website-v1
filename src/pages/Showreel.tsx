import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Share2, Check } from "lucide-react";
import DotDivider from "@/components/DotDivider";
import BackButton from "@/components/BackButton";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const reelChapters = [
  {
    time: "00:00",
    title: "Thinking Architecture",
    discipline: "Architectural Form · Spatial CGI",
    slug: "thinking-architecture",
    image: "/assets/chrono-morph.jpg",
  },
  {
    time: "00:18",
    title: "TATA Power EZ Homes",
    discipline: "Brand Film · Smart System",
    slug: "tata-power-ez-homes",
    image: "/assets/void-textiles.jpg",
  },
  {
    time: "00:35",
    title: "Invictus by Raymond Realty",
    discipline: "Architectural CGI · Luxury Living",
    slug: "raymond-invictus",
    image: "/assets/precision-archive.jpg",
  },
  {
    time: "00:52",
    title: "Realme X Kyra",
    discipline: "Virtual Human · 3D Product Launch",
    slug: "realme-x-kyra",
    image: "/assets/chrono-morph.jpg",
  },
];

export const Showreel: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] py-8 sm:py-12">
        {/* Top Back Nav */}
        <FadeIn delay={0.1} direction="none" className="mb-6 sm:mb-8">
          <BackButton to="/work" label="Back to All Work" />
        </FadeIn>

        {/* Header Block */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <FadeIn delay={0.1} className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-brand-subtle font-medium mb-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Pixel Grid Studios · 2026 Edition</span>
              </FadeIn>
              <TextReveal
                text="Studio Showreel"
                className="font-serif text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-brand-foreground"
                delay={0.1}
              />
              <FadeIn delay={0.3} direction="up" className="mt-3 max-w-2xl text-base sm:text-lg text-brand-subtle font-normal">
                A curated high-energy compilation of 3D product visualization, procedural CGI, commercial launch films, and spatial LED motion.
              </FadeIn>
            </div>

            {/* Action Controls */}
            <FadeIn delay={0.4} direction="left" className="flex flex-wrap items-center gap-3">
              <a
                href="https://vimeo.com/1182784182"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-panel text-brand-panel-foreground px-6 py-3 text-sm sm:text-base font-medium shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 border-0"
              >
                <span>Watch 4K on Vimeo</span>
                <ExternalLink className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://www.behance.net/search/projects?search=pixel+grid+studios"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-muted px-5 py-3 text-sm sm:text-base font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-md active:scale-95 shadow-xs border-0"
              >
                <span>Behance Gallery</span>
                <ExternalLink className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share Showreel Link"
                className="group relative inline-flex size-10 sm:size-11 items-center justify-center rounded-full bg-brand-muted/70 text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.05] hover:shadow-md active:scale-95 cursor-pointer shadow-xs border-0 shrink-0"
              >
                {copied ? (
                  <Check className="size-4.5 text-emerald-500 animate-in zoom-in duration-200" />
                ) : (
                  <span className="relative flex items-center justify-center">
                    <Share2 className="size-4.5 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[18deg] group-hover:scale-115" />
                    <span className="absolute -top-1 -right-1 size-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-200 pointer-events-none" />
                  </span>
                )}
              </button>
            </FadeIn>
          </div>
        </div>

        {/* Main Cinema Vimeo Player Container */}
        <FadeIn delay={0.2} fullWidth className="mt-8 overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-2xl border-0">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <iframe
              title="Pixel Grid Studios Showreel · Vimeo 4K Player"
              src="https://player.vimeo.com/video/1182784182?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
            />
          </div>
        </FadeIn>

        <DotDivider />

        {/* Featured Projects in this Reel: Seamless Borderless Cards */}
        <section className="py-6 sm:py-8">
          <FadeIn delay={0.1} className="flex flex-col gap-2 mb-6">
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-brand-foreground">
              Featured Case Studies in this Reel
            </h2>
            <p className="text-sm sm:text-base text-brand-subtle font-normal">
              Click on any featured project below to explore the in-depth breakdown, styleframes, and production credits.
            </p>
          </FadeIn>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reelChapters.map((ch, idx) => (
              <FadeIn key={ch.title} delay={0.1 + (idx * 0.1)} className="h-full">
                <Link
                  to={`/work/${ch.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-3 sm:p-4 flex flex-col gap-3.5 transition-transform duration-300 ease-out hover:-translate-y-2 border-0 transform-gpu cursor-pointer shadow-xs"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-950 shadow-inner">
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
                    <div className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 backdrop-blur-md">
                      <span className="font-mono text-sm text-white">
                        {ch.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between px-1 pb-1">
                    <div>

                      <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-brand-foreground">
                        {ch.title}
                      </h3>
                    </div>
                    <span className="flex size-8 items-center justify-center rounded-full bg-brand-bg shadow-sm transition-transform duration-300 ease-out group-hover:-rotate-45">
                      <ArrowRight className="size-3.5 text-brand-foreground" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        <DotDivider />

        {/* Reel Production & Soundtrack Credits */}
        <section className="py-6 sm:py-8">
          <FadeIn delay={0.2} fullWidth className="rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-sm dark:shadow-xl border-0">
            <div className="max-w-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-brand-subtle font-medium">
                <Sparkles className="size-4 text-brand-foreground" />
                <span>Reel Production Details</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-brand-foreground">
                Crafted with precision 3D motion and procedural visual systems
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-brand-subtle font-normal">
                Audio mastered with custom dynamic sound design, transient shaping, and procedural motion synchronization for high-impact viewing.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-7 py-3.5 font-display text-sm font-medium shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 border-0"
              >
                <span>Commission a Project</span>
                <ArrowRight className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share Showreel Link"
                className="group relative inline-flex size-11 items-center justify-center rounded-full bg-brand-bg text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.05] hover:shadow-md active:scale-95 cursor-pointer shadow-xs border-0 shrink-0"
              >
                {copied ? (
                  <Check className="size-4 text-emerald-500 animate-in zoom-in duration-200" />
                ) : (
                  <span className="relative flex items-center justify-center">
                    <Share2 className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[18deg] group-hover:scale-115" />
                    <span className="absolute -top-1 -right-1 size-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-200 pointer-events-none" />
                  </span>
                )}
              </button>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
};

export default Showreel;
