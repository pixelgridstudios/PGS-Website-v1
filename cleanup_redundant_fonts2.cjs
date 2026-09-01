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
    content = content.replace(/text-2xl sm:text-2xl/g, 'text-2xl');
    content = content.replace(/text-4xl sm:text-4xl/g, 'text-4xl');
    content = content.replace(/text-6xl sm:text-6xl/g, 'text-6xl');
    content = content.replace(/text-8xl sm:text-8xl/g, 'text-8xl');
    
    content = content.replace(/sm:text-sm md:text-sm/g, 'sm:text-sm');
    content = content.replace(/sm:text-base md:text-base/g, 'sm:text-base');
    content = content.replace(/sm:text-lg md:text-lg/g, 'sm:text-lg');
    content = content.replace(/sm:text-2xl md:text-2xl/g, 'sm:text-2xl');
    content = content.replace(/sm:text-4xl md:text-4xl/g, 'sm:text-4xl');
    content = content.replace(/sm:text-6xl md:text-6xl/g, 'sm:text-6xl');
    content = content.replace(/sm:text-8xl md:text-8xl/g, 'sm:text-8xl');

    content = content.replace(/md:text-lg lg:text-lg/g, 'md:text-lg');
    content = content.replace(/md:text-2xl lg:text-2xl/g, 'md:text-2xl');
    content = content.replace(/md:text-4xl lg:text-4xl/g, 'md:text-4xl');
    content = content.replace(/md:text-6xl lg:text-6xl/g, 'md:text-6xl');
    content = content.replace(/md:text-8xl lg:text-8xl/g, 'md:text-8xl');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Cleaned ' + filePath);
    }
  }
});
