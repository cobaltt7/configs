/** @file Ensures files start with a HTML-style `@file` comment. */
"use strict";

const { extname } = require("path");

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
	create(context) {
		if (extname(context.getPhysicalFilename()) === ".js")
			context.report({ loc: { column: 0, line: 0 }, message: "Expected a TypeScript file." });

		return {};
	},

	meta: { type: "suggestion" },
};

module.exports = rule;
