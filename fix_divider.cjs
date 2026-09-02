const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');
content = content.replace('<DotDivider />\n\n        <DotDivider />', '<DotDivider />');
content = content.replace('<DotDivider />\r\n\r\n        <DotDivider />', '<DotDivider />');
fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
