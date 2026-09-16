const fs = require('fs');
const path = require('path');

const replacements = {
  'Â·': '·',
  'â€“': '-',
  'â€”': '—',
  'â† ': '← ',
  'â†“': '↓',
  'Â©': '©',
  'â€': ''
};

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      walk(file);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      let content = fs.readFileSync(file, 'utf8');
      let changed = false;
      
      for (const [bad, good] of Object.entries(replacements)) {
        if (content.includes(bad)) {
          content = content.split(bad).join(good);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed ' + file);
      }
    }
  });
}
walk('src');
