# PowerShell Script to restore Checkpoint 3
$source = "C:\Users\ASUS\.gemini\antigravity\scratch\checkpoints\checkpoint_3"
$dest = "C:\Users\ASUS\.gemini\antigravity\scratch\pixelgrid-studios"

Write-Host "Restoring Checkpoint 3 into $dest..."
Get-ChildItem -Path $source -Recurse -Exclude "CHECKPOINT_MANIFEST.json" | ForEach-Object {
    $targetPath = $_.FullName.Replace($source, $dest)
    if ($_.PSIsContainer) {
        if (!(Test-Path $targetPath)) {
            New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
        }
    } else {
        Copy-Item -Path $_.FullName -Destination $targetPath -Force
    }
}
Write-Host "Checkpoint 3 restored successfully!" -ForegroundColor Green
