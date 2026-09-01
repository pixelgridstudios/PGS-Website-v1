const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Remove Section Header
const headerRegex = /\{\/\* Section Header \*\/\}\s*<FadeIn delay=\{0\.1\} className="flex flex-col gap-3 md:items-center md:text-center mb-6 sm:mb-8">\s*<h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight text-brand-foreground">\s*How Our Motion Can Work for You\s*<\/h2>\s*<\/FadeIn>/g;
content = content.replace(headerRegex, '{/* Section Header Removed */}');

// 2. Remove service tags
const tagRegex = /<span\s*className=\{\ont-mono text-sm uppercase tracking-wider transition-colors \$\{\s*isOpen \? "text-emerald-500 font-semibold" : "text-brand-subtle"\s*\}\\}\s*>\s*\{service\.tag\}\s*<\/span>/g;
content = content.replace(tagRegex, '');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
