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
    
    // specifically target responsive pairs first to avoid collisions
    content = content.replace(/text-\[13px\] sm:text-sm/g, 'text-sm sm:text-[15px]');
    content = content.replace(/text-xs sm:text-\[13px\]/g, 'text-[13px] sm:text-sm');
    content = content.replace(/text-xs sm:text-sm/g, 'text-[13px] sm:text-[15px]');

    // then standalone occurrences not preceded by sm:, md:, lg:, etc.
    // Negative lookbehind doesn't work in older JS, but we can do a regex that captures the preceding char
    // Actually, just replace all remaining text-[13px] and text-xs, since we don't have other responsive breakpoints for these
    content = content.replace(/(?<!sm:|md:|lg:|xl:|2xl:)text-\[13px\]/g, 'text-sm');
    content = content.replace(/(?<!sm:|md:|lg:|xl:|2xl:)text-xs/g, 'text-[13px]');
    
    // Also bump any sm:text-xs left over
    content = content.replace(/sm:text-xs/g, 'sm:text-[13px]');
    content = content.replace(/sm:text-\[13px\]/g, 'sm:text-sm');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
