# Changelog

We use sematic versioning (SemVer). [More information here](https://semver.org/).

## [v1.2.1](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.1) - **Latest**

-   Fix typo causing a crash.

## [v1.2.0](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.0)

-   Don't allow importing dependencies not specified in `package.json#dependecies`.
-   Fix `sourceType: "module"` crashing the plugin.
-   Don't report errors on `node:` modules (didn't work in 1.1.3).
-   Disable rules related to imports:
    -    `node/no-unsupported-features/es-syntax` (it is supported).
    -   `import/exports-last` (I don't care).
    -   `import/no-relative-parent-imports` (I don't care).
    -   `node/file-extension-in-import` (conflicts with `import/extensions`).
-   Reorder overrides.
-   Fix typos in CHANGELOG.md and README.md.
-   Update .gitignore.

## [v1.1.3](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.3)

-   Rename `mjs` config to `esm` - better name.
-   Always add `index` and the file extention to the end of imports.
-   Add `sourceType: "module"` to ESM config.
-   Don't report errors on `node:` modules.
-   Disable `sort-keys-fix` and enable `sort-keys`.
-   Disable `sort-imports` and configure `import/sort`.
-   Bump `eslint-plugin-regexp`.
-   Add `npm-shrinkwrap.json`.

## [v1.1.2](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.2)

-   Rename `ejs` config to `mjs` - oops!
-   Actaully disable `unicorn/escape-case` (didn't work in v1.0.3)
-   Allow `__filename` and `__dirname` variable names.

## [v1.1.1](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.1)

-   Add a changelog.
-   Disable ignoring default folders.
-   Start reporting errors on long comments again, but be a little laxer (reverts part of
    [`6ae53f3`](https://github.com/onedotprojects/eslint-plugin/commit/6ae53f3086ef0c0a021d9255c8ba08d7e4fdd12d)).
-   Ignore tabs when checking line length.
-   Fix crash in `max-len` configuration.

## [v1.1.0](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.0)

-   Fix PascelCased variable names reporting errors (We use camelCase for most variables, but
    PascelCase for class names).
-   Fix variables named `_` reporting errors.
-   Report unconventional variable names in more situations.
-   Stop reporting errors on long comments.
-   Format code with Prettier.
-   Lint code with ESLint.

## [v1.0.4](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.4)

-   Fix a typo (regressed by
    [`f3c6515`](https://github.com/onedotprojects/eslint-plugin/commit/f3c651573d60854851482a2491a4f767a9159009)).

## [v1.0.3](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.3)

-   Disable rules related to regular expressions:
    -   `unicorn/escape-case` (conflicts with `regexp/letter-case`).
    -   `regexp/no-super-linear-backtracking` (I have no idea how I could fix these errors).
    -   `regexp/no-super-linear-move` (ditto).

## [v1.0.2](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.2)

-   Bump dependencies.

## [v1.0.1](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.1)

-   Add a forgotten dependency.

## [v1.0.0](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.0)

-   Initial commit.
