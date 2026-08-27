@echo off
set "PATH=C:\Users\ASUS\.gemini\antigravity\scratch\tools\nodejs;%PATH%"
cd /d "%~dp0"
echo Starting Pixel Grid Studios dev server...
npm run dev
pause