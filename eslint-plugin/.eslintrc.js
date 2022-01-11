/** @file ESLint Configuration file. */
"use strict";

const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [
		path.resolve(__dirname, "./src/configs/recommended.js"),
		path.resolve(__dirname, "./src/configs/cli.js"),
	],

	ignorePatterns: ["eslint-types.js"],

	overrides: [
		{
			extends: [path.resolve(__dirname, "./src/configs/config.js")],
			files: ["src/configs/*.js", "prettier-config/*.js"],
		},
		{
			files: ["!**.md/*"],
			parserOptions: { project: "./jsconfig.json" },
		},
	],

	root: true,
};

module.exports = config;
