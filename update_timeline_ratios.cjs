const fs = require('fs');

let content = fs.readFileSync('src/components/TimelineTrack.tsx', 'utf8');

// 1. Replace TOTAL_COLS and NEEDLES
content = content.replace(
  /const TOTAL_COLS = 30;/g,
  'const TOTAL_COLS = 34;'
);
content = content.replace(
  /const START_NEEDLE = 1\.67; \/\/ Column 1 center/g,
  'const START_NEEDLE = 1.47; // Column 1 center'
);
content = content.replace(
  /const END_NEEDLE = 98\.33;   \/\/ Column 30 center/g,
  'const END_NEEDLE = 98.53;   // Column 34 center'
);

// 2. Replace pipelineSteps to restore original ratio and append Wohoo
const stepsRegex = /const pipelineSteps: TimelineStep\[\] = \[\s*\{[\s\S]*?\s\}\s*\];/;
const newSteps = const pipelineSteps: TimelineStep[] = [
  {
    id: 0,
    title: "Discovery & Strategy",
    shortTitle: "Discovery",
    icon: <FolderSearch className="size-4 shrink-0" />,
    colStart: 1,
    colEnd: 8,
    description: "We explore your objectives, research your brand, industry and target audience, and develop a clear creative roadmap for the project.",
  },
  {
    id: 1,
    title: "Concept & Storytelling",
    shortTitle: "Concept",
    icon: <Sparkles className="size-4 shrink-0" />,
    colStart: 5,
    colEnd: 13,
    description: "Scriptwriting, storyboarding to visualize the flow, and developing style frames to establish the definitive visual direction.",
  },
  {
    id: 2,
    title: "Design & Art Direction",
    shortTitle: "Art Direction",
    icon: <Palette className="size-4 shrink-0" />,
    colStart: 10,
    colEnd: 18,
    description: "Moodboards, color palette, typography styling, custom 3D asset modeling, procedural lighting, and overall aesthetic look-development.",
  },
  {
    id: 3,
    title: "Animation & Motion Design",
    shortTitle: "Animation",
    icon: <Film className="size-4 shrink-0" />,
    colStart: 15,
    colEnd: 23,
    description: "Keyframe animation, fluid motion design, 3D rendering, multipass compositing, and impactful sound design & music mastering.",
  },
  {
    id: 4,
    title: "Feedback & Refinements",
    shortTitle: "Refinements",
    icon: <RefreshCw className="size-4 shrink-0" />,
    colStart: 20,
    colEnd: 26,
    description: "Iterative review and revisions based on your input, edit adjustments to timing, pacing, and transitions, followed by final quality checks.",
  },
  {
    id: 5,
    title: "Delivery & Implementation",
    shortTitle: "Delivery",
    icon: <Send className="size-4 shrink-0" />,
    colStart: 22,
    colEnd: 30,
    description: "Optimized master exports for all your marketing channels in multiple formats, resolutions, and a final delivery package with usage guidelines.",
  },
  {
    id: 6,
    title: "Wohoo!",
    shortTitle: "Wohoo!",
    icon: <PartyPopper className="size-4 shrink-0" />,
    colStart: 31,
    colEnd: 34,
    description: "It's time to celebrate. Your project is live and ready to make an impact. We'll pop the champagne and monitor the launch.",
  }
];;

content = content.replace(stepsRegex, newSteps);

// 3. Replace stepProgressPoints
content = content.replace(
  /const stepProgressPoints = \[5, 20, 35, 50, 65, 80, 95\];/g,
  'const stepProgressPoints = [5, 23, 40, 55, 68, 76, 96];'
);

// 4. Replace getStepFromProgress
const getStepRegex = /const getStepFromProgress = \(p: number\): number => \{[\s\S]*?return 6;\n\};/;
const newGetStep = const getStepFromProgress = (p: number): number => {
  if (p < 14) return 0;
  if (p < 31.5) return 1;
  if (p < 47.5) return 2;
  if (p < 61.5) return 3;
  if (p < 72) return 4;
  if (p < 86) return 5;
  return 6;
};;
content = content.replace(getStepRegex, newGetStep);

// 5. Replace grid-cols-30 to grid-cols-34
content = content.replace(
  /grid-cols-\[repeat\(30,1fr\)\]/g,
  'grid-cols-[repeat(34,1fr)]'
);

// 6. Confetti threshold trigger
content = content.replace(
  /if \(progressRef\.current >= 87\.5 && !hasFiredConfettiRef\.current\) \{/g,
  'if (progressRef.current >= 86.5 && !hasFiredConfettiRef.current) {'
);

fs.writeFileSync('src/components/TimelineTrack.tsx', content, 'utf8');
console.log('TimelineTrack.tsx updated successfully');
