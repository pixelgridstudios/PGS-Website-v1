const fs = require('fs');

const file = 'src/pages/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the arrow artifact globally
content = content.replace(/â†/g, '&larr;');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed arrow in Contact.tsx');
