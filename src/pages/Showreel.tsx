import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Share2, Check } from "lucide-react";
import DotDivider from "@/components/DotDivider";

const reelChapters = [
  {
    time: "00:00",
    title: "Xiaomi Redmi Note 12",
    discipline: "Product Launch · 3D CGI",
    slug: "xiaomi-redmi-note-12",
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
    title: "Yas Mall Abu Dhabi",
    discipline: "Experiential · 8K LED Canvas",
    slug: "yas-mall",
    image: "/assets/precision-archive.jpg",
  },
  {
    time: "00:52",
    title: "boAt Lifestyle",
    discipline: "Acoustic Simulation · 3D CGI",
    slug: "boat-lifestyle",
    image: "/assets/chrono-morph.jpg",
  },
  {
    time: "01:10",
    title: "Netflix India Originals",
    discipline: "Broadcast UI · Screen Design",
    slug: "netflix-screens",
    image: "/assets/void-textiles.jpg",
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
        <div data-reveal className="mb-6 sm:mb-8">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-subtle hover:text-brand-foreground transition-all duration-[400ms] ease-spring-vibe"
          >
            <ArrowLeft className="size-4 transition-transform duration-[400ms] ease-spring-vibe group-hover:-translate-x-1" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Header Block */}
        <section data-reveal className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-subtle font-medium mb-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Pixel Grid Studios · 2026 Edition</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-foreground">
                Studio Showreel
              </h1>
              <p className="mt-3 max-w-2xl text-base sm:text-lg text-brand-subtle font-normal">
                A curated high-energy compilation of 3D product visualization, procedural CGI, commercial launch films, and spatial LED motion.
              </p>
            </div>

            {/* Action Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://vimeo.com/1182784182"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-panel text-brand-panel-foreground px-6 py-3 text-xs sm:text-sm font-medium shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 border-0"
              >
                <span>Watch 4K on Vimeo</span>
                <ExternalLink className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://www.behance.net/search/projects?search=pixel+grid+studios"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-muted px-5 py-3 text-xs sm:text-sm font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-md active:scale-95 shadow-xs border-0"
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
            </div>
          </div>
        </section>

        {/* Main Cinema Vimeo Player Container */}
        <section data-reveal data-reveal-delay="100" className="mt-8 overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-2xl border-0">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <iframe
              title="Pixel Grid Studios Showreel · Vimeo 4K Player"
              src="https://player.vimeo.com/video/1182784182?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
            />
          </div>
        </section>

        <DotDivider />

        {/* Featured Projects in this Reel: Seamless Borderless Cards */}
        <section className="py-6 sm:py-8">
          <div data-reveal className="flex flex-col gap-2 mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-foreground">
              Featured Case Studies in this Reel
            </h2>
            <p className="text-sm sm:text-base text-brand-subtle font-normal">
              Click on any featured project below to explore the in-depth breakdown, styleframes, and production credits.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reelChapters.map((ch, idx) => (
              <Link
                key={ch.slug}
                to={`/work/${ch.slug}`}
                data-reveal
                data-reveal-delay={`${(idx % 3) * 100}`}
                className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-3.5 flex flex-col gap-3 transition-transform duration-[400ms] ease-spring-vibe hover:-translate-y-2 active:scale-[0.98] border-0"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-950 shadow-inner">
                  <img
                    src={ch.image}
                    alt={ch.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 rounded-md bg-black/80 px-2 py-0.5 font-mono text-[10px] font-medium text-white backdrop-blur-sm">
                    {ch.time}
                  </span>
                </div>
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-foreground">
                      {ch.title}
                    </h3>
                    <span className="font-mono text-xs text-brand-subtle font-medium">
                      {ch.discipline}
                    </span>
                  </div>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-xs transition-transform duration-[400ms] ease-spring-vibe group-hover:-rotate-45">
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <DotDivider />

        {/* Reel Production & Soundtrack Credits */}
        <section className="py-6 sm:py-8">
          <div data-reveal className="rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-sm dark:shadow-xl border-0">
            <div className="max-w-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium">
                <Sparkles className="size-4 text-brand-foreground" />
                <span>Reel Production Details</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-foreground">
                Crafted with precision 3D motion &amp; procedural visual systems
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Showreel;
