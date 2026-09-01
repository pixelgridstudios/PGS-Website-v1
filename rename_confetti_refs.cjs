const fs = require('fs');
let content = fs.readFileSync('src/components/TimelineTrack.tsx', 'utf8');

content = content.replace(/desktopStep6ButtonRef/g, 'desktopWohooButtonRef');
content = content.replace(/mobileStep6ButtonRef/g, 'mobileWohooButtonRef');
content = content.replace(/triggerDeliveryConfetti/g, 'triggerWohooConfetti');

fs.writeFileSync('src/components/TimelineTrack.tsx', content, 'utf8');
