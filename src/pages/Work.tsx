import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { projects } from "@/data/projects";
import DotDivider from "@/components/DotDivider";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

export const Work: React.FC = () => {
  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] py-8 sm:py-12">
        {/* Page Heading & Top Row with Watch Showreel Action */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <TextReveal
                text="Our Work"
                className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-8xl text-brand-foreground"
              />
              <FadeIn delay={0.2} direction="up" className="max-w-2xl text-base sm:text-lg text-brand-subtle font-normal">
                Selected commercial films, 3D visualization, product animation, and motion design built for leading brands and technology pioneers.
              </FadeIn>
            </div>

            {/* Direct Link to Dedicated Showreel Page */}
            <FadeIn delay={0.3} direction="left">
              <Link
                to="/showreel"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-panel px-6 py-3 text-sm sm:text-base font-medium text-brand-panel-foreground shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 select-none"
              >
                <Play className="size-3.5 fill-current" />
                <span>Watch Studio Showreel</span>
                <ArrowRight className="size-3.5 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>

        <DotDivider />

        {/* 2-Column Project Grid: Preserves Grey Hierarchy across Modes */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={0.1 + (idx * 0.1)} className="h-full">
              <Link
                to={`/work/${project.slug}`}
                className="block h-full group overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-3.5 sm:p-4.5 md:p-5 flex flex-col gap-4 sm:gap-5 transition-transform duration-300 ease-out hover:-translate-y-2 border-0 transform-gpu select-none cursor-pointer"
              >
                {/* 16:9 Aspect Video Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 shadow-inner">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} — project by Pixel Grid Studios`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Bottom Card Meta & Tags */}
                <div className="flex items-end justify-between gap-4 px-1 pb-1">
                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-tight sm:text-4xl text-brand-foreground">
                      {project.title}
                    </h2>
                    <ul className="mt-2 flex flex-wrap items-center gap-2 font-mono text-sm uppercase tracking-wider text-brand-subtle font-medium">
                      <li>{project.category}</li>
                      <li className="size-1 rounded-full bg-brand-subtle/50" />
                      <li>{project.year}</li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md transition-transform duration-300 ease-out group-hover:-rotate-45">
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
