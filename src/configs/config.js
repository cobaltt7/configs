"use strict";

/** @file Configuration File-specific rules. */

module.exports = {
	extends: ["plugin:@redguy12/cli", "plugin:@redguy12/node"],
	rules: {
		"id-length": 0,
		"id-match": 0,

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
		"node/global-require": 0,
		"unicorn/no-keyword-prefix": 0,
		"unicorn/prevent-abbreviations": 0,
		"import/no-anonymous-default-export": [2, {
			"allowArray": false,
			"allowArrowFunction": false,
			"allowAnonymousClass": false,
			"allowAnonymousFunction": false,
			"allowCallExpression": false,
			"allowLiteral": false,
			"allowObject": false
		  }],
	},
};
