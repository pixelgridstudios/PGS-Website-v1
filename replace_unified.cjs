const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const startStr = '        {/* How Our Motion Can Work for You */}';
const endStr = '        </section>\n\n        <ClientLogos />';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = \        {/* How Our Motion Can Work for You - Unified Minimal Layout */}
        <section className="py-12 sm:py-16 overflow-hidden w-full">
          <div className="mx-auto max-w-[900px]">
            <FadeIn delay={0.1} className="flex flex-col md:items-center md:text-center mb-10 sm:mb-12">
              <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight text-brand-foreground">
                How Our Motion Can Work for You
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full flex flex-col gap-3">
              {motionServices.map((service, i) => {
                const isOpen = openService === i;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setOpenService(i)}
                    onClick={() => setOpenService((prev) => (prev === i ? null : i))}
                    tabIndex={-1}
                    className={\\\overflow-hidden rounded-2xl transition-all duration-200 cursor-pointer border-0 outline-none ring-0 select-none \\\\\\}
                  >
                    <div
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-7 text-left select-none outline-none focus:outline-none ring-0"
                    >
                      <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                        <span
                          className={\\\ont-mono text-sm sm:text-base font-medium transition-colors \\\\\\}
                        >
                          {service.id}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <span className="truncate font-display text-lg sm:text-xl font-semibold tracking-tight text-brand-foreground">
                            {service.title}
                          </span>
                        </div>
                      </div>

                      <span
                        className={\\\lex size-8 sm:size-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 \\\\\\}
                      >
                        <Plus className="size-4 sm:size-5" />
                      </span>
                    </div>

                    {/* Pure CSS Morphing Grid Height Expansion */}
                    <div
                      className={\\\grid transition-[grid-template-rows,opacity] duration-300 ease-out \\\\\\}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-brand-foreground/10 px-5 sm:px-7 pb-5 sm:pb-7 pt-4 text-base sm:text-lg leading-relaxed text-brand-subtle font-normal">
                          <p>{service.copy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10 sm:mt-14 flex justify-center w-full">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-panel text-brand-panel-foreground px-8 py-4 font-display text-base font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-0 select-none cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="size-5" />
              </Link>
            </FadeIn>
          </div>
\;
  const newContent = content.slice(0, startIndex) + replacement + content.slice(endIndex);
  fs.writeFileSync('src/pages/Home.tsx', newContent, 'utf8');
  console.log("Success");
} else {
  console.log("Indices not found", startIndex, endIndex);
}
