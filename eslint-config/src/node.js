/** @file Node-specific rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	env: { node: true },
	extends: ["plugin:node/recommended", "hardcore/node"],
	parserOptions: { ecmaVersion: 2021 },

	rules: {
		"id-match": [
			2,
			/^(?:[#_]?(?:(?:[A-Z]{2,}_){0,9}[A-Z]{2,}|(?:[A-Z](?:[a-z]|[A-Z])+|[a-z]{2,}){0,5})|__(?:dir|file)name)$/
				.source,
			{
				ignoreDestructuring: false,
				onlyDeclarations: false,
				properties: true,
			},
		],

		"no-unused-vars": [
			2,
			{
				args: "all",
				argsIgnorePattern: "_",
				caughtErrors: "all",
			},
		],

		"node/callback-return": 0,
		"node/exports-style": 2,
		"node/file-extension-in-import": [2, "always"],
		"node/global-require": 0,
		"node/handle-callback-err": 2,
		"node/no-callback-literal": 2,
		"node/no-missing-import": 0,
		"node/no-mixed-requires": 0,
		"node/no-new-require": 2,
		"node/no-path-concat": 2,
		"node/no-process-env": 0,
		"node/no-process-exit": 0,
		"node/no-restricted-import": 2,
		"node/no-restricted-require": 2,
		"node/no-sync": 0,
		"node/no-unpublished-require": 0,
		"node/no-unsupported-features/es-syntax": 0,
		"unicorn/escape-case": 0,
		"unicorn/no-hex-escape": 0,
		"unicorn/prefer-node-protocol": 0,

		"unicorn/prevent-abbreviations": [
			2,
			{
				allowList: { jQuery: true },
				checkDefaultAndNamespaceImports: true,
				checkProperties: true,
				checkShorthandImports: true,
				checkShorthandProperties: true,

				replacements: {
					cmd: { command: true },
					i18n: { internationalization: true },
					l10n: { localization: true },
					lang: { language: true },
					langs: { languages: true },
					msg: { message: true },
					msgs: { messages: true },
				},
			},
		],
	},
};

module.exports = config;
