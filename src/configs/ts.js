"use strict";

/** @file TypeScript-Specific rules. */

module.exports = {

	"extends": [
		"hardcore/ts",
		"plugin:@redguy12/esm"
	],
	"rules":{
		"jsdoc/require-jsdoc": 0,
		"@typescript-eslint/no-namespace": 0,
		"@typescript-eslint/consistent-type-definitions": 0,
		"etc/prefer-interface": 0,
		"no-duplicate-imports": 0,}
}
