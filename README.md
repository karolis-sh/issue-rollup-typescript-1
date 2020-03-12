# Rollup issue typescript watcher

Steps to reproduce:

1. `yarn`
1. `yarn start`
1. Open `src/test-1.ts` file:
   1. Comment out first line (`// export default (a: number, b: number): number => {`)
   1. Save the file
1. Watch mode exit with exit code 1 \*

\* Doing the same steps with `src/test-2.ts` doesn't break the watch mode
