const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Remove Section Header
const headerRegex = /\{\/\* Section Header \*\/\}\s*<FadeIn delay=\{0\.1\} className="flex flex-col gap-3 md:items-center md:text-center mb-6 sm:mb-8">\s*<h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight text-brand-foreground">\s*How Our Motion Can Work for You\s*<\/h2>\s*<\/FadeIn>/g;
content = content.replace(headerRegex, '');

// 2. Add header to left column
const leftColRegex = /\{\/\* Left Column: Context & Direct CTA \(Slightly Darker for Subtle Differentiation\) \*\/\}\s*<div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-8 bg-black\/\[0\.045\] dark:bg-black\/30 text-brand-foreground">\s*<div>\s*<Link/g;
const newLeftCol = {/* Left Column: Context & Direct CTA (Slightly Darker for Subtle Differentiation) */}
              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-8 bg-black/[0.045] dark:bg-black/30 text-brand-foreground">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-foreground leading-snug">
                    How Our Motion<br />Can Work for You
                  </h3>
                </div>

                <div>
                  <Link;
content = content.replace(leftColRegex, newLeftCol);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
