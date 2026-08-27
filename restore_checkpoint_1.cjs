// Automated Restore Script for Checkpoint 1
const fs = require('fs');
const path = require('path');

const backupSource = 'C:\\Users\\ASUS\\.gemini\\antigravity\\scratch\\checkpoints\\checkpoint_1';
const projectTarget = 'C:\\Users\\ASUS\\.gemini\\antigravity\\scratch\\pixelgrid-studios';

const excludeList = ['node_modules', 'dist', '.checkpoints', '.git', 'CHECKPOINT_MANIFEST.json'];

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);
  files.forEach(file => {
    if (excludeList.includes(file)) return;
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);
    if (fs.lstatSync(curSource).isDirectory()) {
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  });
}

console.log('Restoring Checkpoint 1 into ' + projectTarget + '...');
copyFolderRecursiveSync(backupSource, projectTarget);
console.log('Checkpoint 1 restored successfully!');
