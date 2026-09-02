const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Remove from old place
content = content.replace(/\n\s*<ClientLogos \/>/, '');

// Add to new place (after the last </section>)
const parts = content.split('</section>');
// The last </section> is parts[parts.length - 2]
const lastPart = parts.pop();
parts.push('\n        <ClientLogos />\n' + lastPart);
content = parts.join('</section>');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
