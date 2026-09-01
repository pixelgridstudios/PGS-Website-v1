const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const tagRegex = /<span\s*className=\{\ont-mono text-sm uppercase tracking-wider transition-colors \$\{\s*isOpen \? "text-emerald-500 font-semibold" : "text-brand-subtle"\s*\}\\}\s*>\s*\{service\.tag\}\s*<\/span>/gm;

content = content.replace(tagRegex, '');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
