const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const oldAccordionClass = 'className={`overflow-hidden rounded-2xl transition-all duration-200 cursor-pointer border-0 outline-none ring-0 select-none ${';
const newAccordionClass = 'className={`overflow-hidden transition-all duration-200 cursor-crosshair border-b border-brand-foreground/10 outline-none ring-0 select-none ${';

const oldBgClass = 'isOpen\n                        ? "bg-brand-muted text-brand-foreground shadow-sm"\n                        : "bg-brand-bg text-brand-foreground hover:bg-brand-muted/50"';
const newBgClass = 'isOpen\n                        ? "bg-brand-foreground text-brand-bg"\n                        : "bg-transparent text-brand-foreground hover:bg-brand-muted/30"';

content = content.replace(oldAccordionClass, newAccordionClass);
content = content.replace(oldBgClass, newBgClass);

const oldButtonClass = 'className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-8 py-4 font-display text-base font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-0 select-none cursor-pointer"';
const newButtonClass = 'className="inline-flex items-center justify-center gap-4 border border-brand-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-brand-foreground hover:text-brand-bg transition-colors"';

content = content.replace(oldButtonClass, newButtonClass);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
