const fs = require('fs');
let content = fs.readFileSync('src/components/TimelineTrack.tsx', 'utf8');

// 1. Replace TOTAL_COLS and NEEDLES
content = content.replace(/const TOTAL_COLS = 34;/g, 'const TOTAL_COLS = 32;');
content = content.replace(/const START_NEEDLE = 1\.47;/g, 'const START_NEEDLE = 1.56;');
content = content.replace(/const END_NEEDLE = 98\.53;/g, 'const END_NEEDLE = 98.44;');

// 2. Adjust colStart and colEnd for Wohoo!
content = content.replace(
  /colStart: 31,\s*colEnd: 34,/g,
  'colStart: 27,\n    colEnd: 32,'
);

// 3. Replace grid-cols-34 to grid-cols-32
content = content.replace(/grid-cols-\[repeat\(34,1fr\)\]/g, 'grid-cols-[repeat(32,1fr)]');

// 4. Update stepProgressPoints
content = content.replace(
  /const stepProgressPoints = \[5, 23, 40, 55, 68, 76, 96\];/g,
  'const stepProgressPoints = [5, 25, 43, 59, 71, 81, 94];'
);

// 5. Update getStepFromProgress
const getStepRegex = /const getStepFromProgress = \(p: number\): number => \{[\s\S]*?return 6;\n\};/;
const newGetStep = const getStepFromProgress = (p: number): number => {
  if (p < 15) return 0;
  if (p < 34) return 1;
  if (p < 51) return 2;
  if (p < 65) return 3;
  if (p < 76) return 4;
  if (p < 87.5) return 5;
  return 6;
};;
content = content.replace(getStepRegex, newGetStep);

// 6. Confetti threshold trigger
content = content.replace(
  /if \(progressRef\.current >= 86\.5 && !hasFiredConfettiRef\.current\) \{/g,
  'if (progressRef.current >= 88 && !hasFiredConfettiRef.current) {'
);

fs.writeFileSync('src/components/TimelineTrack.tsx', content, 'utf8');
