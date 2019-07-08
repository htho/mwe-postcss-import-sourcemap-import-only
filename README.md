# mwe-postcss-import-sourcemap-import-only

Minimally working example for postcss-import where a file that only includes import lines is not represented in the sourcemap.

## setup

```sh
npm i
```

## Working Test (with dummy comment)

```sh
npm run postcss-ok
```

Open [test.html](test.html) in your browser.

The dev-tools will show a file named style-withcomment.css
In the file, there is the dummy comment, and the import statements.

## Failing Test (without dummy comment)

```sh
npm run postcss-nok
```

Open [test.html](test.html) in your browser.

The dev-tools will not show a file named style-withoutcomment.css
