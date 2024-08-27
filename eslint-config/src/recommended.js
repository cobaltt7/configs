/** @file Typescript-related overrides pulled out into a separate file to avoid circular extends. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: require.resolve("./_recommended.js"),

	overrides: [
		{ extends: require.resolve("./typescript.js"), files: "**.ts" },
		{ extends: require.resolve("./vue.js"), files: "**.vue" },
	],

	parserOptions: { extraFileExtensions: [".vue", ".cjs", ".mjs", ".html"] },

	rules: {
		"@typescript-eslint/member-ordering": [
			2,
			{
				default: {
					optionalityOrder: "optional-first", // TODO: https://github.com/typescript-eslint/typescript-eslint/issues/6267
					order: "natural-case-insensitive",
				},
			},
		],

		"@typescript-eslint/naming-convention": 0,

		// Already covered by `fp/no-delete`.
		"@typescript-eslint/no-dynamic-delete": 0,
	},

	settings: { jsdoc: { mode: "typescript" } },
};

module.exports = config;
