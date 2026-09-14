@echo off
title Java Practice Compiler & Test Bench
echo ========================================================
echo   Launching Java Practice Compiler & Test Bench
echo ========================================================
echo.

set PORT=2090
start http://localhost:2090
python server.py

pause
