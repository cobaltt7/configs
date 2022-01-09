/** @file CLI-specific Rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: ["plugin:@redguy12/node"],
	parserOptions: { ecmaVersion: "latest" },
	rules: { "fp/no-throw": 0, "no-console": 0 },
};

module.exports = config;
