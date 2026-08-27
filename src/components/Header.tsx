import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  const toggleClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5 pointer-events-none">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        {/* Left: Emblem Logo Only (Fixed Height Container to prevent layout shift) */}
        <div className="pointer-events-auto flex h-9 sm:h-10 items-center">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center transition-opacity duration-200 hover:opacity-75"
            aria-label="Pixel Grid home"
          >
            <img
              src="/assets/pg-emblem.png"
              alt="Pixel Grid"
              className="h-[26px] w-auto sm:h-[28px] dark:invert object-contain select-none shrink-0"
            />
          </Link>
        </div>

        {/* Right: Theme Toggle + Contact Pill + Floating Dropdown (50% Frosted Glass Styling) */}
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          {/* Light / Dark Mode Toggle Button (Frosted 50% White Glass) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-white/50 backdrop-blur-xl hover:bg-white/75 dark:bg-white/10 dark:hover:bg-white/20 text-black dark:text-white shadow-sm transition-colors duration-200 cursor-pointer select-none border-0 shrink-0"
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-amber-300" />
            ) : (
              <Moon className="size-4 text-neutral-800" />
            )}
          </button>

          {/* Contact Pill (Solid High Contrast) */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="group inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-full bg-black px-4 sm:px-5 text-[12px] sm:text-[13px] font-medium uppercase tracking-wider text-white shadow-sm transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 select-none border-0 shrink-0"
          >
            <span>CONTACT</span>
            <span className="w-3.5 flex items-center justify-center shrink-0">
              <ArrowRight className="size-3.5" />
            </span>
          </Link>

          {/* Menu Wrapper */}
          <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Menu Trigger Button (Frosted 50% White Glass) */}
            <button
              type="button"
              onClick={toggleClick}
              className="flex h-9 sm:h-10 items-center justify-center gap-2 rounded-full bg-white/50 backdrop-blur-xl hover:bg-white/75 dark:bg-white/10 dark:hover:bg-white/20 px-3.5 sm:px-4 text-[12px] sm:text-[13px] font-medium uppercase tracking-wider text-black dark:text-white shadow-sm transition-colors duration-200 cursor-pointer select-none border-0 shrink-0"
              aria-expanded={isOpen}
            >
              <span>MENU</span>
              <span
                className={`size-1.5 rounded-full bg-black dark:bg-white transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>

            {/* Floating Dropdown (Heavy Frosted Blur & 80% White) */}
            <div
              className={`absolute top-full right-0 mt-2.5 w-48 sm:w-52 overflow-hidden rounded-2xl bg-white/80 backdrop-blur-2xl p-1.5 shadow-2xl transition-all duration-200 ease-out origin-top-right z-50 dark:bg-neutral-900/90 border-0 ${
                isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col gap-1">
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
                      onClick={() => setIsOpen(false)}
                      className="flex w-full items-center justify-start rounded-xl px-4 py-2.5 font-display text-[13px] font-medium tracking-wider uppercase text-neutral-800 hover:bg-black/5 hover:text-black dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-150 border-0 select-none cursor-pointer"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;