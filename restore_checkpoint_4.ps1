# PowerShell Script to restore Checkpoint 4
$backupSource = "C:\Users\ASUS\.gemini\antigravity\scratch\checkpoints\checkpoint_4"
$projectTarget = "C:\Users\ASUS\.gemini\antigravity\scratch\pixelgrid-studios"

Write-Host "Restoring Checkpoint 4 into $projectTarget..." -ForegroundColor Cyan

Get-ChildItem -Path $backupSource -Exclude "CHECKPOINT_MANIFEST.json" | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $projectTarget -Recurse -Force
}

Write-Host "Checkpoint 4 Restored Successfully!" -ForegroundColor Green
