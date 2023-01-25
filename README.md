# Ecosystem Visualization

## A graph visualization of the Dat Community project ecosystem
It can be used for other ecosystems, but requires data in the format of https://github.com/dat-ecosystem/dat-garden-rake

### Running the visualization
To run the visualization in development mode:
```
npm install
npm run dev
```
Then open the URL given in your browser (usually http://localhost:5174/)

### Building and deploying to GitHub Pages
First set up a git worktree for the `gh-pages` branch.  This only needs to be done once:
```
rm -rf dist
git worktree add -B gh-pages dist origin/gh-pages
```
Build the static files to the `dist` directory:
```
npm run build
```
Now push to the `gh-pages` branch:
```
cd dist
git add -A
git commit
git push
```

