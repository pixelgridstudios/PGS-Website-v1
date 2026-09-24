export interface ProjectSection {
  heading?: string;
  copy?: string;
  layout: "single-video" | "two-column-images" | "full-width-image" | "split-text-image";
  videoSrc?: string;
  videoPoster?: string;
  images?: { src: string; alt: string }[];
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
  behanceUrl?: string;
  vimeoUrl?: string;
  vimeoId?: string;
  thumbnail: string;
  heroVideo: string;
  heroVideoPoster: string;
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
    title: "Thinking architecture",
    subtitle: "High-Fidelity 3D Product System",
    client: "Global Tech",
    year: "2024",
    category: "Product Launch",
    tags: ["Product Motion", "3D CGI", "Hardware Visualization"],
    award: "Featured on Motionographer",
    behanceUrl: "https://www.behance.net/search/projects?search=3d+motion",
    vimeoUrl: "https://vimeo.com/1184766382",
    vimeoId: "1184766382",
    thumbnail: "/assets/chrono-morph-Db8Qrzc2.jpg",
    heroVideo: "/assets/hero-bg.mp4",
    heroVideoPoster: "/assets/chrono-morph-Db8Qrzc2.jpg",
    brief: {
      title: "Thinking architecture – Precision at Scale",
      description: [
        "A deep dive into structural and aesthetic engineering, blending 3D visualization with cinematic lighting.",
        "The project explores abstract mechanics and product architecture, communicating complex features through seamless motion.",
      ],
    },
    sections: [
      {
        heading: "Engineering the Impossible",
        copy: "We built a complete digital twin of the product, focusing on microscopic details and realistic material responses.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-hardware.jpg", alt: "Hardware Details" },
          { src: "/assets/styleframe-tech.jpg", alt: "Internal Components" },
        ],
      },
      {
        layout: "single-video",
        videoSrc: "/assets/render-loop.mp4",
        videoPoster: "/assets/chrono-morph-Db8Qrzc2.jpg",
      },
    ],
    credits: [
      { role: "Creative Direction", names: ["Subhanshu Gajbhiye"] },
      { role: "3D Animation", names: ["Pixel Grid Studios"] },
    ],
    nextProject: {
      slug: "tata-power",
      title: "Tata power",
      meta: "Brand Film A Product System",
      thumbnail: "/assets/void-textiles-DxX08qfd.jpg",
    },
  },
  {
    id: "02",
    slug: "tata-power",
    title: "Tata power",
    subtitle: "Sustainable Energy Visualization",
    client: "Tata Power",
    year: "2023",
    category: "Brand Film",
    tags: ["Energy", "3D Motion", "Sustainability"],
    thumbnail: "/assets/void-textiles-DxX08qfd.jpg",
    heroVideo: "/assets/breakdown-loop.mp4",
    heroVideoPoster: "/assets/void-textiles-DxX08qfd.jpg",
    brief: {
      title: "Tata power – Powering the Future",
      description: [
        "Visualizing the scale and impact of renewable energy infrastructure through cinematic 3D storytelling.",
        "We designed a modular visual system that highlights clean energy solutions for residential and commercial spaces.",
      ],
    },
    sections: [
      {
        heading: "Clean Energy Grids",
        copy: "Showcasing the flow of sustainable power from solar arrays to smart homes using fluid motion graphics.",
        layout: "split-text-image",
        images: [{ src: "/assets/styleframe-abstract.jpg", alt: "Energy Flow" }],
      },
    ],
    credits: [
      { role: "Client", names: ["Tata Power"] },
      { role: "Lead Designer", names: ["Subhanshu Gajbhiye"] },
    ],
    nextProject: {
      slug: "boat-rockerz-pro",
      title: "Boat Rockerz Pro",
      meta: "Product Motion A Short-form",
      thumbnail: "/assets/precision-archive-D1t0VcXE.jpg",
    },
  },
  {
    id: "03",
    slug: "boat-rockerz-pro",
    title: "Boat Rockerz Pro",
    subtitle: "Next-Gen Audio Drivers & Acoustic Simulation",
    client: "boAt Audio India",
    year: "2023",
    category: "Product Motion",
    tags: ["Product Motion", "Acoustic Simulation", "3D CGI", "Short-Form"],
    award: "Featured on Behance Motion Graphics",
    behanceUrl: "https://www.behance.net/search/projects?search=boat+audio+3d+motion",
    vimeoUrl: "https://vimeo.com/1184766382",
    vimeoId: "1184766382",
    thumbnail: "/assets/precision-archive-D1t0VcXE.jpg",
    heroVideo: "/assets/render-loop.mp4",
    heroVideoPoster: "/assets/precision-archive-D1t0VcXE.jpg",
    brief: {
      title: "Boat Rockerz Pro – Bass Physics & Acoustic Motion Design",
      description: [
        "boAt needed a fast, high-impact motion sequence for their flagship wireless launch, focusing on the proprietary bass-boost diaphragm and ultra-low latency.",
        "We visualized sound waves as physical pressure ripples propagating through microscopic acoustic chambers.",
      ],
    },
    sections: [
      {
        heading: "Visualizing Acoustic Velocity",
        copy: "High-speed keyframe animation captures the rapid oscillation of the diaphragm in extreme slow motion.",
        layout: "two-column-images",
        images: [
          { src: "/assets/styleframe-hardware.jpg", alt: "Driver Diaphragm Physics" },
          { src: "/assets/styleframe-tech.jpg", alt: "Charging Case Magnetic Snap" },
        ],
      },
    ],
    credits: [
      { role: "Client", names: ["boAt Lifestyle India"] },
      { role: "Creative Direction", names: ["Subhanshu Gajbhiye"] },
    ],
    nextProject: {
      slug: "thinking-architecture",
      title: "Thinking architecture",
      meta: "Product Launch A 3D Animation",
      thumbnail: "/assets/chrono-morph-Db8Qrzc2.jpg",
    },
  },
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projects.find((p) => p.slug === slug);
};