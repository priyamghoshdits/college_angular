@echo off
:a
git add .
git commit -m "updated"
git pull
git push

timeout /t 10
goto a