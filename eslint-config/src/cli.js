/** @file CLI-specific rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: require.resolve("./node.js"),
	parserOptions: { ecmaVersion: 2021 },
	rules: { "fp/no-throw": 0, "no-console": 0 },
};

module.exports = config;
