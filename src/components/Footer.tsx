import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/data/content";

export const Footer: React.FC = () => {
  return (
    <footer className="px-3 pb-3 pt-4 sm:pt-5 sm:px-5 sm:pb-5">
      {/* Seamless Borderless Footer Card (Matching Studio Deliverables Background) */}
      <div
        data-reveal
        className="mx-auto max-w-[1600px] rounded-2xl sm:rounded-3xl bg-brand-muted text-brand-foreground border-0 overflow-hidden shadow-sm dark:shadow-2xl transition-colors duration-300"
      >
        <div className="w-full h-full bg-black/[0.045] dark:bg-black/30">
          {/* Main Section: Headline + CTA + Navigation */}
          <div className="p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col md:flex-row md:items-start lg:items-center md:justify-between gap-8 md:gap-10 lg:gap-16">
            
            {/* Left Side: Headline, Let's Talk CTA & Clean Email Line */}
            <div className="max-w-[620px] flex flex-col gap-6">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-brand-foreground leading-[1.08]">
                Building something that needs explaining?
              </h2>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-brand-panel text-brand-panel-foreground px-7 sm:px-8 py-3 sm:py-3.5 font-display text-sm sm:text-[15px] font-medium shadow-md transition-opacity duration-200 hover:opacity-90 group select-none cursor-pointer border-0"
                >
                  <span>Let's Talk!</span>
                  <ArrowRight className="size-4" />
                </Link>

                <div className="flex items-center gap-2">
                  <span className="text-neutral-600 dark:text-brand-subtle font-mono text-xs">or</span>
                  <a
                    href="mailto:hello@pixelgridstudios.com"
                    className="font-mono text-xs sm:text-sm font-medium text-neutral-900 dark:text-brand-foreground hover:underline underline-offset-4 transition-colors"
                  >
                    hello@pixelgridstudios.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Clean Tightly Spaced Navigation Menu on Tablet & Desktop */}
            <div className="pt-6 md:pt-0 border-t border-neutral-900/35 dark:border-neutral-800 md:border-t-0 w-full md:w-auto">
              <ul className="flex flex-row flex-wrap md:flex-col items-center justify-between sm:justify-start gap-4 sm:gap-6 md:gap-1.5 lg:gap-2 md:items-end font-display text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase text-neutral-800 dark:text-brand-subtle">
                {[
                  { label: "HOME", path: "/" },
                  { label: "WORK", path: "/work" },
                  { label: "STUDIO", path: "/about" },
                  { label: "CAREERS", path: "/careers" },
                  { label: "CONTACT", path: "/contact" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-black dark:hover:text-brand-foreground transition-colors duration-150 py-0.5 inline-block border-0 leading-tight"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Signature Dot Divider Line (Subtle Grey Tone in Dark Mode) */}
          <div className="px-8 sm:px-14 lg:px-16">
            <div className="w-full h-px bg-neutral-900/35 dark:bg-neutral-800 flex justify-between items-center">
              <div className="size-1.5 rounded-full bg-neutral-900/70 dark:bg-neutral-600" />
              <div className="size-1.5 rounded-full bg-neutral-900/70 dark:bg-neutral-600" />
            </div>
          </div>

          {/* Bottom Bar: 3-Column Layout (Logo, Socials, Legal & Copyright) */}
          <div className="px-8 sm:px-14 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* 1. Left: Logo */}
            <div className="flex items-center">
              <Link to="/" aria-label="Pixel Grid Home" className="transition-opacity hover:opacity-80 border-0">
                <img
                  src="/assets/pixel-grid-logo.png"
                  alt="Pixel Grid Studios"
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain dark:invert select-none"
                />
              </Link>
            </div>

            {/* 2. Center: Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-neutral-700 hover:text-black dark:text-brand-subtle dark:hover:text-brand-foreground transition-colors border-0"
                >
                  {s.name}
                </a>
              ))}
            </div>

            {/* 3. Right: Legal Links & Copyright */}
            <div className="flex flex-col md:items-end gap-1.5 font-mono text-xs text-neutral-700 dark:text-brand-subtle text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-3 text-[11px]">
                <Link
                  to="/privacy-policy"
                  className="text-neutral-800 hover:text-black dark:text-brand-subtle dark:hover:text-brand-foreground hover:underline transition-colors border-0"
                >
                  Privacy Policy
                </Link>
                <span className="opacity-40">·</span>
                <Link
                  to="/terms-conditions"
                  className="text-neutral-800 hover:text-black dark:text-brand-subtle dark:hover:text-brand-foreground hover:underline transition-colors border-0"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
              <p className="font-normal">
                <span>Pixel Grid Studios © 2026.</span> <span>All Rights Reserved</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;