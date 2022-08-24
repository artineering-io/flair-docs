@echo %off

:choice
set /P PROMPT=Build with drafts? [y/n]: 
if /I "%PROMPT%" equ "y" goto :drafts
if /I "%PROMPT%" equ "n" goto :serve
goto :choice

:drafts
FOR /L %%A IN (1,1,200) DO (
  bundle exec jekyll build --no-watch --drafts --trace
  pause
)

:serve
FOR /L %%A IN (1,1,200) DO (
  bundle exec jekyll build --no-watch
  pause
)