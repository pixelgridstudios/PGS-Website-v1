const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const replacement = `          </div>
        </section>
`;

content = content.replace('          </div>\r\n        <ClientLogos />', replacement + '        <ClientLogos />');
content = content.replace('          </div>\n        <ClientLogos />', replacement + '        <ClientLogos />');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
console.log("Success");
