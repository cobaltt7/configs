/** @file CLI-specific Rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: require.resolve("./node.js"),
	parserOptions: { ecmaVersion: "latest" },
	rules: { "fp/no-throw": 0, "no-console": 0 },
};

module.exports = (config);
