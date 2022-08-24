@echo %off

:choice
set /P PROMPT=Serve with drafts? [y/n]: 
if /I "%PROMPT%" equ "y" goto :drafts
if /I "%PROMPT%" equ "n" goto :serve
goto :choice

:drafts
bundle exec jekyll serve --baseurl '/' --incremental --drafts

:serve
bundle exec jekyll serve --baseurl '/' --incremental