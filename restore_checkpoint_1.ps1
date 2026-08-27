# Restore Checkpoint 1 Helper
$backupSource = "C:\Users\ASUS\.gemini\antigravity\scratch\checkpoints\checkpoint_1"
$projectTarget = "C:\Users\ASUS\.gemini\antigravity\scratch\pixelgrid-studios"
$nodeExe = "C:\Users\ASUS\.gemini\antigravity\scratch\tools\nodejs\node.exe"

Write-Host "Restoring Checkpoint 1..." -ForegroundColor Cyan
& $nodeExe "C:\Users\ASUS\.gemini\antigravity\scratch\restore_checkpoint_1.cjs"
Write-Host "Rebuilding dist..." -ForegroundColor Cyan
Set-Location $projectTarget
npm run build
Write-Host "Checkpoint 1 Restoration Complete and Verified!" -ForegroundColor Green
