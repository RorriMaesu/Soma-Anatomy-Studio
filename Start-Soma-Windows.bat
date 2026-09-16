@echo off
cd /d "%~dp0"
where py >nul 2>nul
if not errorlevel 1 (
  py -3 start_studio.py
) else (
  python start_studio.py
)
pause
