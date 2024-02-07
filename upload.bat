@echo off
:a
git add .
git commit -m "updated"
git pull
git push

timeout /t 60
goto a