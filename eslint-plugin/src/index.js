/** @file ESLint configuration file. */
"use strict";

const plugin = {
	rules: {
		"file-comment-before-use-strict": require("./file-comment-before-use-strict.js"),
		"html-file-comment": require("./html-file-comment.js"),
	},
};

module.exports = plugin;
