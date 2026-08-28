import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import DotDivider from "@/components/DotDivider";

const disciplines = [
  "3D CGI & Product Animation",
  "Brand Films & Narrative Storytelling",
  "Physical & Procedural Shading",
  "Mechanical Explosions & CAD Visualization",
  "Experiential & 8K Giant LED Displays",
  "Title Sequences & In-Show Screen Graphics",
];

const studioPrinciples = [
  {
    num: "01",
    title: "Founder-Led From Start to Finish",
    desc: "No account managers or junior buffers. You collaborate directly with Subhanshu Gajbhiye, ensuring swift decisions, pure creative vision, and uncompromising craft.",
  },
  {
    num: "02",
    title: "Curated Specialist Teams",
    desc: "Rather than billing for unused agency overhead, we assemble bespoke teams of world-class 3D animators, sound designers, and technical artists tailored to each brief.",
  },
  {
    num: "03",
    title: "Clarity Over Complexity",
    desc: "Whether visualizing an IoT ecosystem or an exploded macro camera lens, our goal is instant comprehension and lasting emotional resonance.",
  },
];

export const About: React.FC = () => {
  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] py-8 sm:py-12">
        {/* Page Header */}
        <section data-reveal className="flex flex-col gap-4 max-w-4xl">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-foreground leading-[1.05]">
            We make ridiculously good 3D animations for products people actually care about.
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-brand-subtle font-normal leading-relaxed">
            Founded in 2020 by Subhanshu Gajbhiye, we take complex engineering and technical specs and turn them into visual magic that audiences immediately understand (and love).
          </p>
        </section>

        <DotDivider />

        {/* 2-Column: Founder Card & Core Principles */}
        <section className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Founder Bio Card (Seamless Borderless) */}
          <div data-reveal data-reveal-delay="100" className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-8 sm:p-10 shadow-sm dark:shadow-xl flex flex-col gap-6 border-0">
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-2xl bg-brand-panel text-brand-panel-foreground flex items-center justify-center font-display text-2xl font-bold shadow-sm">
                SG
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-foreground">
                  Subhanshu Gajbhiye
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium">
                  Founder & Creative Director
                </span>
              </div>
            </div>

            <p className="text-base leading-relaxed text-brand-subtle font-normal">
              With deep expertise in 3D design, simulation, and motion direction, Subhanshu has directed and produced commercial campaigns for leading technology brands, alongside in-show screen design for landmark Netflix series.
            </p>

            <div className="pt-4 border-t border-brand-foreground/10 flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium">
                Core Disciplines
              </span>
              <ul className="space-y-2">
                {disciplines.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-sm text-brand-foreground font-medium">
                    <CheckCircle2 className="size-4 text-brand-foreground shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-6 py-3.5 font-display text-sm font-medium shadow-md transition-opacity duration-150 hover:opacity-90 border-0"
              >
                <span>Work with Subhanshu</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Principles Stack (Seamless Borderless) */}
          <div data-reveal data-reveal-delay="200" className="lg:col-span-7 flex flex-col gap-5">
            {studioPrinciples.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-6 sm:p-8 shadow-xs hover:shadow-md transition-colors duration-200 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-0"
              >
                <span className="font-mono text-2xl sm:text-3xl font-bold text-brand-foreground shrink-0">
                  {p.num}
                </span>
                <div className="flex flex-col gap-2">
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-brand-foreground">
                    {p.title}
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-brand-subtle font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <DotDivider />

        {/* Bottom CTA Box (Seamless Borderless) */}
        <section data-reveal className="rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-8 sm:p-12 shadow-sm dark:shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border-0">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-subtle font-medium mb-2">
              <Sparkles className="size-4 text-brand-foreground" />
              <span>Let's Create Together</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-brand-foreground">
              Ready to bring your next product launch to life?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-8 py-4 font-display text-sm font-medium shadow-md transition-opacity duration-150 hover:opacity-90 shrink-0 border-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="size-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
