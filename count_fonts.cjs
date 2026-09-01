const fs = require('fs');
const path = require('path');

let fonts = new Set();

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
    // match text-<size> but ignore text-brand, text-white, text-center, text-neutral, etc.
    let matches = content.match(/text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|\[\d+(px|vw)\])/g);
    if (matches) {
      matches.forEach(m => fonts.add(m));
    }
  }
});

console.log('Unique Font Size Classes used in src directory:');
console.log(Array.from(fonts).sort());
