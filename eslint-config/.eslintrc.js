/** @file ESLint Configuration file. */
"use strict";

const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [
		require.resolve("./src/configs/recommended.js"),
		require.resolve("./src/configs/cli.js"),
	],

	overrides: [
		{
			extends: require.resolve("./src/configs/config.js"),
			files: ["src/configs/*.js", "prettier-config/*.js"],
		},
		{
			files: "!**.md/*",
			parserOptions: { project: "./jsconfig.json", ecmaVersion: 2021 },
		},
	],

	root: true,
};

module.exports = config;
