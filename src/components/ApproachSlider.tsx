import React from "react";

interface ApproachItem {
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
}

const approachItems: ApproachItem[] = [
  {
    title: "Design a Strong Visual Identity",
    copy: "From established brands to fresh beginnings, we ensure every visual element communicates clearly, feels intentional, and amplifies your identity across every touchpoint.",
    image: "/assets/chrono-morph.jpg",
    imageAlt: "Design a Strong Visual Identity — styleframe render",
  },
  {
    title: "Build to Scale",
    copy: "We engineer modular 3D design systems built for flexibility and consistency across marketing campaigns, platforms, and international broadcast formats.",
    image: "/assets/void-textiles.jpg",
    imageAlt: "Build to Scale — modular 3D simulation system",
  },
  {
    title: "Launch with Impact",
    copy: "We craft scroll-stopping motion and high-fidelity visuals that command attention, clarify technical value, and drive meaningful audience engagement.",
    image: "/assets/precision-archive.jpg",
    imageAlt: "Launch with Impact — high-end product visualization",
  },
];

export const ApproachSlider: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-brand-foreground/10">
      <div className="mb-12 sm:mb-20">
        <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-7xl text-brand-foreground">
          Our Approach
        </h2>
      </div>

      <div className="grid gap-12 lg:gap-8 lg:grid-cols-3">
        {approachItems.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-6 sm:gap-8 group">
            <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-neutral-950">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl text-brand-foreground">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-brand-subtle font-normal leading-relaxed">
                {item.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApproachSlider;
