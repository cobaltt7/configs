/** @file Ensures files start with a HTML-style `@file` comment. */
"use strict";

const { readFileSync } = require("fs");

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
	create(context) {
		const file = readFileSync(context.getPhysicalFilename(), "utf8");
		const match = /^<!--\s@file .+?\s-->/su.exec(file)?.[0];

		if (!match) {
			context.report({
				loc: { column: 0, line: 0 },
				message: "Expected file to start with a @file comment.",
			});
		} else if (!file.split("-->")[1]?.startsWith("\n\n<template>")) {
			context.report({
				loc: { column: 0, line: 0 },
				message:
					"Expected a single blank line between the @file comment and the opening <template> tag at start of file.",
				// Todo: autofix
			});
		}

		return {};
	},

	meta: { type: "layout" },
};

module.exports = rule;
