@echo %off
FOR /L %%A IN (1,1,200) DO (
  bundle exec jekyll build --no-watch
  pause
)