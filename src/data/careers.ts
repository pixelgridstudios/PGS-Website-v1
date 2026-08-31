export interface JobPosition {
  id: string;
  title: string;
  department: "3D & Motion" | "Art Direction & LookDev" | "Production & Pipeline" | "Freelance Network";
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  tools: string[];
  whatWeOffer?: string[];
}

export const openPositions: JobPosition[] = [
  {
    id: "3d-motion-designer",
    title: "3D Motion Designer & LookDev",
    department: "3D & Motion",
    location: "Remote",
    type: "Full-Time",
    experience: "2+ Years in Commercial 3D",
    overview:
      "We are looking for a 3D Motion Designer with exceptional taste in kinematic motion, photoreal lighting, and visual storytelling to craft commercial launch films and brand campaigns.",
    responsibilities: [
      "Develop look development, texturing, studio lighting, and kinematic camera animation for flagship product launch films.",
      "Collaborate directly with Creative Director Subhanshu Gajbhiye to translate client briefs into cinematic sequences.",
      "Construct photoreal PBR shader networks, procedural materials, and ACEScg color-managed scenes.",
      "Optimize complex scenes for multi-GPU render farm distribution and multi-pass EXR compositing.",
      "Maintain high aesthetic consistency and technical precision across deliverables.",
    ],
    requirements: [
      "A standout reel highlighting high-craft 3D product animation, elegant kinetic pacing, and lighting mastery.",
      "Expert knowledge of modern 3D lighting, procedural shaders, and look development workflows.",
      "Proficiency with compositing, motion graphics, and color finishing.",
      "Strong understanding of camera mechanics, focal lengths, depth of field, and editorial pacing.",
    ],
    tools: ["3D Animation", "Lighting & LookDev", "Procedural Shaders", "Compositing", "ACEScg"],
    whatWeOffer: [
      "Dedicated multi-RTX GPU workstation + dedicated cloud farm nodes.",
      "15% allocated studio R&D time for personal motion experiments.",
      "Direct creative ownership and full public credit on every campaign.",
    ],
  },
  {
    id: "commercial-art-director",
    title: "Commercial Art Director / Motion Lead",
    department: "Art Direction & LookDev",
    location: "Remote",
    type: "Full-Time",
    experience: "5+ Years in Agency / Studio",
    overview:
      "Direct the creative trajectory, visual styleframes, and narrative pacing of multi-channel commercial campaigns for global and domestic brands.",
    responsibilities: [
      "Translate high-level brand briefs into evocative visual treatments, moodboards, and narrative styleframes.",
      "Direct sprint teams of 3D designers, animators, and compositors from initial ideation to client delivery.",
      "Pitch visual concepts directly to brand marketing leads and agency creative directors.",
      "Uphold pixel-level typography, composition, color theory, and audio-visual synchronization standards.",
    ],
    requirements: [
      "A proven track record directing commercial films, product launches, or broadcast design packages.",
      "Mastery of visual storytelling, design typography, cinematic framing, and art direction.",
      "Clear, empathetic communication and the ability to mentor and inspire multidisciplinary artists.",
    ],
    tools: ["Art Direction", "LookDev", "Styleframes", "Design Systems", "Pacing & Story"],
    whatWeOffer: [
      "Leadership seat shaping the studio's portfolio direction and aesthetic identity.",
      "Significant campaign profit-sharing bonuses.",
      "Collaborative studio culture with flexible options.",
    ],
  },
  {
    id: "creative-producer-coordinator",
    title: "Creative Producer & Studio Coordinator",
    department: "Production & Pipeline",
    location: "Remote",
    type: "Full-Time",
    experience: "3+ Years in Studio Production",
    overview:
      "Keep our productions synchronized, streamlined, and friction-free. You will manage project timelines, artist allocations, client feedback loops, and final delivery milestones.",
    responsibilities: [
      "Scope incoming project inquiries, prepare milestone schedules, and manage artist resource allocations.",
      "Run client feedback workflows on Frame.io, ensuring notes are clear, actionable, and structured.",
      "Facilitate daily studio standups, track render farm resources, and foresee pipeline bottlenecks.",
      "Oversee delivery handoffs, asset archiving, and post-project retrospectives with clients.",
    ],
    requirements: [
      "Prior experience producing commercial 3D animation, VFX, or design agency projects.",
      "Meticulous organizational skills with expertise in Notion, Slack, and Google Workspace.",
      "A calm, solution-oriented mindset when managing fast-moving client deadlines.",
    ],
    tools: ["Production Pipeline", "Milestone Tracking", "Client Coordination", "Resource Scoping"],
    whatWeOffer: [
      "Competitive base salary with milestone project delivery bonuses.",
      "Healthy, sustainable production scheduling without toxic crunch culture.",
      "Comprehensive health and wellness coverage.",
    ],
  },
];

export const generalRosterPosition: JobPosition = {
  id: "freelance-roster-specialist",
  title: "Freelance Roster & General Specialist",
  department: "Freelance Network",
  location: "Remote / Project-Based",
  type: "Contract / Sprint-Based",
  experience: "All Experience Levels Welcome",
  overview:
    "We regularly partner with specialized freelance 3D animators, lookdev specialists, character riggers, sound designers, colorists, and Houdini technical directors for high-visibility commercial launch sprints.",
  responsibilities: [
    "Collaborate on sprint-based commercial productions with well-defined scopes and milestones.",
    "Deliver production-ready scene files, simulation caches, or lookdev styleframes adhering to ACEScg color workflows.",
    "Maintain active communication on studio channels during project sprint cycles.",
  ],
  requirements: [
    "Standout portfolio or showreel showcasing mastery in your core discipline.",
    "Disciplined timeline management and clear communication.",
    "High standard of aesthetic craft and attention to nuance.",
  ],
  tools: ["3D Animation", "LookDev", "FX Simulation", "Realtime", "Compositing", "Sound Design"],
  whatWeOffer: [
    "Competitive day and project rates paid promptly upon milestone approval.",
    "Access to studio render farm clusters for heavy project delivery passes.",
    "Full public credit and portfolio permissions for completed commercial work.",
  ],
};

export const allApplicableRoles: JobPosition[] = [
  ...openPositions,
  generalRosterPosition,
];
