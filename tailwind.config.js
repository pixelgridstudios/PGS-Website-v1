/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--brand-bg)",
          muted: "var(--brand-muted)",
          border: "var(--brand-border)",
          foreground: "var(--brand-foreground)",
          subtle: "var(--brand-subtle)",
          panel: "var(--brand-panel)",
          "panel-foreground": "var(--brand-panel-foreground)",
          accent: "var(--brand-accent)",
          "accent-foreground": "var(--brand-accent-foreground)",
        },
      },
      fontFamily: {
        sans: ["'Outfit'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["'Outfit'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["'Lora'", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        mono: ["'Outfit'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
      transitionTimingFunction: {
        'spring-vibe': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring-soft': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
};