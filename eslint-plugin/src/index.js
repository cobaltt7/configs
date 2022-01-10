/** @file ESLint Plugin configuration file. */
"use strict";

/** @type {import("../types").Plugin} */
const plugin = {
	configs: {
		browser: require("./configs/browser.js"),
		cli: require("./configs/cli.js"),
		config: require("./configs/config.js"),
		esm: require("./configs/esm.js"),
		node: require("./configs/node.js"),
		recommended: require("./configs/recommended.js"),
		sample: require("./configs/sample.js"),
		typescript: require("./configs/typescript.js"),
		vue: require("./configs/vue.js"),
	},

	rules: {
		"file-comment-before-use-strict": require("./rules/file-comment-before-use-strict.js"),
		"html-file-comment": require("./rules/html-file-comment.js"),
	},
};

module.exports = plugin;
