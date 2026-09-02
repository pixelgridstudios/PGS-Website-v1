const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const targetStrStart = '        {/* Highlighted Work: Clean Borderless Project Cards */}';
const targetStrEnd = '        </section>\n\n        <DotDivider />';

const startIndex = content.indexOf(targetStrStart);
const endIndex = content.indexOf(targetStrEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `        {/* Highlighted Work: Editorial Stark Grid */}
        <section className="py-12 sm:py-24 border-t border-brand-foreground/10">
          <FadeIn delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-7xl text-brand-foreground">
                Highlighted Work
              </h2>
            </div>
            <Link
              to="/work"
              className="group hidden sm:inline-flex items-center gap-4 text-sm font-mono tracking-widest uppercase hover:opacity-50 transition-opacity"
            >
              <span>View Full Archive</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </FadeIn>

          <div className="grid gap-12 md:gap-8 md:grid-cols-2">
            {highlightedProjects.map((project, i) => (
              <FadeIn key={project.title} delay={0.2 + (i * 0.1)} className="h-full">
                <Link
                  to={\`/work/\${project.slug}\`}
                  className="block h-full group flex flex-col gap-5 sm:gap-6 cursor-pointer"
                >
                  <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl text-brand-foreground">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs sm:text-sm uppercase tracking-widest text-brand-subtle"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 sm:hidden">
            <Link
              to="/work"
              className="group inline-flex items-center gap-4 text-sm font-mono tracking-widest uppercase hover:opacity-50 transition-opacity"
            >
              <span>View Full Archive</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
`;
  const newContent = content.slice(0, startIndex) + replacement + content.slice(endIndex);
  fs.writeFileSync('src/pages/Home.tsx', newContent, 'utf8');
  console.log("Success");
} else {
  console.log("Indices not found", startIndex, endIndex);
}
