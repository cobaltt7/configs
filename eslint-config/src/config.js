/** @file Configuration File-specific rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: require.resolve("./cli.js"),

	rules: {
		"id-length": 0,
		"id-match": 0,

		"import/no-anonymous-default-export": [
			2,
			{
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowArray: false,
				allowArrowFunction: false,
				allowCallExpression: false,
				allowLiteral: false,
				allowObject: false,
			},
		],

		"import/no-extraneous-dependencies": [
			2,
			{
				bundledDependencies: false,
				devDependencies: true,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],

		"max-lines-per-function": 0,
		"unicorn/no-keyword-prefix": 0,
		"unicorn/prevent-abbreviations": 0,
	},
};

module.exports = (config);
