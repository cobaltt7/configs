# Changelog

We use semantic versioning (SemVer). [More information here](https://semver.org/).

## [v3.0.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.0.1) (2024-03-26)

-   Revert `printWidth` change

## [v3.0.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/3.0.0) (2024-03-21)

-   Use Prettier v3
-   Update various format options
-   Bump dependencies

## [v2.0.2](https://www.npmjs.com/package/@redguy12/prettier-config/v/2.0.2) (2022-11-27)

-   Bump prettier-plugin-packagejson and @types/prettier.

## [v2.0.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/2.0.1) (2022-11-26)

-   Bump Prettier and prettier-plugin-jsdoc.

## [v2.0.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/2.0.0) (2022-08-09) - **Latest**

Breaking change:

-   Replace `prettier-package-json` with `prettier-plugin-packagejson`.

Upgrade guide:

-   Uninstall `prettier-package-json` with `npm rm prettier-package-json`.
-   Remove the `prettier-package-json` field from your `package.json`.
-   Remove the `&& prettier-package-json --write` portion of the `lint:prettier` NPM script.

## [v1.2.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.2.0) (2022-07-29)

-   Version bump only.

## [v1.1.2](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.1.2) (2022-07-29)

-   Bump the `jsdocPrintWidth` to 140.
-   Enable `jsdocPreferCodeFences`.
-   Enable `--cache`.
-   Bump dependencies.
-   Format code.

## [v1.1.1](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.1.1) (2022-07-29)

-   Fix typo in README.
-   Update dependencies.
-   Fix crash.

## [v1.1.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.1.0) (2022-02-13)

-   Explicitly enable `embeddedLanguageFormatting`.
-   Always quote properties in JSONC files.
-   Parse all files under `.vscode/` as JSONC.
-   Encourage using alongside `prettier-package-json`.

## [v1.0.0](https://www.npmjs.com/package/@redguy12/prettier-config/v/1.0.0) (2022-01-10)

-   Initial release.
