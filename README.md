# Rollup issue typescript watcher

Steps to reproduce:

1. `yarn`
1. `yarn start`
1. Open `src/test-1.ts` file:
   1. Comment out the first line (`// export default (a: number, b: number): number => {`)
   1. Save the file
1. Watch mode exits with exit code 1 \*

\* Doing the same steps with `src/test-2.js` doesn't break the watch mode

**UPDATE**: `typescript({ noEmitOnError: false })` in `rollup.config.js` is mandatory for watch mode to work.
