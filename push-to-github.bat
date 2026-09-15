@echo off
echo Setting up Git and GitHub CLI...
set "PATH=C:\Users\subha\.gemini\antigravity\scratch\MinGit\cmd;C:\Users\subha\.gemini\antigravity\scratch\gh\bin;%PATH%"

if not exist ".git" (
    echo Initializing local Git repository...
    git init
    git remote add origin https://github.com/pixelgridstudios/PGS-Website-v1.git
)

echo.
echo --------------------------------------------------
echo AUTHENTICATING WITH GITHUB
echo --------------------------------------------------
echo The GitHub CLI will now prompt you to log in so we can push safely.
echo Recommend selecting: "GitHub.com" -^> "HTTPS" -^> "Login with a web browser"
echo.
gh auth login --hostname github.com -p https

echo.
echo --------------------------------------------------
echo COMMITTING CHANGES
echo --------------------------------------------------
git add .
git config user.name "Pixel Grid Studios"
git config user.email "hello@pixelgridstudios.com"
git commit -m "Apply redesign and minimal layout updates"

echo.
echo --------------------------------------------------
echo PUSHING TO GITHUB
echo --------------------------------------------------
git branch -M main
git push -u origin main

echo.
echo Done! Your updates have been successfully pushed to GitHub.
pause
