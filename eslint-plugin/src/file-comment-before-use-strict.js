/** @file Ensures that, if present, `use strict` directives always come after `@file` comments, and ensures consistent spacing around them. */
"use strict";

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
	create: (context) => {
		const sourceCode = context.getSourceCode();

		const comments = sourceCode.getAllComments();

		if (comments[0]?.loc?.start.line === 1 && !comments[0].value.match(/(?:^| )\* @file/)) {
			context.report({
				loc: comments[0].loc,

				message: `First comment is not a @file comment.`,
			});
		}
		return {
			ExpressionStatement(node) {
				const { expression, loc } = node;

				if (expression.type !== "Literal" || expression.value !== "use strict") return;
				const preStrictComments = sourceCode.getCommentsBefore(node);

				preStrictComments.forEach((comment, index) => {
					const supposedNextLine = (comment.loc?.end.line || 0) + 1;
					const actualNextLine =
						(preStrictComments[index + 1]?.loc || loc)?.end.line || supposedNextLine;

					if (supposedNextLine !== actualNextLine) {
						context.report({
							fix(fixer) {
								return fixer.removeRange([
									sourceCode.getIndexFromLoc({
										column: 0,
										line: supposedNextLine,
									}),
									sourceCode.getIndexFromLoc({
										column: 0,
										line: actualNextLine,
									}),
								]);
							},
							loc: {
								end: { column: 0, line: actualNextLine },
								start: { column: 0, line: supposedNextLine },
							},

							message: `Unexpected blank line between comment${
								preStrictComments[index + 1] ? "s" : " and use strict directive"
							}.`,
						});
					}
				});

				const firstCode = sourceCode.getTokenAfter(node);

				if (!firstCode) return;

				const codeStartLine = firstCode.loc.end.line;
				const preCodeComments = sourceCode.getCommentsBefore(firstCode);
				const actualStartLine =
					preCodeComments[preCodeComments.length - 1]?.loc?.start?.line || codeStartLine;
				const supposedStartLine = (loc?.end.line || 1) + 2;

				if (supposedStartLine > actualStartLine) {

					context.report({
						fix(fixer) {
							return fixer.insertTextAfter(node, "\n");
						},

						loc: {
							end: { column: 0, line: actualStartLine },
							start: { column: 0, line: supposedStartLine },
						},

						message:
							"Expected one blank line between use strict directive and start of code.",
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
