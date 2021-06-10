Boomi Flow API Documentation
============================

This repository contains the API documentation for the Boomi Flow platform. You probably want to [view the documentation here](https://manywho.github.io/docs-api/).

## Updating sections of the API documentation

### Info section description
* Create a description.md file within the docs/info directory.

### Tags section descriptions
* Create a directory inside the docs/tags directory that matches the tag name (eg. "`Admin States`").
* Create a description.md file inside the directory.

### Paths section summaries and descriptions
* Create a directory inside the docs/paths directory that matches the path url, substituting `/` with `~` characters (eg. "`api~admin~1~organization~runtimes~{id}`").
* For each method implemented on the endpoint create a directory that matches the method name (eg. "`get`" or "`post`"). 
* Create a summary.md or description.md file inside the directory.

## Updating the html document
run `npm install` and `npm run build` in the root directory.

## Publish changes
Commit and push changes on the master branch.