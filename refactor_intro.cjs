const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Remove 'We are Pixel Grid' Split Card and replace with massive editorial text
const splitCardRegex = /\{\/\* We are Pixel Grid: Signature Dot4 Asymmetric Split Card \*\/\}[\s\S]*?(?=\{\/\* Highlighted Work: Clean Borderless Project Cards \*\/\}|<section className="py-6 sm:py-8">)/;

const newEditorialIntro = `{/* Editorial Intro */}
        <FadeIn delay={0.1} className="my-16 sm:my-24">
          <div className="w-full flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-brand-foreground/10 pt-16">
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-brand-foreground uppercase">
                Pixel Grid
              </h2>
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-brand-foreground leading-[1.05]">
                A creative studio obsessed with precision. We engineer 3D systems and brand films that clarify complex products and captivate audiences.
              </h3>
              <Link
                to="/about"
                className="inline-flex items-center gap-4 text-sm font-mono tracking-widest uppercase hover:opacity-50 transition-opacity self-start group"
              >
                <span>Discover More</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </FadeIn>

        `;

content = content.replace(splitCardRegex, newEditorialIntro);
fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
