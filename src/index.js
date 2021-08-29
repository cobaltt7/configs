"use strict";

/** @file ESLint Configuration file. */

module.exports = {
	configs: {
		browser: require("./configs/browser.js"),

		cli: require("./configs/cli.js"),

		config: require("./configs/config.js"),

		esm: require("./configs/esm.js"),

		node: require("./configs/node.js"),

		recommended: require("./configs/recommended.js"),

		sample: require("./configs/sample.js"),
	},
};
