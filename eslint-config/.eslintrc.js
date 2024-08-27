/** @file ESLint configuration file. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [require.resolve("./src/recommended.js"), require.resolve("./src/config.js")],

	overrides: [
		{
			files: "!**.md/*",
			parserOptions: { project: require.resolve("./jsconfig.json") },
		},
	],

	parserOptions: { ecmaVersion: 2021 },
	root: true,
};

module.exports = config;
