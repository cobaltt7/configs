/** @file TypeScript-Specific rules. */
"use strict";

module.exports = {

	"extends": [
		"plugin:@redguy12/esm",
		"hardcore/ts",
	],
	"rules": {
		...require("./recommended.js").rules,
		"no-tabs":0,
		"jsdoc/require-jsdoc": 0,
		"@typescript-eslint/no-namespace": 0,
		"@typescript-eslint/consistent-type-definitions": 0,
		"etc/prefer-interface": 0,
		"no-duplicate-imports": 0,
	}
}
