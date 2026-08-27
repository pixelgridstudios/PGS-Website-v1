export interface JobPosition {
  id: string;
  title: string;
  department: "3D & Motion" | "Art Direction & LookDev" | "FX & Simulation" | "Production & Pipeline" | "Freelance Network";
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
    id: "senior-3d-motion-designer",
    title: "Senior 3D Motion Designer & LookDev",
    department: "3D & Motion",
    location: "Pune Studio / Global Remote",
    type: "Full-Time",
    experience: "4+ Years in Commercial 3D",
    overview:
      "We are looking for a Senior 3D Motion Designer with exceptional taste in kinematic motion, photoreal lighting, and visual storytelling to lead commercial launch films and brand campaigns.",
    responsibilities: [
      "Lead look development, texturing, studio lighting, and kinematic camera animation for flagship product launch films.",
      "Collaborate directly with Creative Director Subhanshu Gajbhiye to translate client briefs into cinematic sequences.",
      "Construct photoreal PBR shader networks, procedural materials, and ACEScg color-managed scenes.",
      "Optimize complex scenes for multi-GPU render farm distribution and multi-pass EXR compositing.",
      "Mentor mid-level motion designers and maintain high aesthetic consistency across deliverables.",
    ],
    requirements: [
      "A standout reel highlighting high-craft 3D product animation, elegant kinetic pacing, and lighting mastery.",
      "Expert knowledge of Cinema 4D and Redshift (Octane familiarity is a strong plus).",
      "Proficiency with After Effects for multi-pass compositing, motion graphics, and color finishing.",
      "Strong understanding of camera mechanics, focal lengths, depth of field, and editorial pacing.",
    ],
    tools: ["Cinema 4D", "Redshift", "After Effects", "ACEScg", "Photoshop"],
    whatWeOffer: [
      "Dedicated multi-RTX GPU workstation + dedicated cloud farm nodes.",
      "15% allocated studio R&D time for personal motion experiments.",
      "Direct creative ownership and full public credit on every campaign.",
    ],
  },
  {
    id: "procedural-houdini-fx-artist",
    title: "Procedural & Houdini FX Specialist",
    department: "FX & Simulation",
    location: "Global Remote / Contract",
    type: "Contract or Full-Time",
    experience: "3+ Years in FX/Simulation",
    overview:
      "Join our technical visual team to create complex particle systems, organic and abstract dynamics, soft-body physics, and procedural environments for flagship tech campaigns.",
    responsibilities: [
      "Architect custom Houdini SOP/VOP networks for procedural asset generation and deformation.",
      "Execute high-end particle flows, fluid dynamics, dynamic cloth, and micro-destruction simulations.",
      "Develop procedural animation rigs and generative mathematical motion systems.",
      "Bridge Houdini simulation caches (Alembic / VDB) seamlessly into our Cinema 4D and Redshift pipeline.",
    ],
    requirements: [
      "Demonstrated mastery of Houdini dynamics (Vellum, Pyro, FLIP, POPs) and procedural nodal workflows.",
      "Solid understanding of VEX coding, math for 3D graphics, and vector mathematics.",
      "Reel showcasing innovative procedural effects, organic simulations, and abstract visual storytelling.",
      "Ability to optimize high-density simulation data for reliable render farm dispatch.",
    ],
    tools: ["Houdini", "VEX", "Solaris / Karma", "Redshift", "Alembic / VDB"],
    whatWeOffer: [
      "Full Houdini license coverage and high-core compute node access.",
      "Freedom to architect generative toolkits used across commercial projects.",
      "Flexible asynchronous working hours across timezones.",
    ],
  },
  {
    id: "realtime-spatial-unreal-artist",
    title: "Realtime & Spatial LED Canvas Artist",
    department: "3D & Motion",
    location: "Global Remote / Pune Studio",
    type: "Full-Time or Project Contract",
    experience: "2+ Years in Unreal Engine",
    overview:
      "Help engineer immersive 8K LED visual canvases, interactive stage environments, and real-time simulations for architectural venues (like Yas Mall) and broadcast stages.",
    responsibilities: [
      "Author real-time scenes and cinematic environments in Unreal Engine 5 utilizing Nanite and Lumen.",
      "Design ultra-wide, non-standard resolution spatial canvas visualizers (up to 8K resolution).",
      "Develop dynamic Niagara particle systems and Blueprint interactive triggers for live events.",
      "Collaborate with display engineers to ensure color calibration and framerate consistency on media servers.",
    ],
    requirements: [
      "Proficiency in Unreal Engine 5 lighting, scene optimization, Sequencer, and Niagara systems.",
      "Experience formatting content for large-scale LED walls, architectural projection, or live stage visuals.",
      "Understanding of real-time render pipelines, performance profiling, and GPU hardware optimization.",
    ],
    tools: ["Unreal Engine 5", "Niagara", "Cinema 4D", "Notch / Disguise", "DaVinci Resolve"],
    whatWeOffer: [
      "Direct involvement in architectural LED canvas spectacles and experiential staging.",
      "Opportunity to shape our real-time interactive spatial division.",
      "Access to cutting-edge real-time render compute nodes.",
    ],
  },
  {
    id: "commercial-art-director",
    title: "Commercial Art Director / Motion Lead",
    department: "Art Direction & LookDev",
    location: "Pune Studio / Hybrid",
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
    tools: ["Cinema 4D", "Figma", "Photoshop", "Illustrator", "Premiere Pro", "Frame.io"],
    whatWeOffer: [
      "Leadership seat shaping the studio's portfolio direction and aesthetic identity.",
      "Significant campaign profit-sharing bonuses.",
      "Collaborative studio workspaces in Pune with flexible remote options.",
    ],
  },
  {
    id: "creative-producer-coordinator",
    title: "Creative Producer & Studio Coordinator",
    department: "Production & Pipeline",
    location: "Pune Studio / Hybrid",
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
    tools: ["Notion", "Frame.io", "Slack", "Google Workspace", "Figma"],
    whatWeOffer: [
      "Competitive base salary with milestone project delivery bonuses.",
      "Healthy, sustainable production scheduling without toxic crunch culture.",
      "Hybrid flexibility with comprehensive health and wellness coverage.",
    ],
  },
  {
    id: "freelance-roster-specialist",
    title: "Freelance Roster & General Specialist",
    department: "Freelance Network",
    location: "Global Remote / Project-Based",
    type: "Contract / Sprint-Based",
    experience: "All Experience Levels Welcome",
    overview:
      "We regularly partner with specialized freelance 3D animators, lookdev specialists, character riggers, sound designers, colorists, and Houdini technical directors for high-visibility commercial launch sprints.",
    responsibilities: [
      "Collaborate on sprint-based commercial productions with well-defined scopes and milestones.",
      "Deliver production-ready scene files, simulation caches, or lookdev styleframes adhering to ACEScg color workflows.",
      "Maintain active communication on studio Slack and Frame.io during project sprint cycles.",
    ],
    requirements: [
      "Standout portfolio or showreel showcasing mastery in your core discipline.",
      "Disciplined timeline management and clear communication across remote timezones.",
      "High standard of aesthetic craft and attention to nuance.",
    ],
    tools: ["Cinema 4D", "Redshift", "Houdini", "Unreal Engine 5", "After Effects", "Blender", "DaVinci Resolve"],
    whatWeOffer: [
      "Competitive day and project rates paid promptly upon milestone approval.",
      "Access to studio render farm clusters for heavy project delivery passes.",
      "Full public credit and portfolio permissions for completed commercial work.",
    ],
  },
];
