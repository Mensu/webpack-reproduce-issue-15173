# Steps to reproduce the bug

1. install dependencies

```sh
npm install
```

2. build the project

```sh
npm run build
```

3. search for `"moduleAB"` in the `dist` folder, and find out module `src/moduleAB.js` was bundled into chunk `dist/entryA.js`, chunk `dist/entryB.js` (entrypoint chunks, which is expected) and chunk `dist/commonAsync.js` (async chunks, which is unexpected)

Module `src/moduleAB.js` is statically imported by entrypoint modules `src/entryA.js` and `src/entryB.js`, therefore is available in entrypoint chunks `dist/entryA.js` and `dist/entryB.js`. Since `dist/commonAsync.js` is an async chunk, the factory of module `src/moduleAB.js` must have been available in the entrypoint chunks when we are to load `dist/commonAsync.js`, therefore it seems unnecessary to duplicately bundle `src/moduleAB.js` into `dist/commonAsync.js`.
