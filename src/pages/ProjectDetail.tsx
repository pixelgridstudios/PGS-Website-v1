import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Trophy, ExternalLink, Share2, Check } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import DotDivider from "@/components/DotDivider";

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [copied, setCopied] = useState(false);
  const [videoAspectRatio, setVideoAspectRatio] = useState<string>(
    project?.aspectRatio || "16/9"
  );

  useEffect(() => {
    if (!project) return;

    // 1. Initialize from project config if present, or fallback
    setVideoAspectRatio(project.aspectRatio || "16/9");

    // 2. Dynamically detect exact video aspect ratio from Vimeo oEmbed API
    if (project.vimeoId) {
      const cleanVimeoId = project.vimeoId.split("?")[0];
      const controller = new AbortController();

      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${cleanVimeoId}`, {
        signal: controller.signal,
      })
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error("oEmbed failed");
        })
        .then((data) => {
          if (data && data.width && data.height) {
            setVideoAspectRatio(`${data.width}/${data.height}`);
          }
        })
        .catch(() => {
          // Keep current/configured aspect ratio on error or offline
        });

      return () => controller.abort();
    }
  }, [project?.vimeoId, project?.aspectRatio, slug]);

  // 3. Listen to Vimeo Player iframe postMessage for real-time dimension resolution
  useEffect(() => {
    const handleVimeoMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data && data.event === "ready" && data.data) {
          if (data.data.width && data.data.height) {
            setVideoAspectRatio(`${data.data.width}/${data.data.height}`);
          }
        }
      } catch {
        // Non-JSON message from external scripts
      }
    };

    window.addEventListener("message", handleVimeoMessage);
    return () => window.removeEventListener("message", handleVimeoMessage);
  }, []);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

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
        {/* Back Link */}
        <div data-reveal className="mb-6 sm:mb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-subtle hover:text-brand-foreground transition-colors group"
          >
            <ArrowLeft className="size-4" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* 1. Project Header */}
        <section data-reveal className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-foreground">
                {project.title}
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-brand-subtle font-normal">
                {project.subtitle}
              </p>
            </div>

            {/* Top Action Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-xs sm:text-[13px] font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors duration-150 shadow-xs border-0"
              >
                <span>Behance Project</span>
                <ExternalLink className="size-3.5" />
              </a>

              <a
                href={project.vimeoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-xs sm:text-[13px] font-medium text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors duration-150 shadow-xs border-0"
              >
                <span>Watch on Vimeo</span>
                <ExternalLink className="size-3.5" />
              </a>

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share Project Link"
                className="group relative inline-flex size-9 sm:size-10 items-center justify-center rounded-full bg-brand-muted text-brand-foreground hover:bg-brand-panel hover:text-brand-panel-foreground transition-colors duration-150 cursor-pointer shadow-xs border-0 shrink-0"
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

          {/* Metadata & Award Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-foreground/10">
            {/* Tag List */}
            <ul className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-[13px] text-brand-subtle">
              {project.tags.map((tag, idx) => (
                <li key={tag} className="flex items-center gap-2">
                  {idx > 0 && <span className="size-1 rounded-full bg-brand-subtle/50" />}
                  <span>{tag}</span>
                </li>
              ))}
            </ul>

            {/* Award Badge */}
            {project.award && (
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-muted text-brand-foreground px-3.5 py-1 text-xs font-semibold shadow-xs border-0">
                <Trophy className="size-3.5 text-amber-500" />
                <span>{project.award}</span>
              </div>
            )}
          </div>
        </section>

        {/* 2. Direct Vimeo Video Player Container (Dynamic Responsive Aspect Ratio) */}
        <section data-reveal data-reveal-delay="100" className="mt-8 overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-2xl border-0">
          <div
            className="w-full overflow-hidden transition-[aspect-ratio] duration-300 ease-out"
            style={{ aspectRatio: videoAspectRatio }}
          >
            <iframe
              title={`${project.title} Film · Vimeo Player`}
              src={
                project.vimeoId.includes("?")
                  ? `https://player.vimeo.com/video/${project.vimeoId}&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`
                  : `https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`
              }
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <DotDivider />

        {/* 3. The Brief & Narrative Overview */}
        <section data-reveal className="py-6 sm:py-8">
          <div className="max-w-4xl flex flex-col gap-4">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-foreground">
              {project.brief.title}
            </h2>
            {project.brief.description.map((para, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed text-brand-subtle font-normal">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* 4. Mixed Visual & Video Story Blocks */}
        {project.sections.map((sec, idx) => (
          <React.Fragment key={idx}>
            {sec.heading && (
              <div data-reveal className="pt-8 pb-4 max-w-3xl">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-brand-foreground">
                  {sec.heading}
                </h3>
                {sec.copy && (
                  <p className="mt-2 text-base leading-relaxed text-brand-subtle font-normal">
                    {sec.copy}
                  </p>
                )}
              </div>
            )}

            {/* Layout Type: Two Column Images */}
            {sec.layout === "two-column-images" && sec.images && (
              <div data-reveal data-reveal-delay="100" className="mt-4 grid gap-4 sm:gap-6 md:grid-cols-2">
                {sec.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-sm border-0"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Layout Type: Single Looping Video */}
            {sec.layout === "single-video" && (
              <div data-reveal data-reveal-delay="100" className="mt-6 overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-lg border-0">
                <div className="aspect-[16/9] w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={sec.videoPoster}
                    className="h-full w-full object-cover"
                  >
                    <source src={sec.videoSrc || "/assets/render-loop.mp4"} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}

        <DotDivider />

        {/* 5. Dual Section: Structured Credits + Next Project Card */}
        <section data-reveal className="py-8 sm:py-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left: Credits Table & External Links */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-foreground mb-6">
                  Credits
                </h3>

                <ul className="divide-y divide-brand-foreground/10">
                  {project.credits.map((c) => (
                    <li key={c.role} className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium sm:w-1/3">
                        {c.role}
                      </span>
                      <span className="font-display text-sm sm:text-base font-medium text-brand-foreground sm:w-2/3 sm:text-right">
                        {c.names.join(", ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons below credits */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-brand-foreground/10">
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand-panel text-brand-panel-foreground px-6 py-3 text-xs sm:text-sm font-medium shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 border-0"
                >
                  <span>View on Behance</span>
                  <ExternalLink className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={project.vimeoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand-muted text-brand-foreground px-6 py-3 text-xs sm:text-sm font-medium shadow-xs transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:bg-brand-panel hover:text-brand-panel-foreground hover:shadow-md active:scale-95 border-0"
                >
                  <span>Watch on Vimeo</span>
                  <ExternalLink className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right: Next Project Preview Card (Clean Borderless & Normalized Physics) */}
            <div className="lg:col-span-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-foreground mb-6">
                Next Project
              </h3>

              <Link
                to={`/work/${project.nextProject.slug}`}
                className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-3.5 sm:p-4.5 md:p-5 flex flex-col gap-4 sm:gap-5 transition-transform duration-300 ease-out hover:-translate-y-2 border-0 transform-gpu select-none cursor-pointer"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 shadow-inner">
                  <img
                    src={project.nextProject.thumbnail}
                    alt={project.nextProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex items-end justify-between gap-4 px-1 pb-1">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-subtle font-medium">
                      {project.nextProject.meta}
                    </span>
                    <h4 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-foreground">
                      {project.nextProject.title}
                    </h4>
                  </div>
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-45">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
