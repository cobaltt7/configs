# Changelog

We use semantic versioning (SemVer). [More information here](https://semver.org/).

## [v4.0.1](https://www.npmjs.com/package/@redguy12/eslint-config/v/4.0.1) (2022-02-13) - **Latest**

-   Update dependencies.

## [v1.0.0](https://www.npmjs.com/package/@redguy12/eslint-config/v/1.0.0) (2022-01-13)

-   Split `@redguy12/eslint-plugin` into `@redguy12/eslint-plugin` and `@redguy12/eslint-config`.
-   Ignore `vendor`, `lib-cov`, `coverage`, `.cache`, `tmp`, and `**/*.min.*`.
-   Disable `array-element-newline`, `consistent-return`, `fp/no-throw`, `implicit-arrow-linebreak`, `no-mixed-spaces-and-tabs`, `no-promise-executor-return`, `newline-per-chained-call`, `object-property-newline`, `promise/no-promise-in-callback`, `nonblock-statement-body-position`, `unicorn/no-nested-ternary`, and `unicorn/expiring-todo-comments`.
-   Ignore commented-out code in `capitalized-comments`.
-   Ignore consecutive line comments in `capitalized-comments`.
-   Enable `etc/no-commented-out-code` as a warning.
-   Count tabs in `max-len`.
-   Change the behavior of `object-curly-newline` to just make objects consistent.
-   Only enable `import/no-unassigned-import` in ESM.
-   Fix linting of JSON and HTML files
-   Disable TypeScript specific rules: `@typescript-eslint/no-confusing-void-expression` `@typescript-eslint/no-unsafe-argument`, `@typescript-eslint/no-unsafe-assignment`, `@typescript-eslint/no-unsafe-call`, `@typescript-eslint/no-unsafe-member-access`, `@typescript-eslint/no-unsafe-return`, `jsdoc/require-param-type`, `jsdoc/require-property-type`, `jsdoc/require-returns-type`, and `no-return-await`.
-   Enable `jsdoc/require-jsdoc`, `no-duplicate-imports`, and `jsdoc/no-types` in TypeScript files.
-   Indent Vue comments with tabs instead of spaces.
-   Allow users to use the config without installing all of its dependencies.
-   Enable `jsdoc/require-file-overview` in client-side code.
-   Disable `jsdoc/require-file-overview` in HTML and Vue files.
-   Update `@redguy12/eslint-plugin`.
-   Update environments to the newest.
-   Enable `jsdoc/no-multi-asterisks`, `jsdoc/valid-types`, `unicorn/better-regex`, and `unicorn/better-regex`.
-   Only look for JSDoc comments 2 lines above instead of 6.
-   Enable `vue/no-undef-components`, `vue/no-v-text-v-html-on-component`, `vue/object-shorthand`, and `vue/quote-props`.
