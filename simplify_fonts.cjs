const fs = require('fs');
const path = require('path');

const mappings = [
  { regex: /text-\[12px\]/g, replace: 'text-xs' },
  { regex: /text-\[13px\]/g, replace: 'text-sm' },
  { regex: /text-\[14px\]/g, replace: 'text-sm' },
  { regex: /text-\[14\.5px\]/g, replace: 'text-sm' },
  { regex: /text-\[15px\]/g, replace: 'text-base' },
  { regex: /text-\[16px\]/g, replace: 'text-base' },
  { regex: /text-\[17\.5px\]/g, replace: 'text-lg' },
  { regex: /text-\[18px\]/g, replace: 'text-lg' },
  { regex: /text-\[18\.5px\]/g, replace: 'text-lg' },
  { regex: /text-\[44px\]/g, replace: 'text-5xl' }
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
