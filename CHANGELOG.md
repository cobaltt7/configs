# Changelog

We use sematic versioning (SemVer). [More information here](https://semver.org/).

## [2.0.3](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/2.0.3) (08/04/2021) - **Latest**

- Bump maximum cognetive complexity to 15.


## [2.0.2](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/2.0.2) (08/04/2021)

- Publish **all** the files (fix crash).

## [2.0.1](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/2.0.1) (08/03/2021)

- Bump dependency.

## [2.0.0](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/2.0.0) (08/03/2021)

- Make it modular.
-   Disable rules in sample files:
    - `no-undef`
    - `jsdoc/require-jsdoc`
    - `import/no-unresolved`
    - `import/unambiguous`
    - `node/no-missing-import`
    - `node/no-missing-require`
    - `strict`
- Remove `eslint-plugin-optimize-regex` and disable `unicorn/better-regex` in favor of `eslint-plugin-regexp`.
- Fix errors being reported when `devDependencies` are imported in GitHub Actions.
- Fix default files in the `esm` configuration.
- Lint HTML in Markdown files.
- Disable `indent` in favor of Prettier.
- Add configuration to `jsdoc/check-examples`.
- Disable `no-inline-comments` in favor of `line-comment-position`.
- Disable `no-useless-escape` due to conflicts with `eslint-plugin-regexp`.
- Disable Putout's `apply-numberic-separators` due to it being problemaic.
- Disable `camelcase` in favor of `id-match`.
- Disable `regexp/sort-character-class-elements` due to conflicts.
- Disable `sonarjs/eslif-without-else` because I don't care.
- Tweak `eslint-plugin-jsdoc` global configuration.
- Lint code with Prettier.
- Move to peer dependencies instead of relying upon the structure of `node_modules` too much.
- Update docs.

## [v1.3.0](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.3.0) (07/22/2021)

-   Disable `unicorn/prevent-abbreviations` in configuration files.
-   Change some warnings to errors.
-   Rethink `import/order` configuration.
-   Add more abbreviations to `unicorn/prevent-abbreviations`.
-   Disable `unicorn/no-array-callback-reference` and `unicorn/no-array-reduce` because I don't care.

## [v1.2.7](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.7) (07/12/2021)

-   FOR THE LAST TIME, fix the crash.

## [v1.2.6](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.6) (07/12/2021)

-   Fix crash.

## [v1.2.5](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.5) (07/12/2021)

-   Fix the occasional crash.

## [v1.2.4](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.4) (07/12/2021)

-   Stop using `node:` modules (didn't work in v1.2.3).
-   Update `README.md`.
-   Fix crash.

## [v1.2.3](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.3) (07/11/2021)

-   Stop using `node:` modules.
-   Allow variables named `jQuery`.
-   Update dependencies.
-   Disable `node/callback-return` due to conflicts.
-   Add dates to the changelog.

## [v1.2.2](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.2) (07/08/2021)

-   Update prettier configuration.
-   Add more files to the default `config` and `cli` configurations.
-   Bump `eslint-plugin-hardcore`.
-   Move to `@babel/eslint-parser` for module top-level `await` support.
-   Disable `node/no-missing-import` (conflicts with `import/no-unresolved`).
-   Allow importing devDependencies in GitHub Actions.

## [v1.2.1](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.1) (07/08/2021)

-   Fix typo causing a crash.

## [v1.2.0](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.2.0) (07/07/2021)

-   Don't allow importing dependencies not specified in `package.json#dependecies`.
-   Fix `sourceType: "module"` crashing the plugin.
-   Don't report errors on `node:` modules (didn't work in v1.1.3).
-   Disable rules related to imports:
    -   `node/no-unsupported-features/es-syntax` (it is supported).
    -   `import/exports-last` (I don't care).
    -   `import/no-relative-parent-imports` (I don't care).
    -   `node/file-extension-in-import` (conflicts with `import/extensions`).
-   Reorder overrides.
-   Fix typos in CHANGELOG.md and README.md.
-   Update .gitignore.

## [v1.1.3](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.3) (07/07/2021)

-   Rename `mjs` config to `esm` - better name.
-   Always add `index` and the file extention to the end of imports.
-   Add `sourceType: "module"` to ESM config.
-   Don't report errors on `node:` modules.
-   Disable `sort-keys-fix` and enable `sort-keys`.
-   Disable `sort-imports` and configure `import/sort`.
-   Bump `eslint-plugin-regexp`.
-   Add `npm-shrinkwrap.json`.

## [v1.1.2](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.2) (07/05/2021)

-   Rename `ejs` config to `mjs` - oops!
-   Actaully disable `unicorn/escape-case` (didn't work in v1.0.3).
-   Allow `__filename` and `__dirname` variable names.

## [v1.1.1](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.1) (07/05/2021)

-   Add a changelog.
-   Disable ignoring default folders.
-   Start reporting errors on long comments again, but be a little laxer (reverts part of [`6ae53f3`](https://github.com/onedotprojects/eslint-plugin/commit/6ae53f3086ef0c0a021d9255c8ba08d7e4fdd12d)).
-   Ignore tabs when checking line length.
-   Fix crash in `max-len` configuration.

## [v1.1.0](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.0) (07/04/2021)

-   Fix PascelCased variable names reporting errors (We use camelCase for most variables, but PascelCase for class names).
-   Fix variables named `_` reporting errors.
-   Report unconventional variable names in more situations.
-   Stop reporting errors on long comments.
-   Format code with Prettier.
-   Lint code with ESLint.

## [v1.0.4](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.4) (07/04/2021)

-   Fix a typo (regressed by [`f3c6515`](https://github.com/onedotprojects/eslint-plugin/commit/f3c651573d60854851482a2491a4f767a9159009)).

## [v1.0.3](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.3) (07/04/2021)

-   Disable rules related to regular expressions:
    -   `unicorn/escape-case` (conflicts with `regexp/letter-case`).
    -   `regexp/no-super-linear-backtracking` (I have no idea how I could fix these errors).
    -   `regexp/no-super-linear-move` (ditto).

## [v1.0.2](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.2) (07/04/2021)

-   Bump dependencies.

## [v1.0.1](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.1) (07/04/2021)

-   Add a forgotten dependency.

## [v1.0.0](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.0.0) (07/03/2021)

-   Initial commit.
