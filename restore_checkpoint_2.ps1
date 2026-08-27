# Restore Checkpoint 2 Helper
$backupSource = "C:\Users\ASUS\.gemini\antigravity\scratch\checkpoints\checkpoint_2"
$projectTarget = "C:\Users\ASUS\.gemini\antigravity\scratch\pixelgrid-studios"
$nodeExe = "C:\Users\ASUS\.gemini\antigravity\scratch\tools\nodejs\node.exe"

Write-Host "Restoring Checkpoint 2..." -ForegroundColor Cyan
& $nodeExe "C:\Users\ASUS\.gemini\antigravity\scratch\restore_checkpoint_2.cjs"
Write-Host "Rebuilding dist..." -ForegroundColor Cyan
Set-Location $projectTarget
npm run build
Write-Host "Checkpoint 2 Restoration Complete and Verified!" -ForegroundColor Green
