const fs = require('fs');
const path = require('path');

const mappings = [
  { regex: /text-xl/g, replace: 'text-2xl' },
  { regex: /text-3xl/g, replace: 'text-4xl' },
  { regex: /text-5xl/g, replace: 'text-6xl' },
  { regex: /text-7xl/g, replace: 'text-8xl' }
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    mappings.forEach(m => {
      content = content.replace(m.regex, m.replace);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
