import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/animations/FadeIn";

const highlightedProjects = [
  {
    slug: "thinking-architecture",
    title: "Thinking Architecture",
    image: "/assets/chrono-morph.jpg",
    aspect: "aspect-[16/9]",
  },
  {
    slug: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    image: "/assets/void-textiles.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    slug: "precision-systems",
    title: "Precision Systems",
    image: "/assets/precision-archive.jpg",
    aspect: "aspect-[16/9]",
  },
  {
    slug: "product-launch",
    title: "Verve",
    image: "/assets/showreel-card.jpg",
    aspect: "aspect-[4/3]",
  }
];

export const Home: React.FC = () => {
  return (
    <div className="bg-brand-bg text-brand-foreground min-h-screen font-sans selection:bg-brand-foreground selection:text-brand-bg">
      {/* 1. Splash Video (No Text) */}
      <section className="-mt-20 relative w-full h-[100svh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-105"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      </section>

      {/* 2. Massive Statement Text */}
      <section className="w-full px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn delay={0.1}>
            <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-[5vw] leading-[1.1] font-normal tracking-tight">
              Pixel Grid is a global creative studio. We use design, animation, and technology to tell transformational stories for the world's leading organizations.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* 3. Asymmetric Work Grid */}
      <section className="w-full px-4 sm:px-8 pb-32">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Project 1 - Large */}
            <div className="lg:col-span-8 lg:mt-24">
              <FadeIn delay={0.1} className="h-full">
                <Link to={`/work/${highlightedProjects[0].slug}`} className="block group">
                  <div className={`relative w-full overflow-hidden ${highlightedProjects[0].aspect}`}>
                    <img src={highlightedProjects[0].image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex justify-between items-center text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{highlightedProjects[0].title}</span>
                  </div>
                </Link>
              </FadeIn>
            </div>

            {/* Project 2 - Portrait */}
            <div className="lg:col-span-4">
              <FadeIn delay={0.2} className="h-full">
                <Link to={`/work/${highlightedProjects[1].slug}`} className="block group">
                  <div className={`relative w-full overflow-hidden ${highlightedProjects[1].aspect}`}>
                    <img src={highlightedProjects[1].image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex justify-between items-center text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{highlightedProjects[1].title}</span>
                  </div>
                </Link>
              </FadeIn>
            </div>

            {/* Project 3 - Landscape */}
            <div className="lg:col-span-6 lg:mt-32">
              <FadeIn delay={0.1} className="h-full">
                <Link to={`/work/${highlightedProjects[2].slug}`} className="block group">
                  <div className={`relative w-full overflow-hidden ${highlightedProjects[2].aspect}`}>
                    <img src={highlightedProjects[2].image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex justify-between items-center text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{highlightedProjects[2].title}</span>
                  </div>
                </Link>
              </FadeIn>
            </div>

            {/* Project 4 - Offset Landscape */}
            <div className="lg:col-span-6 lg:mt-12 lg:ml-12">
              <FadeIn delay={0.2} className="h-full">
                <Link to={`/work/${highlightedProjects[3].slug}`} className="block group">
                  <div className={`relative w-full overflow-hidden ${highlightedProjects[3].aspect}`}>
                    <img src={highlightedProjects[3].image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex justify-between items-center text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{highlightedProjects[3].title}</span>
                  </div>
                </Link>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
