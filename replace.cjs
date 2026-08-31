const fs = require('fs');

const files = [
    'src/pages/CareersApply.tsx',
    'src/pages/Contact.tsx',
    'src/pages/ProjectDetail.tsx',
    'src/pages/PrivacyPolicy.tsx',
    'src/pages/TermsConditions.tsx'
];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Add imports
    if (!content.includes('FadeIn')) {
        if (content.includes('import BackButton from "@/components/BackButton";')) {
            content = content.replace('import BackButton from "@/components/BackButton";', 
                'import BackButton from "@/components/BackButton";\nimport FadeIn from "@/components/animations/FadeIn";\nimport TextReveal from "@/components/animations/TextReveal";');
        } else if (content.includes('import DotDivider from "@/components/DotDivider";')) {
            content = content.replace('import DotDivider from "@/components/DotDivider";', 
                'import DotDivider from "@/components/DotDivider";\nimport FadeIn from "@/components/animations/FadeIn";\nimport TextReveal from "@/components/animations/TextReveal";');
        }
    }
    
    // Convert data-reveal opening tags
    content = content.replace(/<div data-reveal className=/g, '<FadeIn delay={0.1} className=');
    content = content.replace(/<section data-reveal className=/g, '<FadeIn delay={0.1} className=');
    content = content.replace(/<div data-reveal data-reveal-delay="100" className=/g, '<FadeIn delay={0.2} className=');
    content = content.replace(/<section data-reveal data-reveal-delay="100" className=/g, '<FadeIn delay={0.2} className=');
    content = content.replace(/<div data-reveal data-reveal-delay="150" className=/g, '<FadeIn delay={0.25} className=');
    content = content.replace(/<section data-reveal data-reveal-delay="200" className=/g, '<FadeIn delay={0.3} className=');
    content = content.replace(/<div data-reveal data-reveal-delay="200" className=/g, '<FadeIn delay={0.3} className=');
    content = content.replace(/<div data-reveal>/g, '<FadeIn delay={0.1}>');
    content = content.replace(/<section data-reveal>/g, '<FadeIn delay={0.1}>');
    
    // Attempting to close tags (will need manual fix up)
    // Actually, since I replaced `<section` with `<FadeIn`, I must replace the matching `</section>` with `</FadeIn>`.
    // It's safer to just do it manually if there are errors, but let's see.
    // For now I'll just write the content out. I will run `tsc` afterwards to catch mismatched JSX tags.
    fs.writeFileSync(f, content);
});

console.log("Done");
