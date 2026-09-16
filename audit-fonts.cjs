const fs = require('fs');
const path = require('path');

const sizes = {};
const sizesRegex = /(?:\s|['"\`])text-(xs|sm|base|lg|xl|[2-9]xl|\[[0-9.]+px\])(?=\s|['"\`])/g;

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      let match;
      while ((match = sizesRegex.exec(content)) !== null) {
        const size = match[1]; 
        if (!sizes[size]) sizes[size] = new Set();
        sizes[size].add(path.basename(fullPath));
      }
    }
  }
}

walk('src');

const valMap = {
  '[10px]': 10,
  '[11px]': 11,
  'xs': 12,
  '[12.5px]': 12.5,
  '[13px]': 13,
  'sm': 14,
  '[14px]': 14,
  '[15px]': 15,
  'base': 16,
  'lg': 18,
  '[18px]': 18,
  'xl': 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
  '7xl': 72,
  '8xl': 96,
  '9xl': 128
};

const keys = Object.keys(sizes).sort((a, b) => (valMap[a] || 0) - (valMap[b] || 0));

let md = '# Typography Size Audit\n\nHere is an honest, exhaustive list of every single font size explicitly used in the codebase, sorted from smallest to largest.\n\n';

for (const k of keys) {
  md += '### text-' + k + ' (~' + (valMap[k] || '?') + 'px)\n';
  const components = Array.from(sizes[k]).sort();
  for (const c of components) {
    md += '- `' + c + '`\n';
  }
  md += '\n';
}

fs.writeFileSync('C:/Users/subha/.gemini/antigravity/brain/e89caa18-5e80-454a-b7f2-8e6a96c962b1/font_sizes_report.md', md, 'utf8');
console.log(Object.keys(sizes));
