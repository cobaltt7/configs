/** @file ESLint Configuration file. */
"use strict";

module.exports = {
	extends: ["./src/configs/recommended.js", "./src/configs/node.js", "./src/configs/config.js"],
	root: true,
	parserOptions: { project: "./package.json", },
};
