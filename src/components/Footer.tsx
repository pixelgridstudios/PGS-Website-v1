import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/data/content";
import DotDivider from "@/components/DotDivider";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-16 sm:pt-24 mt-12">
      <div
        data-reveal
        className="w-full min-h-[70vh] rounded-t-[2rem] sm:rounded-t-[3rem] bg-brand-muted text-brand-foreground border-0 overflow-hidden shadow-2xl transition-colors duration-300 flex flex-col"
      >
        <div className="w-full h-full flex-1 bg-black/[0.045] dark:bg-black/30 flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20">
          
          {/* Top Half: Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-8 max-w-[1600px] mx-auto w-full">
            {/* Left: Headline & CTA */}
            <div className="flex flex-col gap-8 sm:gap-10 max-w-[720px]">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-brand-foreground leading-[1.05]">
                Got a complex product? Let's make it look like magic.
              </h2>
              
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-brand-panel text-brand-panel-foreground px-8 py-4 font-display text-base font-semibold shadow-md transition-all duration-[400ms] hover:-translate-y-1 hover:scale-[1.03] active:scale-95 border-0"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="flex items-center gap-3">
                  <span className="text-neutral-500 dark:text-brand-subtle font-mono text-sm uppercase tracking-widest">or email us</span>
                  <a
                    href="mailto:hello@pixelgridstudios.com"
                    className="font-display text-base sm:text-lg font-semibold text-neutral-950 dark:text-brand-foreground hover:opacity-70 transition-opacity"
                  >
                    hello@pixelgridstudios.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Navigation */}
            <div className="flex lg:justify-end">
              <ul className="flex flex-col gap-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight uppercase text-neutral-950 dark:text-brand-foreground">
                {[
                  { label: "Home", path: "/" },
                  { label: "Work", path: "/work" },
                  { label: "Studio", path: "/about" },
                  { label: "Careers", path: "/careers" },
                  { label: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:opacity-50 transition-opacity duration-200 inline-block border-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Half: Massive Logo & Sub-footer */}
          <div className="mt-16 sm:mt-24 w-full max-w-[1600px] mx-auto flex flex-col gap-8">
            
            {/* Massive Logo */}
            <div className="w-full flex items-center justify-start border-b border-neutral-900/10 dark:border-white/10 pb-10">
              <Link to="/" className="transition-opacity hover:opacity-80 border-0">
                <img
                  src="/assets/pixel-grid-logo.png"
                  alt="Pixel Grid Studios"
                  className="h-16 sm:h-24 md:h-32 lg:h-40 w-auto object-contain dark:invert select-none"
                />
              </Link>
            </div>

            {/* Sub-footer: Socials & Legal */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-sm">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-8">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold uppercase tracking-widest text-neutral-900 hover:opacity-50 dark:text-brand-foreground transition-opacity border-0"
                  >
                    {s.name}
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-neutral-600 dark:text-brand-subtle text-center">
                <div className="flex gap-6">
                  <Link to="/privacy-policy" className="hover:text-neutral-900 dark:hover:text-brand-foreground transition-colors border-0">Privacy Policy</Link>
                  <Link to="/terms-conditions" className="hover:text-neutral-900 dark:hover:text-brand-foreground transition-colors border-0">Terms</Link>
                </div>
                <span>© 2026 Pixel Grid Studios. All Rights Reserved.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
