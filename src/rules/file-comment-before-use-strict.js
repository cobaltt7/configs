/**
 * @file Ensures That, if present, `use strict` directives always come after `@file` comments, and
 *   ensures consistent spacing around them.
 * @todo Autofix (PRs welcome)
 */
"use strict";

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
	create: (context) => {
		const sourceCode = context.getSourceCode();

		return {
			ExpressionStatement(node) {
				const { expression, loc } = node;

				if (expression.type !== "Literal" || expression.value !== "use strict") return;

				const commentsBefore = sourceCode.getCommentsBefore(node);

				if (commentsBefore.length === 1) {
					const supposedStrictLine = (commentsBefore[0]?.loc?.end.line || 0) + 1;
					const actualStrictLine = loc?.end.line || 0;

					if (supposedStrictLine !== actualStrictLine) {
						context.report({
							loc: {
								end: { column: 0, line: actualStrictLine },
								start: { column: 0, line: supposedStrictLine },
							},

							message:
								"Unexpected blank line between @file comment and use strict directive",
						});
					}

					const codeStartLine = sourceCode.getTokenAfter(node)?.loc.end.line || 0;

					if (actualStrictLine + 2 > codeStartLine) {
						context.report({
							loc: {
								end: { column: 0, line: codeStartLine },
								start: { column: 0, line: actualStrictLine + 2 },
							},

							message:
								"Expected one blank line between use strict directive and start of code",
						});
					}
				} else {
					context.report({
						message: "Expected a single comment before the use strict directive",
						node,
					});
				}
			},
		};
	},
};

module.exports = rule;
