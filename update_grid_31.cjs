const fs = require('fs');
let content = fs.readFileSync('src/components/TimelineTrack.tsx', 'utf8');

content = content.replace(/grid-cols-\[repeat\(32,1fr\)\]/g, 'grid-cols-[repeat(31,1fr)]');

fs.writeFileSync('src/components/TimelineTrack.tsx', content, 'utf8');
