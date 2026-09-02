const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(/\n\s*<ClientLogos \/>\n/, '');

const targetSectionEnd = /<\/section>\n\s*<\/div>\n\s*<\/div>/;
content = content.replace(targetSectionEnd, '</section>\n\n        <ClientLogos />\n      </div>\n    </div>');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
