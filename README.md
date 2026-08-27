# Pixel Grid Studios â€” Frontend Application

Clean, modular React + TypeScript + Vite + Tailwind CSS project reverse-engineered and reconstructed from the Lovable development prototype for **Pixel Grid Studios** (Motion Design, 3D Visualization, and Brand Film studio in Pune, India).

## ðŸš€ Quick Start

### 1. Start Development Server
Double-click `start-dev.bat` or run:
```bash
npm run dev
```
The application will be running at `http://localhost:5173`.

### 2. Build for Production
```bash
npm run build
```
The output bundle will be in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ðŸ“ Project Structure

```
pixelgrid-studios/
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ assets/              # High-res styleframes, renders, and logos
â”‚   â”‚   â”œâ”€â”€ pg-emblem.png
â”‚   â”‚   â”œâ”€â”€ chrono-morph-Db8Qrzc2.jpg
â”‚   â”‚   â”œâ”€â”€ precision-archive-D1t0VcXE.jpg
â”‚   â”‚   â””â”€â”€ void-textiles-DxX08qfd.jpg
â”‚   â””â”€â”€ favicon.png
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ Header.tsx       # Sticky navigation with active pills & contact CTA
â”‚   â”‚   â””â”€â”€ Footer.tsx       # Obsidian dark panel with live status & social links
â”‚   â”œâ”€â”€ data/
â”‚   â”‚   â””â”€â”€ content.ts       # Structured content models, projects, copy & stats
â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ Home.tsx         # Full landing page with accordions, mosaic & roadmap
â”‚   â”‚   â”œâ”€â”€ Work.tsx         # Project portfolio grid & prior credits
â”‚   â”‚   â”œâ”€â”€ About.tsx        # Studio philosophy, founder story & tools
â”‚   â”‚   â”œâ”€â”€ Contact.tsx      # Project intake form with interactive pill filters
â”‚   â”‚   â””â”€â”€ NotFound.tsx     # 404 error page
â”‚   â”œâ”€â”€ App.tsx              # Router setup with automatic scroll-to-top
â”‚   â”œâ”€â”€ index.css            # OKLCH brand design tokens & Tailwind styles
â”‚   â””â”€â”€ main.tsx             # React entrypoint
â”œâ”€â”€ index.html               # Head tags, Google Font (Outfit), SEO meta tags
â”œâ”€â”€ package.json
â”œâ”€â”€ tailwind.config.js
â”œâ”€â”€ tsconfig.json
â””â”€â”€ vite.config.ts
```

---

## ðŸŽ¨ Design System & Palette

- `--brand-bg`: `oklch(95.5% 0.003 90)` (Warm stone off-white)
- `--brand-muted`: `oklch(90.5% 0.003 90)` (Card surface)
- `--brand-border`: `oklch(86.5% 0.004 90)` (Divider)
- `--brand-foreground`: `oklch(16% 0 0)` (Charcoal black)
- `--brand-subtle`: `oklch(52% 0 0)` (Secondary text)
- `--brand-panel`: `oklch(9% 0 0)` (Obsidian black dark card)
- `--brand-panel-foreground`: `oklch(97% 0 0)` (Off-white)
- **Typography**: Google Font `Outfit` (weights 300, 400, 500, 600, 700)