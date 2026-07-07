@echo off
cd /d "%~dp0"
echo Starting The AI Room website...
echo.
echo Keep this window open while checking the website.
echo URL: http://127.0.0.1:5173
echo.
npm.cmd run dev -- --host 127.0.0.1
pause
