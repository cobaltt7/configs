/** @file ESM-specific rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	env: { es6: true },
	parserOptions: { sourceType: "module" },

	rules: {
		"id-match": [
			2,
			/^[#_]?(?:(?:[A-Z]{2,}_){0,9}[A-Z]{2,}|(?:[A-Z](?:[a-z]|[A-Z])+|[a-z]{2,}){0,5})$/
				.source,
			{
				ignoreDestructuring: false,
				onlyDeclarations: false,
				properties: true,
			},
		],

		"import/exports-last": 0,
		"import/no-commonjs": 2,
		"import/no-unassigned-import": [2, { allow: ["**/*.css"] }],
		"import/no-unresolved": 0,

		"import/order": [
			2,
			{
				"alphabetize": { caseInsensitive: true, order: "asc" },

				"groups": [
					"builtin",
					["object", "external"],
					["internal", "parent", "sibling", "index"],
					"type",
				],

				"newlines-between": "always",
			},
		],

		"sort-imports": 0,
		"strict": [2, "never"],
	},
};

module.exports = config;
