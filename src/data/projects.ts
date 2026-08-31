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
  aspectRatio?: string;
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
    slug: "thinking-architecture",
    title: "Thinking Architecture",
    subtitle: "Architectural Form & Spatial CGI · Brand Film",
    client: "Thinking Architecture",
    year: "2024",
    category: "Brand Film",
    tags: ["Architectural CGI", "Spatial Motion", "3D LookDev", "Brand Film"],
    award: "Best Architectural CGI — Curated Showcase",
    behanceUrl: "https://www.behance.net/search/projects?search=thinking+architecture+motion",
    vimeoUrl: "https://vimeo.com/1182784182",
    vimeoId: "1182784182",
    aspectRatio: "16/9",
    thumbnail: "/assets/chrono-morph.jpg",
    heroVideo: "/assets/hero-bg.mp4",
    heroVideoPoster: "/assets/chrono-morph.jpg",
    brief: {
      title: "Thinking Architecture — Sculpting Light & Materiality in Motion",
      description: [
        "Thinking Architecture required a cinematic brand film to express their design philosophy: translating structural geometry, spatial light dispersion, and material textures into living spaces.",
        "Pixel Grid Studios directed and produced a conceptual 3D narrative exploring architectural volumes from micro material textures to monumental facades with photorealistic lighting and acoustic ambiance.",
      ],
    },
    sections: [
      {
        heading: "Structural Light & Spatial Volumes",
        copy: "Every visual sequence was engineered to explore spatial proportions, raw brutalist textures, and natural sunlight evolution across architectural surfaces.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-glass.jpg", alt: "Spatial Light Dispersion Render" },
          { src: "/assets/styleframe-tech.jpg", alt: "Architectural Geometry View" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/render-loop.mp4",
        videoPoster: "/assets/chrono-morph.jpg",
      },
      {
        heading: "Procedural Shading & Physical Atmosphere",
        copy: "Through procedural concrete, stone, and glass shaders, we captured atmospheric depth and material imperfections with high-fidelity photorealism.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-hardware.jpg", alt: "Material Grain Detail" },
          { src: "/assets/styleframe-abstract.jpg", alt: "Abstract Spatial Composition" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/breakdown-loop.mp4",
        videoPoster: "/assets/precision-archive.jpg",
      },
    ],
    credits: [
      { role: "Client", names: ["Thinking Architecture"] },
      { role: "Creative Direction", names: ["Subhanshu Gajbhiye"] },
      { role: "Production Studio", names: ["Pixel Grid Studios"] },
      { role: "3D Motion & Lighting", names: ["Subhanshu Gajbhiye", "Pixel Grid Motion Team"] },
      { role: "Sound Design", names: ["Resonance Audio Lab"] },
      { role: "Core Disciplines", names: ["3D Animation", "Architectural CGI", "Spatial Lighting", "LookDev"] },
    ],
    nextProject: {
      slug: "tata-power-ez-homes",
      title: "TATA Power EZ Homes",
      meta: "Brand Film · Smart System",
      thumbnail: "/assets/void-textiles.jpg",
    },
  },
  {
    id: "02",
    slug: "tata-power-ez-homes",
    title: "TATA Power EZ Homes",
    subtitle: "Intelligent Living Ecosystem · Brand Film",
    client: "TATA Power",
    year: "2024",
    category: "Brand Design",
    tags: ["Brand Film", "3D Motion", "Storytelling", "Smart Systems"],
    award: "Staff Pick — Motion Graphics Network",
    behanceUrl: "https://www.behance.net/search/projects?search=tata+power+ez+homes",
    vimeoUrl: "https://vimeo.com/1184766383",
    vimeoId: "1184766383",
    aspectRatio: "16/9",
    thumbnail: "/assets/void-textiles.jpg",
    heroVideo: "/assets/breakdown-loop.mp4",
    heroVideoPoster: "/assets/void-textiles.jpg",
    brief: {
      title: "TATA Power EZ Homes — Visualizing Invisible Connectivity",
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
      slug: "raymond-invictus",
      title: "Invictus by Raymond Realty",
      meta: "Brand Film · Architectural CGI",
      thumbnail: "/assets/precision-archive.jpg",
    },
  },
  {
    id: "03",
    slug: "raymond-invictus",
    title: "Invictus by Raymond Realty",
    subtitle: "Luxury Living & Architectural Visualization · Campaign Film",
    client: "Raymond Realty",
    year: "2024",
    category: "Brand Film",
    tags: ["Architectural CGI", "3D Animation", "Real Estate", "LookDev"],
    award: "Featured Craft in Motion — Behance Curated",
    behanceUrl: "https://www.behance.net/gallery/233908743/Invictus-by-Raymond-Realty",
    vimeoUrl: "https://vimeo.com/1115938797/976213b4b6",
    vimeoId: "1115938797?h=976213b4b6",
    aspectRatio: "1920/800",
    thumbnail: "/assets/precision-archive.jpg",
    heroVideo: "/assets/render-loop.mp4",
    heroVideoPoster: "/assets/precision-archive.jpg",
    brief: {
      title: "Invictus by Raymond Realty — Architectural Grandeur in Motion",
      description: [
        "In collaboration with agency Minority, Pixel Grid Studios crafted the master 3D campaign film for Invictus by Raymond Realty — an iconic luxury residential landmark.",
        "Through precision architectural CGI, photorealistic lighting, and seamless dynamic camera pacing, the film captures the grandeur of the tower, elevated living spaces, and bespoke lifestyle amenities.",
      ],
    },
    sections: [
      {
        heading: "Architectural Form & Monumental Proportions",
        copy: "Every visual sequence was engineered to highlight the soaring facade, geometric balance, and spatial luxury of the development.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-abstract.jpg", alt: "Tower Facade Architectural Lighting" },
          { src: "/assets/styleframe-glass.jpg", alt: "Reflective Glass & Interior Volume" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/breakdown-loop.mp4",
        videoPoster: "/assets/precision-archive.jpg",
      },
      {
        heading: "Materiality, Lighting & Atmospheric Depth",
        copy: "Delivered with custom physical lighting rigs, daytime-to-dusk transitions, and atmospheric particles to establish a world of refined elegance.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-tech.jpg", alt: "Spatial Amenity Deck Render" },
          { src: "/assets/styleframe-hardware.jpg", alt: "Lighting & Texture Breakdown" },
        ],
      },
    ],
    credits: [
      { role: "Client", names: ["Raymond Realty"] },
      { role: "Agency", names: ["Minority"] },
      { role: "CG Supervisor", names: ["Subhanshu Gajbhiye"] },
      { role: "CG Team", names: ["Akash Sawant", "Aditya Mengulkar", "Ashish Bisht"] },
      { role: "Modeling and Texturing", names: ["Viswanathan Karunakaran"] },
      { role: "Storyboard", names: ["Krishna Kothari"] },
      { role: "CG Compositor", names: ["Subhanshu Gajbhiye"] },
      { role: "Color Grade", names: ["Akash Sawant"] },
      { role: "Sound FX", names: ["Subhanshu Gajbhiye"] },
    ],
    nextProject: {
      slug: "realme-x-kyra",
      title: "Realme X Kyra",
      meta: "Product Launch · 3D CGI",
      thumbnail: "/assets/chrono-morph.jpg",
    },
  },
  {
    id: "04",
    slug: "realme-x-kyra",
    title: "Realme X Kyra",
    subtitle: "Virtual Human & Next-Gen Smartphone CGI",
    client: "Realme",
    year: "2023",
    category: "Product Launch",
    tags: ["Product Launch", "Virtual Human", "3D Animation", "Kinetic Motion"],
    award: "Best Tech Launch Motion — Behance Curated",
    behanceUrl: "https://www.behance.net/search/projects?search=realme+kyra+motion",
    vimeoUrl: "https://vimeo.com/1184766382",
    vimeoId: "1184766382",
    aspectRatio: "16/9",
    thumbnail: "/assets/chrono-morph.jpg",
    heroVideo: "/assets/hero-bg.mp4",
    heroVideoPoster: "/assets/chrono-morph.jpg",
    brief: {
      title: "Realme X Kyra — Kinetic Cyberpunk Smartphone Reveal",
      description: [
        "In collaboration with Realme and virtual influencer Kyra, Pixel Grid Studios was commissioned to direct and execute the dynamic 3D motion launch for a futuristic youth-centric smartphone release.",
        "Blending holographic UI elements, kinetic particle collisions, and hyper-detailed device optics, the film bridges virtual human interaction with high-precision industrial hardware design.",
      ],
    },
    sections: [
      {
        heading: "Kinetic Holography & Optical Engineering",
        copy: "We developed stylized volumetric laser effects and refractive glass dispersion to highlight the futuristic camera array and high-refresh holographic display.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-hardware.jpg", alt: "Realme Camera Lens Exploded View" },
          { src: "/assets/styleframe-tech.jpg", alt: "Kinetic UI Particle Interactions" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/render-loop.mp4",
        videoPoster: "/assets/chrono-morph.jpg",
      },
    ],
    credits: [
      { role: "Client", names: ["Realme"] },
      { role: "Creative Direction", names: ["Subhanshu Gajbhiye"] },
      { role: "Production Studio", names: ["Pixel Grid Studios"] },
      { role: "3D Motion & Hologram Design", names: ["Subhanshu Gajbhiye", "Pixel Grid Team"] },
      { role: "Sound Design", names: ["Pulse Audio Studio"] },
      { role: "Core Disciplines", names: ["3D Animation", "Holographic Motion", "Lighting", "Compositing"] },
    ],
    nextProject: {
      slug: "thinking-architecture",
      title: "Thinking Architecture",
      meta: "Brand Film · Architectural CGI",
      thumbnail: "/assets/chrono-morph.jpg",
    },
  },
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projects.find((p) => p.slug === slug);
};