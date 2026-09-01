const fs = require('fs');
let content = fs.readFileSync('src/components/TimelineTrack.tsx', 'utf8');

content = content.replace(
  /grid-cols-\[repeat\(30,1fr\)\]/g,
  'grid-cols-[repeat(34,1fr)]'
);

fs.writeFileSync('src/components/TimelineTrack.tsx', content, 'utf8');
