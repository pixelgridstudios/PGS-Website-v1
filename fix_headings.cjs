const fs = require('fs');
const path = require('path');

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
    
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('font-display')) {
        let isMainHeading = false;
        
        if (lines[i].includes('text-6xl') || lines[i].includes('text-8xl')) {
          isMainHeading = true;
        } 
        else if (lines[i].includes('text-4xl') && !lines[i].includes('text-2xl') && !lines[i].includes('text-lg')) {
          isMainHeading = true;
        }

        if (isMainHeading) {
          lines[i] = lines[i].replace('font-display', 'font-serif');
        }
      }
    }
    
    content = lines.join('\n');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
