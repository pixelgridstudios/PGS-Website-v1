const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Remove DotDivider imports
content = content.replace(/import DotDivider from "\.\/DotDivider";\r?\n/, '');

// Remove all <DotDivider /> elements
content = content.replace(/[ \t]*<DotDivider \/>\r?\n/g, '');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
