const fs = require('fs');
let content = fs.readFileSync('src/components/ClientLogos.tsx', 'utf8');

content = content.replace(
  'className="relative h-20 sm:h-24 md:h-32 w-full rounded-xl sm:rounded-2xl bg-brand-muted/40 overflow-hidden flex items-center justify-center border border-brand-foreground/5 shadow-inner p-4 sm:p-6"',
  'className="relative h-24 sm:h-32 w-full flex items-center justify-center border-t border-b sm:border border-brand-foreground/10 p-4 sm:p-6"'
);
content = content.replace(
  '<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">',
  '<div className="grid grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-0">'
);
content = content.replace(
  '<h3 className="font-mono text-sm sm:text-base uppercase tracking-widest text-brand-subtle font-semibold">',
  '<h3 className="font-serif text-2xl font-semibold tracking-tight text-brand-foreground">'
);
fs.writeFileSync('src/components/ClientLogos.tsx', content, 'utf8');
