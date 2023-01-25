# Ecosystem Visualization

## A graph visualization of the Dat Community project ecosystem
It can be used for other ecosystems, but requires date in the format of https://github.com/dat-ecosystem/dat-garden-rake

### Running the visualization
To run the visualization in development mode:
```
npm install
npm start
```
It automatically opens the browser to show the page in development including live reload.

### Preparing visualization for production
To prepare the visualization for production mode to be able to display as a static website (e.g. github page)
```
npm run build # generates latest bundle.js
git add -A
git commit -m "updated visualization"
git push
```
