/** @file Typescript-related Overrides pulled out into a seperate file to avoid circular extends. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [require("path").resolve(__dirname, "./_recommended.js")],

	overrides: [
		{ extends: ["plugin:@redguy12/typescript"], files: ["**.ts"] },
		{
			files: ["!**.md/*"],
			parserOptions: { project: "./jsconfig.json" },
		},
		{ extends: ["plugin:@redguy12/vue"], files: ["**.vue"] },
	],

	parserOptions: { extraFileExtensions: [".vue", ".cjs", ".mjs"] },
	rules: { "@typescript-eslint/no-empty-function": 0 },
};

module.exports = config;
