const fs = require('fs');
let content = fs.readFileSync('src/components/TimelineTrack.tsx', 'utf8');

// 1. Replace TOTAL_COLS and NEEDLES
content = content.replace(/const TOTAL_COLS = 32;/g, 'const TOTAL_COLS = 31;');
content = content.replace(/const START_NEEDLE = 1\.56;/g, 'const START_NEEDLE = 1.61;');
content = content.replace(/const END_NEEDLE = 98\.44;/g, 'const END_NEEDLE = 98.39;');

// 2. Adjust colStart and colEnd for Wohoo!
content = content.replace(
  /colStart: 27,\s*colEnd: 32,/g,
  'colStart: 29,\n    colEnd: 31,'
);

// 3. Replace grid-cols-32 to grid-cols-31
content = content.replace(/grid-cols-\[repeat\(32,1fr\)\]/g, 'grid-cols-[repeat(31,1fr)]');

// 4. Update stepProgressPoints
content = content.replace(
  /const stepProgressPoints = \[5, 25, 43, 59, 71, 81, 94\];/g,
  'const stepProgressPoints = [5, 27, 45, 61, 74, 84, 97];'
);

// 5. Update getStepFromProgress
const getStepRegex = /const getStepFromProgress = \(p: number\): number => \{[\s\S]*?return 6;\n\};/;
const newGetStep = const getStepFromProgress = (p: number): number => {
  if (p < 16) return 0;
  if (p < 36) return 1;
  if (p < 53) return 2;
  if (p < 67.5) return 3;
  if (p < 79) return 4;
  if (p < 90.5) return 5;
  return 6;
};;
content = content.replace(getStepRegex, newGetStep);

// 6. Confetti threshold trigger
content = content.replace(
  /if \(progressRef\.current >= 88 && !hasFiredConfettiRef\.current\) \{/g,
  'if (progressRef.current >= 91 && !hasFiredConfettiRef.current) {'
);

fs.writeFileSync('src/components/TimelineTrack.tsx', content, 'utf8');
