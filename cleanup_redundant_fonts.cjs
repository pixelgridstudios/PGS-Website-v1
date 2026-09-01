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
    
    // Clean up redundancies created by merging custom sizes
    content = content.replace(/text-xs sm:text-xs/g, 'text-xs');
    content = content.replace(/text-sm sm:text-sm/g, 'text-sm');
    content = content.replace(/text-base sm:text-base/g, 'text-base');
    content = content.replace(/text-lg sm:text-lg/g, 'text-lg');
    content = content.replace(/sm:text-sm md:text-sm/g, 'sm:text-sm');
    content = content.replace(/sm:text-base md:text-base/g, 'sm:text-base');
    content = content.replace(/sm:text-lg md:text-lg/g, 'sm:text-lg');

    // Home.tsx had 'text-sm sm:text-base md:text-base lg:text-lg xl:text-lg'
    content = content.replace(/md:text-base lg:text-lg xl:text-lg/g, 'md:text-base lg:text-lg');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Cleaned ' + filePath);
    }
  }
});
