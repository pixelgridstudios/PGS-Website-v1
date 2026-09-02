const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Remove text on home video
const heroRegex = /\{\/\* Main Hero Headline \*\/\}[\s\S]*?\{\/\* Bottom Row: Showreel Overlay \*\/\}/;
content = content.replace(heroRegex, '{/* Bottom Row: Showreel Overlay */}');

// 2. Redesign Split Card
const splitCardRegex = /\{\/\* We are Pixel Grid: Signature Dot4 Asymmetric Split Card \*\/\}[\s\S]*?(?=\{\/\* Highlighted Work: Clean Borderless Project Cards \*\/\}|<DotDivider \/>\s*\{\/\* Highlighted Work: Clean Borderless Project Cards \*\/\}|<section className="py-6 sm:py-8">)/;

const newCard = `{/* We are Pixel Grid: Signature Dot4 Asymmetric Split Card (Simplified) */}
        <FadeIn delay={0.1} className="my-6 sm:my-8">
          <div className="w-full flex flex-col md:flex-row items-center gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-brand-muted p-6 sm:p-10 md:p-12 lg:p-16 shadow-sm dark:shadow-2xl border-0">
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-brand-foreground leading-tight md:leading-[1.15]">
                Pixel Grid is a global creative company that brings brands, stories, and experiences to life through art, design, and technology.
              </h2>
            </div>
            <div className="shrink-0 flex items-center justify-center pt-2 md:pt-0">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-brand-panel text-brand-panel-foreground px-5 md:px-7 py-3 md:py-4 text-sm sm:text-base font-medium tracking-wide shadow-md transition-all duration-[400ms] ease-spring-vibe hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-accent/20 active:scale-95 border-0"
              >
                <span>More about us</span>
                <ArrowRight className="size-4 shrink-0 transition-transform duration-[400ms] ease-spring-vibe group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeIn>

        <DotDivider />

        `;

content = content.replace(splitCardRegex, newCard);
fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
console.log("Success");
