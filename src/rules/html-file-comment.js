/** @file Ensures Files start with a HTML-style `@file` comment. */
"use strict";

const { readFileSync } = require("fs");

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
	create(context) {
		/**
		 * Report a message at the start of the file.
		 *
		 * @param {string} message - Message to report.
		 *
		 * @returns {void}
		 */
		function report(message) {
			context.report({
				loc: { column: 0, line: 0 },
				message,
			});
		}

		const file = readFileSync(context.getPhysicalFilename(), "utf8");
		const match = /^<!--\s@file .+\s-->/su.exec(file)?.[0];

		if (!match) {
			report("Expected file to start with a @file comment.");

			return {};
		}

		if ((match.match(/-->/g)?.length || 0) <= 1) {
			report("Expected file to start with a single comment.");

			return {};
		}

		if (!file.split("-->")[1]?.startsWith("\n\n<template>")) {
			report(
				"Expected a single blank line between the @file comment and the opening <template> tag at start of file.",
			);

			return {};
		}

		return {};
	},
};

module.exports = rule;
