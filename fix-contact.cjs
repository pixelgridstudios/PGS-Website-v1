const fs = require('fs');

const file = 'src/pages/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

// The mangled dashes are `â€“`
content = content.replace(/â€“/g, '-');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed dashes in Contact.tsx');
