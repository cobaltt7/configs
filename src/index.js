"use strict";

/** @file ESLint Configuration file. */

module.exports = {
	configs: {
		browser: require("./browser.js"),

		cli: require("./cli.js"),

		config: require("./config.js"),

		esm: require("./esm.js"),

		node: require("./node.js"),

		recommended: require("./recommended.js"),

		sample: require("./sample.js"),
	},
};
