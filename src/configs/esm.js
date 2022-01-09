/** @file ESM-specific Rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	env: { es6: true },
	parserOptions: { sourceType: "module" },

	rules: {
		"id-match": [
			2,
			/^_?(?:[A-Za-z]+|(?:[A-Z]+_){1,2})$/.source,
			{
				ignoreDestructuring: false,
				onlyDeclarations: false,
				properties: true,
			},
		],

		"import/exports-last": 0,
		"import/extensions": [2, "ignorePackages", { ts: "never", tsx: "never" }],
		"import/no-commonjs": 2,
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

		"node/file-extension-in-import": 0,
		"node/no-missing-import": 0,
		"sort-imports": 0,
	},
};

module.exports = config;
