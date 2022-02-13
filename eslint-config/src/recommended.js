/** @file Typescript-related Overrides pulled out into a seperate file to avoid circular extends. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: require.resolve("./_recommended.js"),

	overrides: [
		{ extends: require.resolve("./typescript.js"), files: "**.ts" },
		{
			files: "!**.md/*",
			parserOptions: { project: "./jsconfig.json" },
		},
		{ extends: require.resolve("./vue.js"), files: "**.vue" },
	],

	parserOptions: { extraFileExtensions: [".vue", ".cjs", ".mjs", ".json", ".html"] },
	rules: { "@typescript-eslint/no-empty-function": 0 },
};

module.exports = (config);
