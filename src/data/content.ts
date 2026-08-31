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
    id: "thinking-architecture",
    title: "Thinking Architecture",
    image: "/assets/chrono-morph.jpg",
    width: 1200,
    height: 800,
    tags: ["Brand Film", "Architectural CGI"],
  },
  {
    id: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    image: "/assets/void-textiles.jpg",
    width: 1200,
    height: 800,
    tags: ["Brand Film", "Smart System"],
  },
];

export const allProjects: Project[] = [
  {
    id: "thinking-architecture",
    title: "Thinking Architecture",
    meta: "Brand Film · Architectural CGI",
    image: "/assets/chrono-morph.jpg",
  },
  {
    id: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    meta: "Brand Film · Smart System",
    image: "/assets/void-textiles.jpg",
  },
  {
    id: "raymond-invictus",
    title: "Invictus by Raymond Realty",
    meta: "Brand Film · Architectural CGI",
    image: "/assets/precision-archive.jpg",
  },
  {
    id: "realme-x-kyra",
    title: "Realme X Kyra",
    meta: "Product Launch · 3D CGI",
    image: "/assets/chrono-morph.jpg",
  },
];

export const approachItems: ApproachItem[] = [
  {
    title: "Design a Strong Visual Identity",
    copy: "From established brands to fresh beginnings, we make sure every visual element communicates clearly, feels considered, and amplifies your identity. We focus on clarity and character, so your brand resonates wherever it appears.",
  },
  {
    title: "Build to Scale",
    copy: "We approach every project with a design system in mind, built for flexibility and scalability across campaigns, platforms, and applications. Each system is modular, forming a foundation that can grow, adapt, and support the brand over time.",
  },
  {
    title: "Launch with Impact",
    copy: "From strategy to execution, we deliver work that captures attention and communicates the idea clearly. Coupled with proven results, our work drives high engagement, generates views, and creates scroll-stopping moments.",
  },
];

export const workflowStages: WorkflowStage[] = [
  {
    title: "Discovery & Strategy",
    items: [
      "Strategy session to explore your objectives",
      "Research your brand, industry, and target audience",
      "Develop a clear roadmap for the project",
    ],
  },
  {
    title: "Concept & Storytelling",
    items: [
      "Scriptwriting (if necessary)",
      "Storyboarding to visualize the flow",
      "Style frames to define the visual direction",
    ],
  },
  {
    title: "Design & Art Direction",
    items: [
      "Moodboards and style development",
      "Color palette, typography, and overall aesthetic",
      "Custom illustrations, 3D models, or motion graphics",
    ],
  },
  {
    title: "Animation & Motion Design",
    items: [
      "Keyframe animation & fluid motion design",
      "3D rendering and compositing (if applicable)",
      "Sound design & music selection for maximum impact",
    ],
  },
  {
    title: "Feedback & Refinements",
    items: [
      "Review and revisions based on your input",
      "Edit adjustments to timing, pacing, or transitions",
      "Final quality checks before delivery",
    ],
  },
  {
    title: "Delivery & Implementation",
    items: [
      "Optimized exports for all channels & resolutions",
      "Final delivery package with usage guidelines",
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
  { value: "4+", label: "Master Case Studies" },
  { value: "50+", label: "Commercial Deliverables" },
  { value: "100%", label: "Global Client Delivery" },
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