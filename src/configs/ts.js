"use strict";

/** @file TypeScript-Specific rules. */

module.exports = {

	"extends": [
		"hardcore/ts",
		"./_recommended.js",
		"plugin:@redguy12/esm"
	],
	"rules": {
		"no-tabs":0,
		"jsdoc/require-jsdoc": 0,
		"@typescript-eslint/no-namespace": 0,
		"@typescript-eslint/consistent-type-definitions": 0,
		"etc/prefer-interface": 0,
		"no-duplicate-imports": 0,}
}
