#!/bin/sh
set -e

# First, we set up some git stuff
git config --global user.email "no-reply@manywho.com"
git config --global user.name "Boomi Flow"
git clone $GIT_ORIGIN .

# Then we generate the static HTML
redoc-cli bundle https://flow.manywho.com/swagger/v1/swagger.json --output=index.html --title="Boomi Flow API Documentation" --options.nativeScrollbars --options.theme.colors.main=#007db8 --options.noAutoAuth --options.lazyRendering --options.requiredPropsFirst --options.suppressWarning

# Now we can commit and push
git add index.html && git commit -m "Updated documentation"
git push
