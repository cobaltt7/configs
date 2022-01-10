/**
 * @file Ensures That, if present, `use strict` directives always come after `@file` comments, and
 *   ensures consistent spacing around them.
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
						const beforeStrict = {
							end: { column: 0, line: actualStrictLine },
							start: { column: 0, line: supposedStrictLine },
						};

						context.report({
							fix(fixer) {
								return fixer.removeRange([
									sourceCode.getIndexFromLoc({
										column: 0,
										line: supposedStrictLine,
									}),
									sourceCode.getIndexFromLoc({
										column: 0,
										line: actualStrictLine,
									}),
								]);
							},

							loc: beforeStrict,

							message:
								"Unexpected blank line between @file comment and use strict directive",
						});
					}

					const firstCode = sourceCode.getTokenAfter(node);

					if (!firstCode) {
						context.report({
							loc: { column: 0, line: 0 },
							message: "File has no content.",
						});

						return;
					}

					const codeStartLine = firstCode?.loc.end.line || 0;

					const commentStartLine =
						sourceCode.getCommentsBefore(firstCode)?.at(-1)?.loc?.end.line ||
						codeStartLine;

					if (actualStrictLine + 2 > commentStartLine) {
						const beforeCode = {
							end: { column: 0, line: commentStartLine },
							start: { column: 0, line: actualStrictLine + 2 },
						};

						context.report({
							fix(fixer) {
								return fixer.insertTextAfter(node, "\n");
							},

							loc: beforeCode,

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

	meta: {
		fixable: "whitespace",
		type: "layout",
	},
};

module.exports = rule;
