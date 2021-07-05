# Changelog

We use sematic versioning (SemVer). [More information here](https://semver.org/).

## [v1.1.1](https://www.npmjs.com/package/@onedotprojects/eslint-plugin/v/1.1.1) - **Latest**

-   Add a changelog.
-   Disable ignoring default folders.
-   Start reporting errors on long comments again, but be a little more lax (reverts part of
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
