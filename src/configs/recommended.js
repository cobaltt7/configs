"use strict";

/** @file Recomended Rules. */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	extends: [require("path").resolve(__dirname, "./_recommended.js")],

	overrides: [
		{
			"files": [
				"*.ts",
				"**.ts"
			],
			"extends": ["plugin:@redguy12/ts"],
		},
	],

	parserOptions: {
		"extraFileExtensions": [".js",".ts",".jsx",".tsx",".vue",".cjs",".mjs"]
	},

	rules: {
		"@typescript-eslint/no-empty-function": 0,
	},
};
