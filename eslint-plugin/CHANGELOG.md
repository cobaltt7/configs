# Changelog

We use semantic versioning (SemVer). [More information here](https://semver.org/).

## [v3.0.0](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/3.0.0) (2022-01-10) - **Latest**

### Core

- Transition from `@onedotprojects/eslint-plugin` to `@redguy12/eslint-plugin`.
- Require ESLint 8.
- Remove `@babel/eslint-parser`.
- Typecheck and lint the config.
- Rewrite the README.md.
- Fix typos in changelog.
- Add Typescript and Vue configurations.
- Simplify globbing patterns used.

### Recomended

- Disable `@html-eslint/eslint-plugin`, `eslint-plugin-compat`, and `eslint-plugin-json` plugins.
- Disable `etc/no-commented-out-code`, `fp/no-class`, `import/unambiguous`, `jsdoc/check-examples`, `jsdoc/require-description-complete-sentence`, `line-comment-position`, `node/global-require`, `node/no-unsupported-features/es-syntax`, `one-var`, `regexp/require-unicode-regexp`, `unicorn/no-await-expression-member`, and `unicorn/prefer-export-from`.
- Disable importing isomorphic-fetch without assigning.

- Require putting `import type ...` last in the imports.
- Make `fp/no-throw` a warning instead of an error.
- Make `function-call-argument-newline`, `multiline-comment-style`, `multiline-ternary`, `new-cap`, `unicorn/no-array-for-each`, and `unicorn/no-useless-undefined` errors instead of warnings.
- Update the regular expression used in the `id-match` rule.

- Allow importing CSS files without assigning again.
- Enable `prefer-destructuring` when assigning variables to items in arrays.
- Enable `@redguy12/html-file-comment`, `@redguy12/file-comment-before-use-strict`, `fp/no-let`, `import/no-anonymous-default-export`, `no-nested-await`, `object-curly-newline`, `promise/avoid-new`, `unicorn/no-empty-file`, `unicorn/prefer-code-point`, and `unicorn/template-indent`.
- Enable `hardcore/ts-for-js` config.
- Add `eslint-plugin-jsonc`.

### Browser

- Make `browser` extend `esm`.

### CLI

- Make `cli` extend `node`.

### Config

- Make `config` extend `cli`.
- Disable `id-match` in configuration files.
- Enable `import/no-anonymous-default-export` in configuration files.
- Allow importing peer and developer dependencies in configuration files.

### Sample

- Disable `no-labels` and `no-unused-labels` in sample files.

## [v2.2.1](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/2.2.1) (2021-09-08)

-   Make the changelog consistent.
-   Disallow importing `whatwg-fetch` without assigning.
-   Allow importing `isomorphic-fetch` without assigning.

# [2.2.0](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/2.2.0) (2021-09-06)

-   Make all peer dependencies required.
-   Remove `prettier-plugin-ini`.
-   Disable `max-lines-per-function` in configuration files.
-   Add `env: "es6"` to the ESM config.
-   Add the `node` config to configuration files automatically.
-   Disable `node/no-unsupported-features/es-syntax`
-   Disallow calling `typeof` on known undefined variables.
-   Allow importing `whatwg-fetch` without assigning, same for CSS files (for bundler users).
-   Allow empty `catch` blocks.
-   Disable `import/no-anonymous-default-export` and `import/no-namespace`.
-   Format source code.

## [2.1.0](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/2.1.1) (2021-08-29) - **Latest**

-   Fix typo.
-   Allow `_status` as a property name.
-   Update matches.
-   Revert "Remove `@babel/syntax-top-level-await`".
-   Update dependencies.
-   Create `src/configs` directory.
-   Remove `@babel/syntax-top-level-await`.
-   Disable `putout/putout` due to conflicts.
-   Update logo.
-   Update matches.
-   Enable `regexp/no-invalid-regexp`.
-   Disable `no-param-reassign` for `request` and `response`.
-   Update branding.
-   Remove `eslint-plugin-switch-case`.
-   Disable `putout/putout`'s `remove-nested-blocks`.
-   Disable `default-case`.
-   Update dependencies.

## [2.0.4](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/2.0.6) (2021-08-14) - **Latest**

-   Update logo used in the README.
-   Disable `import/no-unresolved` (conflicts with packages that specify paths to export, plus TS kinda takes care of it?).
-   Do not check for the existence of file extensions on package imports (conflicts with packages that specify paths to export).
-   Format code using Prettier.
-   Fix typo
-   Update matches for Markdown files.
-   Bump dependencies. Changes needed with the new versions:
  -   Enable `fp/no-throw` again.
  -   Explicitly configure `prefer-destructuring` instead of relying on `eslint-plugin-hardcore`'s settings.
  -   Add `i18n` and `l10n` to `unicorn/prevent-abbreviations`.

## [2.0.3](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/2.0.4) (2021-08-09)

-   Change many warnings to errors.
-   Bump maximum nesting level to 5.
-   Change the date format used in the changelog.
-   Update dependencies.
-   Bump maximum cognitive complexity to 15.

## [2.0.2](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/2.0.2) (2021-08-04)

-   Publish **all** the files (fix crash).

## [2.0.1](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/2.0.1) (2021-08-03)

-   Bump dependency.

## [2.0.0](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/2.0.0) (2021-08-03)

-   Make it modular.
-   Disable rules in sample files:
  -   `no-undef`
  -   `jsdoc/require-jsdoc`
  -   `import/no-unresolved`
  -   `import/unambiguous`
  -   `node/no-missing-import`
  -   `node/no-missing-require`
  -   `strict`
-   Remove `eslint-plugin-optimize-regex` and disable `unicorn/better-regex` in favor of `eslint-plugin-regexp`.
-   Fix errors being reported when `devDependencies` are imported in GitHub Actions.
-   Fix default files in the `esm` configuration.
-   Lint HTML in Markdown files.
-   Disable `indent` in favor of Prettier.
-   Add configuration to `jsdoc/check-examples`.
-   Disable `no-inline-comments` in favor of `line-comment-position`.
-   Disable `no-useless-escape` due to conflicts with `eslint-plugin-regexp`.
-   Disable Putout's `apply-numberic-separators` due to it being problemaic.
-   Disable `camelcase` in favor of `id-match`.
-   Disable `regexp/sort-character-class-elements` due to conflicts.
-   Disable `sonarjs/eslif-without-else` because I don't care.
-   Tweak `eslint-plugin-jsdoc` global configuration.
-   Lint code with Prettier.
-   Move to peer dependencies instead of relying upon the structure of `node_modules` too much.
-   Update docs.

## [v1.3.0](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.3.0) (2021-07-22)

-   Disable `unicorn/prevent-abbreviations` in configuration files.
-   Change some warnings to errors.
-   Rethink `import/order` configuration.
-   Add more abbreviations to `unicorn/prevent-abbreviations`.
-   Disable `unicorn/no-array-callback-reference` and `unicorn/no-array-reduce` because I don't care.

## [v1.2.7](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.2.7) (2021-07-12)

-   FOR THE LAST TIME, fix the crash.

## [v1.2.6](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.2.6) (2021-07-12)

-   Fix crash.

## [v1.2.5](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.2.5) (2021-07-12)

-   Fix the occasional crash.

## [v1.2.4](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.2.4) (2021-07-12)

-   Stop using `node:` modules (didn't work in v1.2.3).
-   Update `README.md`.
-   Fix crash.

## [v1.2.3](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.2.3) (2021-07-11)

-   Stop using `node:` modules.
-   Allow variables named `jQuery`.
-   Update dependencies.
-   Disable `node/callback-return` due to conflicts.
-   Add dates to the changelog.

## [v1.2.2](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.2.2) (2021-07-08)

-   Update prettier configuration.
-   Add more files to the default `config` and `cli` configurations.
-   Bump `eslint-plugin-hardcore`.
-   Move to `@babel/eslint-parser` for module top-level `await` support.
-   Disable `node/no-missing-import` (conflicts with `import/no-unresolved`).
-   Allow importing devDependencies in GitHub Actions.

## [v1.2.1](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.2.1) (2021-07-08)

-   Fix typo causing a crash.

## [v1.2.0](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.2.0) (2021-07-07)

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

## [v1.1.3](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.1.3) (2021-07-07)

-   Rename `mjs` config to `esm` - better name.
-   Always add `index` and the file extention to the end of imports.
-   Add `sourceType: "module"` to ESM config.
-   Don't report errors on `node:` modules.
-   Disable `sort-keys-fix` and enable `sort-keys`.
-   Disable `sort-imports` and configure `import/sort`.
-   Bump `eslint-plugin-regexp`.
-   Add `npm-shrinkwrap.json`.

## [v1.1.2](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.1.2) (2021-07-05)

-   Rename `ejs` config to `mjs` - oops!
-   Actaully disable `unicorn/escape-case` (didn't work in v1.0.3).
-   Allow `__filename` and `__dirname` variable names.

## [v1.1.1](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.1.1) (2021-07-05)

-   Add a changelog.
-   Disable ignoring default folders.
-   Start reporting errors on long comments again, but be a little laxer (reverts part of [`6ae53f3`](https://github.com/redguy12/eslint-plugin/commit/6ae53f3086ef0c0a021d9255c8ba08d7e4fdd12d)).
-   Ignore tabs when checking line length.
-   Fix crash in `max-len` configuration.

## [v1.1.0](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.1.0) (2021-07-04)

-   Fix PascelCased variable names reporting errors (We use camelCase for most variables, but PascelCase for class names).
-   Fix variables named `_` reporting errors.
-   Report unconventional variable names in more situations.
-   Stop reporting errors on long comments.
-   Format code with Prettier.
-   Lint code with ESLint.

## [v1.0.4](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.0.4) (2021-07-04)

-   Fix a typo (regressed by [`f3c6515`](https://github.com/redguy12/eslint-plugin/commit/f3c651573d60854851482a2491a4f767a9159009)).

## [v1.0.3](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.0.3) (2021-07-04)

-   Disable rules related to regular expressions:
  -   `unicorn/escape-case` (conflicts with `regexp/letter-case`).
  -   `regexp/no-super-linear-backtracking` (I have no idea how I could fix these errors).
  -   `regexp/no-super-linear-move` (ditto).

## [v1.0.2](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.0.2) (2021-07-04)

-   Bump dependencies.

## [v1.0.1](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.0.1) (2021-07-04)

-   Add a forgotten dependency.

## [v1.0.0](https://www.npmjs.com/package/@redguy12/eslint-plugin/v/1.0.0) (2021-07-03)

-   Initial commit.
