const fs = require('fs');
let content = fs.readFileSync('src/components/TimelineTrack.tsx', 'utf8');

content = content.replace(
  /ref=\{idx === 5 \? desktopStep6ButtonRef : undefined\}/g,
  'ref={idx === 6 ? desktopStep6ButtonRef : undefined}'
);
content = content.replace(
  /ref=\{idx === 5 \? mobileStep6ButtonRef : undefined\}/g,
  'ref={idx === 6 ? mobileStep6ButtonRef : undefined}'
);

fs.writeFileSync('src/components/TimelineTrack.tsx', content, 'utf8');
