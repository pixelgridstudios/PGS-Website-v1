import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { projects } from "@/data/projects";
import DotDivider from "@/components/DotDivider";

const filterCategories = [
  "All",
  "Product Animation",
  "Brand Design",
  "Event Visuals",
  "Product Motion",
  "Motion Design",
];

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] py-8 sm:py-12">
        {/* Page Heading & Top Row with Watch Showreel Action */}
        <div data-reveal className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-brand-foreground">
                Our Work
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-brand-subtle font-normal">
                Selected commercial films, 3D visualization, product animation, and motion design built for leading brands and technology pioneers.
              </p>
            </div>

            {/* Direct Link to Dedicated Showreel Page */}
            <div>
              <Link
                to="/showreel"
                className="inline-flex items-center gap-2.5 rounded-full bg-brand-panel px-6 py-3 text-xs sm:text-sm font-medium text-brand-panel-foreground shadow-md transition-opacity duration-200 hover:opacity-90 group select-none"
              >
                <Play className="size-3.5 fill-current" />
                <span>Watch Studio Showreel</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Filter Pills */}
          <div data-reveal data-reveal-delay="100" className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            {filterCategories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-[13px] font-medium tracking-normal transition-colors duration-150 cursor-pointer select-none whitespace-nowrap border ${
                    isSelected
                      ? "border-brand-foreground bg-brand-foreground text-brand-bg font-semibold"
                      : "border-brand-border bg-brand-bg text-brand-subtle hover:text-brand-foreground hover:border-brand-foreground/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <DotDivider />

        {/* 2-Column Project Grid: Preserves Grey Hierarchy across Modes */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              data-reveal
              data-reveal-delay={idx % 2 === 0 ? "100" : "200"}
              className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-3.5 sm:p-4.5 md:p-5 flex flex-col gap-4 sm:gap-5 shadow-sm hover:shadow-xl dark:shadow-2xl transition-colors duration-200 border-0"
            >
              {/* 16:9 Aspect Video Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 shadow-inner">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} — project by Pixel Grid Studios`}
                  className="h-full w-full object-cover ease-out"
                />
              </div>

              {/* Bottom Card Meta & Tags */}
              <div className="flex items-end justify-between gap-4 px-1 pb-1">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-brand-foreground">
                    {project.title}
                  </h2>
                  <ul className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-brand-subtle font-medium">
                    <li>{project.category}</li>
                    <li className="size-1 rounded-full bg-brand-subtle/50" />
                    <li>{project.year}</li>
                  </ul>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-panel text-brand-panel-foreground shadow-md transition-colors duration-200">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
