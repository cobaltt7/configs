/** @file ESLint Configuration file. */
"use strict";
const path=require("path")
module.exports = {
	extends: [path.resolve(__dirname, "./src/configs/recommended.js"), path.resolve(__dirname, "./src/configs/node.js"), path.resolve(__dirname, "./src/configs/config.js")],
	root: true,
	parserOptions: { project: "./package.json", },
};
