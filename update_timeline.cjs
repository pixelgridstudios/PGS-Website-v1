const fs = require('fs');

let content = fs.readFileSync('src/components/TimelineTrack.tsx', 'utf8');

// 1. Import PartyPopper
content = content.replace(
  'import { FolderSearch, Sparkles, Palette, Film, RefreshCw, Send, Play, Pause } from "lucide-react";',
  'import { FolderSearch, Sparkles, Palette, Film, RefreshCw, Send, Play, Pause, PartyPopper } from "lucide-react";'
);

// 2. Replace pipelineSteps
const stepsRegex = /const pipelineSteps: TimelineStep\[\] = \[\s*\{[\s\S]*?\s\}\s*\];/;
const newSteps = const pipelineSteps: TimelineStep[] = [
  {
    id: 0,
    title: "Discovery & Strategy",
    shortTitle: "Discovery",
    icon: <FolderSearch className="size-4 shrink-0" />,
    colStart: 1,
    colEnd: 7,
    description: "We explore your objectives, research your brand, industry and target audience, and develop a clear creative roadmap for the project.",
  },
  {
    id: 1,
    title: "Concept & Storytelling",
    shortTitle: "Concept",
    icon: <Sparkles className="size-4 shrink-0" />,
    colStart: 5,
    colEnd: 11,
    description: "Scriptwriting, storyboarding to visualize the flow, and developing style frames to establish the definitive visual direction.",
  },
  {
    id: 2,
    title: "Design & Art Direction",
    shortTitle: "Art Direction",
    icon: <Palette className="size-4 shrink-0" />,
    colStart: 9,
    colEnd: 15,
    description: "Moodboards, color palette, typography styling, custom 3D asset modeling, procedural lighting, and overall aesthetic look-development.",
  },
  {
    id: 3,
    title: "Animation & Motion Design",
    shortTitle: "Animation",
    icon: <Film className="size-4 shrink-0" />,
    colStart: 13,
    colEnd: 19,
    description: "Keyframe animation, fluid motion design, 3D rendering, multipass compositing, and impactful sound design & music mastering.",
  },
  {
    id: 4,
    title: "Feedback & Refinements",
    shortTitle: "Refinements",
    icon: <RefreshCw className="size-4 shrink-0" />,
    colStart: 17,
    colEnd: 23,
    description: "Iterative review and revisions based on your input, edit adjustments to timing, pacing, and transitions, followed by final quality checks.",
  },
  {
    id: 5,
    title: "Delivery & Implementation",
    shortTitle: "Delivery",
    icon: <Send className="size-4 shrink-0" />,
    colStart: 21,
    colEnd: 27,
    description: "Optimized master exports for all your marketing channels in multiple formats, resolutions, and a final delivery package with usage guidelines.",
  },
  {
    id: 6,
    title: "Wohoo!",
    shortTitle: "Wohoo!",
    icon: <PartyPopper className="size-4 shrink-0" />,
    colStart: 25,
    colEnd: 30,
    description: "It's time to celebrate! Your project is live and ready to make an impact. We'll pop the champagne and monitor the launch.",
  }
];;

content = content.replace(stepsRegex, newSteps);

// 3. Replace stepProgressPoints
content = content.replace(
  'const stepProgressPoints = [5, 25, 45, 63, 78, 90];',
  'const stepProgressPoints = [5, 20, 35, 50, 65, 80, 95];'
);

// 4. Replace getStepFromProgress
const getStepRegex = /const getStepFromProgress = \(p: number\): number => \{[\s\S]*?return 5;\n\};/;
const newGetStep = const getStepFromProgress = (p: number): number => {
  if (p < 12.5) return 0;
  if (p < 27.5) return 1;
  if (p < 42.5) return 2;
  if (p < 57.5) return 3;
  if (p < 72.5) return 4;
  if (p < 87.5) return 5;
  return 6;
};;
content = content.replace(getStepRegex, newGetStep);

// 5. Replace confetti logic
content = content.replace(
  /if \(progressRef\.current >= 84 && !hasFiredConfettiRef\.current\) \{/g,
  'if (progressRef.current >= 87.5 && !hasFiredConfettiRef.current) {'
);

// 6. Replace idx === 5 with idx === 6
content = content.replace(
  /ref=\{idx === 5 \? desktopStep6ButtonRef : undefined\}/g,
  'ref={idx === 6 ? desktopStep6ButtonRef : undefined}'
);
content = content.replace(
  /ref=\{idx === 5 \? mobileStep6ButtonRef : undefined\}/g,
  'ref={idx === 6 ? mobileStep6ButtonRef : undefined}'
);

fs.writeFileSync('src/components/TimelineTrack.tsx', content, 'utf8');
console.log('TimelineTrack.tsx updated successfully');
