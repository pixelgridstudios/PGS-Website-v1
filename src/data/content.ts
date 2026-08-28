export interface Project {
  id: string;
  title: string;
  meta?: string;
  tags?: string[];
  image: string;
  width?: number;
  height?: number;
  featured?: boolean;
}

export interface ApproachItem {
  title: string;
  copy: string;
}

export interface WorkflowStage {
  title: string;
  items: string[];
}

export interface ServiceItem {
  title: string;
  copy: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const highlightedProjects: Project[] = [
  {
    id: "xiaomi-redmi-note-12",
    title: "Xiaomi Redmi Note 12",
    image: "/assets/chrono-morph-Db8Qrzc2.jpg",
    width: 1200,
    height: 800,
    tags: ["Product Launch", "3D Animation"],
  },
  {
    id: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    image: "/assets/void-textiles-DxX08qfd.jpg",
    width: 1200,
    height: 800,
    tags: ["Brand Film", "Product System"],
  },
];

export const allProjects: Project[] = [
  {
    id: "xiaomi-redmi-note-12",
    title: "Xiaomi Redmi Note 12",
    meta: "Product Launch · 3D Animation",
    image: "/assets/chrono-morph-Db8Qrzc2.jpg",
  },
  {
    id: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    meta: "Brand Film · Product System",
    image: "/assets/void-textiles-DxX08qfd.jpg",
  },
  {
    id: "yas-mall",
    title: "Yas Mall",
    meta: "Spatial Canvas · Immersive 3D",
    image: "/assets/precision-archive-D1t0VcXE.jpg",
  },
  {
    id: "boat",
    title: "Boat",
    meta: "Product Motion · Short-form",
    image: "/assets/chrono-morph-Db8Qrzc2.jpg",
  },
];

export const approachItems: ApproachItem[] = [
  {
    title: "Craft first, ego last.",
    copy: "No bloat, no layers of middle management. Just a tight crew of absolute 3D nerds making ridiculously good art on supercomputers.",
  },
  {
    title: "Zero bureaucracy.",
    copy: "Skip the red tape and endless zoom calls. You'll work directly with our founder to make decisions fast and keep the creative juice flowing.",
  },
  {
    title: "The A-Team model.",
    copy: "We don't keep people on standby. When you bring us a brief, we assemble a custom dream-team of freelance specialists just for your project.",
  },
];

export const workflowStages: WorkflowStage[] = [
  {
    title: "Let's figure this out",
    items: [
      "We sit down (virtually) and geek out over your product",
      "Vibes, moodboards, and exploring the visual direction",
      "A solid game plan for the whole project",
    ],
  },
  {
    title: "Making it look pretty",
    items: [
      "Designing super-crisp 3D styleframes",
      "Color, texture, and lighting tests",
      "A sneak peek of exactly how gorgeous the final video will look",
    ],
  },
  {
    title: "Making it move",
    items: [
      "Rough motion tests (so we know it works)",
      "Smooth camera swoops and dynamic framing",
      "The actual high-fidelity 3D animation",
    ],
  },
  {
    title: "The glossy details",
    items: [
      "Hyper-realistic lighting and shadow passes",
      "Delicious textures and material details",
      "Custom sound effects that actually slap",
    ],
  },
  {
    title: "Tweaks & Polish",
    items: [
      "Your honest, no-filter feedback",
      "A few pixel-perfect tweaks and timing adjustments",
      "The final, beautiful layer of polish",
    ],
  },
  {
    title: "Wrap it up",
    items: [
      "Videos ready for literally any screen or platform",
      "A neat little package with everything you need",
    ],
  },
];

export const motionServices: ServiceItem[] = [
  {
    title: "Product Launch Films",
    copy: "Launch films that explain what a new product does and why it matters with cinematic precision.",
  },
  {
    title: "Brand & Real Estate Films",
    copy: "Narrative films for brands and developments, from concept and script through final grade.",
  },
  {
    title: "3D Product Visualization",
    copy: "Accurate 3D renders and animations of products and systems, including parts that are hard to film.",
  },
  {
    title: "Live Visuals & Stage Content",
    copy: "Screen content and looping visuals for events, activations and retail environments.",
  },
  {
    title: "Commercial & Digital Motion",
    copy: "Campaign assets produced for leading brands, adapted per market and channel.",
  },
  {
    title: "Short-form & Social Motion",
    copy: "Vertical cutdowns and social-first motion built from the same 3D and design system.",
  },
];

export const toolsAndCraft: string[] = [
  "3D Animation",
  "Kinematic Pacing",
  "Motion Design",
  "3D Visualization",
  "Brand Film",
];

export const studioStats: StatItem[] = [
  { value: "2020", label: "Founded" },
  { value: "10+", label: "Yas Mall campaigns" },
  { value: "6+", label: "Boat campaigns" },
  { value: "100%", label: "Global client delivery" },
];

export const socialLinks = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "X", href: "https://x.com" },
  { name: "Vimeo", href: "https://vimeo.com" },
  { name: "Behance", href: "https://behance.net" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export const projectTypes = [
  "Product Launch Film",
  "Brand Film",
  "3D Visualization",
  "Live Visuals",
  "Social & Digital Motion",
];