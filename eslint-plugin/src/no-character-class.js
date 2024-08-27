/** @file Disallow using character classes in regular expressions. */
"use strict";

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
	create(context) {
		return {
			Literal(node) {
				if (node.value instanceof RegExp) {
					if (/(?:^|[^\\])\[\]|(?:.*?[^\\]\])/.test(node.value.source)) {
						context.report({ node, message: "Expected no character class." });
					}
				}
			},
		};
	},
	
	meta: { type: "problem" },
};

module.exports = rule;
