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
    content = content.replace(/text-\[10px\]/g, 'text-xs');
    content = content.replace(/text-\[11px\]/g, 'text-[13px]');
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
