import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Plus, Minus } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Motion Graphics",
    tagline: "Our foundation.",
    desc: "We design and animate visuals that help brands communicate with clarity and character. From campaign assets to full visual systems, we focus on movement that feels intentional, refined, and built to last."
  },
  {
    id: "02",
    title: "3D Design",
    tagline: "Handcrafted depth.",
    desc: "3D allows us to move past a flat frame. We build objects and environments by hand. Every material, every detail, exists to support the design and vision. This is how we add depth to a brand's world."
  },
  {
    id: "03",
    title: "Brand Systems",
    tagline: "Built to scale.",
    desc: "Instead of creating isolated pieces, we build structured visual systems. A foundation that enables multiple videos, renders, and applications to live together. Consistent, flexible, and designed to grow with the brand."
  },
  {
    id: "04",
    title: "Tailored Work",
    tagline: "Custom by design.",
    desc: "Every brand is different, and so is every collaboration. We work closely with our clients, thinking alongside them and refining solutions that respond directly to their goals. Flexible in execution, consistent in quality."
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
  const [openService, setOpenService] = useState<string>("01");

  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1600px] py-8 sm:py-12 space-y-16 lg:space-y-32">
        
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

        {/* Services Section (Dot4 Inspired Interactive Accordion/List) */}
        <section data-reveal className="flex flex-col gap-10">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-brand-foreground" style={{ fontVariationSettings: "'wght' 700" }}>
              Services
            </h2>
            <p className="mt-4 text-brand-subtle text-lg">
              Our combined skills offer a vast amount of services within the field of digital art and motion graphics.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-start">
            {/* Left: Interactive List */}
            <div className="flex flex-col w-full gap-2">
              {services.map((service) => {
                const isOpen = openService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setOpenService(service.id)}
                    className="group text-left border-b border-brand-border/40 py-6 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl sm:text-3xl transition-colors duration-300 text-brand-foreground" style={{ fontVariationSettings: "'wght' 600" }}>
                        {service.title}
                      </h3>
                      <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? "bg-brand-foreground text-brand-bg" : "bg-brand-muted text-brand-foreground group-hover:bg-brand-panel group-hover:text-brand-panel-foreground"}`}>
                        {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                      </div>
                    </div>
                    {/* Mobile Only Desc Dropdown */}
                    <div className={`grid transition-all duration-[400ms] ease-spring-vibe lg:hidden ${isOpen ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="text-brand-foreground font-medium mb-3">{service.tagline}</p>
                        <p className="text-brand-subtle text-base leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Desktop Desc Display */}
            <div className="hidden lg:block sticky top-32 rounded-3xl bg-brand-muted p-10 xl:p-14 border-0">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`absolute inset-10 xl:inset-14 transition-all duration-500 ${openService === service.id ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}`}
                >
                  <p className="font-display text-2xl text-brand-foreground font-bold mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-lg xl:text-xl text-brand-subtle leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
              {/* Invisible spacer to maintain height */}
              <div className="invisible pointer-events-none">
                <p className="font-display text-2xl mb-6">Spacer Tagline</p>
                <p className="text-lg xl:text-xl leading-relaxed">
                  Instead of creating isolated pieces, we build structured visual systems. A foundation that enables multiple videos, renders, and applications to live together. Consistent, flexible, and designed to grow with the brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Box (Seamless Borderless) */}
        <section data-reveal className="rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground p-8 sm:p-12 shadow-sm dark:shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border-0 mb-12">
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
