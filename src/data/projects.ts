export interface ProjectSection {
  heading?: string;
  copy?: string;
  layout: "single-video" | "two-column-images" | "full-image" | "vimeo-embed";
  images?: { src: string; alt: string; caption?: string }[];
  videoSrc?: string;
  videoPoster?: string;
  vimeoId?: string;
}

export interface ProjectCreditItem {
  role: string;
  names: string[];
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  award?: string;
  behanceUrl: string;
  vimeoUrl: string;
  vimeoId: string;
  thumbnail: string;
  heroVideo?: string;
  heroVideoPoster?: string;
  brief: {
    title: string;
    description: string[];
  };
  sections: ProjectSection[];
  credits: ProjectCreditItem[];
  nextProject: {
    slug: string;
    title: string;
    meta: string;
    thumbnail: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: "01",
    slug: "xiaomi-redmi-note-12",
    title: "Xiaomi Redmi Note 12",
    subtitle: "Superpower in Motion Â· 3D Product Launch",
    client: "Xiaomi Global",
    year: "2023",
    category: "Product Animation",
    tags: ["Motion Design", "3D Animation", "Product CGI", "LookDev"],
    award: "Best of 3D Motion — Behance Curated",
    behanceUrl: "https://www.behance.net/search/projects?search=xiaomi+redmi+note+12+motion",
    vimeoUrl: "https://vimeo.com/1182784182",
    vimeoId: "1182784182",
    thumbnail: "/assets/chrono-morph.jpg",
    heroVideo: "/assets/hero-bg.mp4",
    heroVideoPoster: "/assets/chrono-morph.jpg",
    brief: {
      title: "Xiaomi Redmi Note 12 — Global Launch Film",
      description: [
        "To introduce Xiaomi's flagship Redmi Note 12 device across global digital campaigns and launch events, Pixel Grid Studios was commissioned to direct and produce the primary 3D product launch film. A high-energy sequence highlighting the architectural camera bump, 120Hz AMOLED display, and ultra-slim chassis.",
        "By developing custom procedural shader networks and physical lighting rigs, we captured the intricate light reflections on metallic and matte glass surfaces with supreme photorealism, establishing a refined visual standard for the campaign.",
      ],
    },
    sections: [
      {
        heading: "Crafting the Dynamic Silhouette",
        copy: "Every visual asset was engineered to emphasize the device's ergonomic curvature and high-precision finishes. We created exploded mechanical animations of the sensor assembly and micro-optics that would be physically impossible with standard live-action camera equipment.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-tech.jpg", alt: "Redmi Note 12 Camera Module Macro" },
          { src: "/assets/styleframe-abstract.jpg", alt: "Exploded Lens Optics Render" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/render-loop.mp4",
        videoPoster: "/assets/chrono-morph.jpg",
      },
      {
        heading: "Procedural Shading & Physical Lighting Systems",
        copy: "Achieving true-to-life reflections across curved sapphire glass required custom HDRI environments mapped to procedural noise fields. The pacing was crafted with custom optical flares and typographic badges synchronized to an energetic electronic score.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-glass.jpg", alt: "Procedural Glass Dispersion" },
          { src: "/assets/styleframe-hardware.jpg", alt: "Internal Chipset Rendering" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/breakdown-loop.mp4",
        videoPoster: "/assets/precision-archive.jpg",
      },
    ],
    credits: [
      { role: "Client", names: ["Xiaomi Global"] },
      { role: "Creative Direction", names: ["Subhanshu Gajbhiye"] },
      { role: "Production Studio", names: ["Pixel Grid Studios"] },
      { role: "3D Animation & Shading", names: ["Subhanshu Gajbhiye", "Pixel Grid Motion Team"] },
      { role: "Sound Design & Mix", names: ["Master Sound Lab"] },
      { role: "Core Disciplines", names: ["3D Animation", "LookDev", "Compositing", "Lighting"] },
    ],
    nextProject: {
      slug: "tata-power-ez-homes",
      title: "TATA Power EZ Homes",
      meta: "Brand Film Â· Smart System",
      thumbnail: "/assets/void-textiles.jpg",
    },
  },
  {
    id: "02",
    slug: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    subtitle: "Intelligent Living Ecosystem Â· Brand Film",
    client: "TATA Power",
    year: "2024",
    category: "Brand Design",
    tags: ["Brand Film", "3D Motion", "Storytelling", "Smart Systems"],
    award: "Staff Pick â€” Motion Graphics Network",
    behanceUrl: "https://www.behance.net/search/projects?search=tata+power+ez+homes",
    vimeoUrl: "https://vimeo.com/1184766383",
    vimeoId: "1184766383",
    thumbnail: "/assets/void-textiles.jpg",
    heroVideo: "/assets/breakdown-loop.mp4",
    heroVideoPoster: "/assets/void-textiles.jpg",
    brief: {
      title: "TATA Power EZ Homes â€” Visualizing Invisible Connectivity",
      description: [
        "TATA Power EZ Homes required an intuitive brand film to demonstrate how IoT home automation effortlessly manages energy consumption, climate control, and ambient lighting across residential spaces.",
        "Our team conceptualized and executed a stylized 3D architectural narrative where invisible wireless data streams and energy pathways are visualized as fluid luminous particles interacting with modern architectural interiors.",
      ],
    },
    sections: [
      {
        heading: "Translating Invisible Tech into Tangible Emotion",
        copy: "Through isometric camera angles and warm cinematic lighting, we made complex electrical automation feel warm, intuitive, and seamlessly integrated into modern family living.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-glass.jpg", alt: "Smart Switch Module Shading" },
          { src: "/assets/styleframe-tech.jpg", alt: "Luminous Energy Stream Visualization" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/hero-bg.mp4",
        videoPoster: "/assets/void-textiles.jpg",
      },
      {
        heading: "Modular Motion Architecture",
        copy: "To support multi-channel distribution across digital platforms and broadcast TV, the film was designed in a modular structure enabling 15-second cutdowns and vertical formats without losing visual cohesion.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-hardware.jpg", alt: "Smart Gateway Interface Render" },
          { src: "/assets/styleframe-abstract.jpg", alt: "Abstract Energy Distribution Map" },
        ],
      },
    ],
    credits: [
      { role: "Client", names: ["TATA Power India"] },
      { role: "Creative Direction", names: ["Subhanshu Gajbhiye"] },
      { role: "Production Studio", names: ["Pixel Grid Studios"] },
      { role: "3D Animation & Compositing", names: ["Subhanshu Gajbhiye", "Pixel Grid Core"] },
      { role: "Original Score", names: ["Resonance Audio Studio"] },
      { role: "Core Disciplines", names: ["3D Animation", "Lighting & LookDev", "Compositing"] },
    ],
    nextProject: {
      slug: "yas-mall",
      title: "Yas Mall",
      meta: "Spatial Canvas · Experiential",
      thumbnail: "/assets/precision-archive.jpg",
    },
  },
  {
    id: "03",
    slug: "yas-mall",
    title: "Yas Mall",
    subtitle: "Experiential Retail & Giant LED Motion Canvas",
    client: "Aldar Properties / Yas Mall",
    year: "2023",
    category: "Event Visuals",
    tags: ["Experiential Visuals", "LED Displays", "3D CGI", "Spatial Motion"],
    award: "Gold Award — Experiential Design Showcase",
    behanceUrl: "https://www.behance.net/search/projects?search=yas+mall+motion",
    vimeoUrl: "https://vimeo.com/1184765782",
    vimeoId: "1184765782",
    thumbnail: "/assets/precision-archive.jpg",
    heroVideo: "/assets/render-loop.mp4",
    heroVideoPoster: "/assets/precision-archive.jpg",
    brief: {
      title: "Yas Mall — Immersive Large-Scale Digital Canvases",
      description: [
        "Commissioned for Yas Mall, Pixel Grid Studios produced over 10 distinct high-resolution 3D motion animations designed specifically for colossal architectural LED columns, curved indoor displays, and atrium video walls.",
        "The project required meticulous spatial modeling to ensure visual illusions, forced-perspective 3D elements, and smooth looping ambient movements looked striking from multiple pedestrian viewpoints throughout the mall.",
      ],
    },
    sections: [
      {
        heading: "Forced-Perspective 3D & Spatial Illusions",
        copy: "We engineered custom anamorphic perspectives that break beyond the flat physical surface of the LED screens, giving visitors the dramatic illusion of floating mechanical sculptures and luminous luxury products.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-abstract.jpg", alt: "Anamorphic Screen View 01" },
          { src: "/assets/styleframe-glass.jpg", alt: "Ambient Crystal Fluid Simulation" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/breakdown-loop.mp4",
        videoPoster: "/assets/precision-archive.jpg",
      },
      {
        heading: "8K Canvas Optimization & Color Calibration",
        copy: "Delivered in ultra-wide custom aspect ratios with specific color profiles calibrated for high-nit indoor LED panels, creating vibrant contrast under heavy ambient shopping center illumination.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-tech.jpg", alt: "Ultra-wide Screen Frame" },
          { src: "/assets/styleframe-hardware.jpg", alt: "Spatial Light Breakdown" },
        ],
      },
    ],
    credits: [
      { role: "Client", names: ["Aldar Properties"] },
      { role: "Venue", names: ["Yas Mall"] },
      { role: "Creative Direction & CGI", names: ["Subhanshu Gajbhiye"] },
      { role: "Display Engineering", names: ["Pixel Grid Motion Lab"] },
      { role: "Pipeline Formats", names: ["8K Custom LED Arrays", "Curved Screen Canvases"] },
    ],
    nextProject: {
      slug: "boat-lifestyle",
      title: "boAt Lifestyle",
      meta: "Product Motion · Short-form",
      thumbnail: "/assets/chrono-morph.jpg",
    },
  },
  {
    id: "04",
    slug: "boat-lifestyle",
    title: "boAt Lifestyle",
    subtitle: "Next-Gen Audio Drivers & Acoustic Simulation",
    client: "boAt Audio India",
    year: "2023",
    category: "Product Motion",
    tags: ["Product Motion", "Acoustic Simulation", "3D CGI", "Short-Form"],
    award: "Featured on Behance Motion Graphics",
    behanceUrl: "https://www.behance.net/search/projects?search=boat+audio+3d+motion",
    vimeoUrl: "https://vimeo.com/1184766382",
    vimeoId: "1184766382",
    thumbnail: "/assets/chrono-morph.jpg",
    heroVideo: "/assets/hero-bg.mp4",
    heroVideoPoster: "/assets/chrono-morph.jpg",
    brief: {
      title: "boAt Audio — Bass Physics & Acoustic Motion Design",
      description: [
        "boAt needed a fast, high-impact motion sequence for their flagship wireless earbuds launch, focusing on the proprietary bass-boost diaphragm, water-resistant silicone sealing, and ultra-low latency gaming mode.",
        "We visualized sound waves as physical pressure ripples propagating through microscopic acoustic chambers, blending intense product lighting with tactile material textures.",
      ],
    },
    sections: [
      {
        heading: "Visualizing Acoustic Velocity",
        copy: "High-speed keyframe animation captures the rapid oscillation of the beryllium diaphragm in extreme slow motion, revealing internal engineering precision.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-hardware.jpg", alt: "Driver Diaphragm Physics" },
          { src: "/assets/styleframe-tech.jpg", alt: "Charging Case Magnetic Snap" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/render-loop.mp4",
        videoPoster: "/assets/chrono-morph.jpg",
      },
    ],
    credits: [
      { role: "Client", names: ["boAt Lifestyle India"] },
      { role: "Creative Direction", names: ["Subhanshu Gajbhiye"] },
      { role: "3D Animation", names: ["Pixel Grid Studios"] },
      { role: "Core Disciplines", names: ["3D Animation", "Acoustic Simulation", "Compositing"] },
    ],
    nextProject: {
      slug: "netflix-screens",
      title: "Netflix Original Series",
      meta: "Screen Design Â· Broadcast Motion",
      thumbnail: "/assets/void-textiles.jpg",
    },
  },
  {
    id: "05",
    slug: "netflix-screens",
    title: "Netflix Original Series Screens",
    subtitle: "In-Show UI & Motion Graphics Systems",
    client: "Netflix India / StartUp Media",
    year: "2019â€“2020",
    category: "Motion Design",
    tags: ["Screen UI Design", "Broadcast Motion", "Title Sequences", "After Effects"],
    award: "Industry Broadcast Motion Craft Recognition",
    behanceUrl: "https://www.behance.net/search/projects?search=netflix+india+motion+graphics",
    vimeoUrl: "https://vimeo.com/1184795942",
    vimeoId: "1184795942",
    thumbnail: "/assets/void-textiles.jpg",
    heroVideo: "/assets/breakdown-loop.mp4",
    heroVideoPoster: "/assets/void-textiles.jpg",
    brief: {
      title: "Netflix India Originals â€” Screen Design & Narrative In-Show Graphics",
      description: [
        "During his tenure as Motion Designer at StartUp Media (Mumbai, 2019), founder Subhanshu Gajbhiye crafted specialized in-show digital screens, user interfaces, phone animations, and motion sequences for critically acclaimed Netflix series.",
        "Featured credits include Sacred Games Season 2, The Royals, Mismatched, CTRL, Choked, and AK vs AK â€” creating authentic, diegetic screen motion that directly advanced the storylines.",
      ],
    },
    sections: [
      {
        heading: "Diegetic UI Design for High-Stakes Storytelling",
        copy: "Each screen was custom-designed to match character personas and narrative tension â€” from biometric hacking terminals to high-frequency surveillance interfaces and authentic mobile OS mockups.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-tech.jpg", alt: "Sacred Games Terminal UI" },
          { src: "/assets/styleframe-abstract.jpg", alt: "Surveillance Map Graphics" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/hero-bg.mp4",
        videoPoster: "/assets/void-textiles.jpg",
      },
    ],
    credits: [
      { role: "Production Partner", names: ["StartUp Media, Mumbai"] },
      { role: "Lead Motion Designer", names: ["Subhanshu Gajbhiye"] },
      { role: "Platform", names: ["Netflix India"] },
      { role: "Selected Series", names: ["Sacred Games S2", "The Royals", "Mismatched", "CTRL", "Choked", "AK vs AK"] },
    ],
    nextProject: {
      slug: "xiaomi-redmi-note-12",
      title: "Xiaomi Redmi Note 12",
      meta: "Product Launch Â· 3D Animation",
      thumbnail: "/assets/chrono-morph.jpg",
    },
  },
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projects.find((p) => p.slug === slug);
};