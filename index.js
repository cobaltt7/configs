"use strict";

/** @file ESLint Configuration file. */

const fileSystem = require("fs");

module.exports = {
	configs: {
		browser: {
			env: { browser: true, es2020: false, es6: false, node: false },
			extends: ["plugin:compat/recommended"],
			parserOptions: { ecmaVersion: 3 },

			rules: {
				"@html-eslint/id-naming-convention": [2, "kebab-case"],
				"@html-eslint/require-meta-charset": 2,
				"comma-dangle": 0,
				"jsdoc/require-file-overview": 0,
				"no-console": 2,

				"no-restricted-globals": [
					2,
					"addEventListener",
					"blur",
					"close",
					"closed",
					"confirm",
					"defaultStatus",
					"defaultstatus",
					"event",
					"external",
					"find",
					"focus",
					"frameElement",
					"frames",
					"history",
					"innerHeight",
					"innerWidth",
					"length",
					"location",
					"locationbar",
					"menubar",
					"moveBy",
					"moveTo",
					"name",
					"onblur",
					"onerror",
					"onfocus",
					"onload",
					"onresize",
					"onunload",
					"open",
					"opener",
					"opera",
					"outerHeight",
					"outerWidth",
					"pageXOffset",
					"pageYOffset",
					"parent",
					"print",
					"removeEventListener",
					"resizeBy",
					"resizeTo",
					"screen",
					"screenLeft",
					"screenTop",
					"screenX",
					"screenY",
					"scroll",
					"scrollbars",
					"scrollBy",
					"scrollTo",
					"scrollX",
					"scrollY",
					"self",
					"status",
					"statusbar",
					"stop",
					"toolbar",
					"top",
				],

				"prettier/prettier": 0,
			},
		},

		cli: {
			rules: {
				"fp/no-throw": 0,

				"no-console": 0,
			},
		},

		config: {
			rules: {
				"id-length": 0,
				"import/no-extraneous-dependencies": [
					2,
					{
						bundledDependencies: false,
						peerDependencies: false,
						optionalDependencies: false,
						devDependencies: true,
					},
				],
				"node/global-require": 0,
				"unicorn/no-keyword-prefix": 0,

				"unicorn/prevent-abbreviations": [
					2,
					{
						allowList: { jQuery: true },
						checkDefaultAndNamespaceImports: true,
						checkProperties: false,
						checkShorthandImports: true,
						checkShorthandProperties: true,
					},
				],
			},
		},

		esm: {
			// TODO: Remove with ESLint 8
			parser: "@babel/eslint-parser",
			parserOptions: {
				requireConfigFile: false,
				sourceType: "module",
				babelOptions: {
					plugins: [
						fs.existsSync("node_modules/@babel/plugin-syntax-top-level-await")
							? "@onedotprojects/eslint-plugin/node_modules/@babel/plugin-syntax-top-level-await"
							: "@babel/plugin-syntax-top-level-await",
					],
				},
			},
			rules: {
				"id-match": [
					2,
					/^(?:_?[A-Za-z]+(?:[A-Z][a-z]{1,10}){0,2}|(?:_?[A-Z]+){1,2}|_)$/.source,
					{ ignoreDestructuring: false, onlyDeclarations: false, properties: true },
				],
				"import/extensions": [1, "always"],
				"import/exports-last": 0,
				"import/no-commonjs": 2,
				"import/no-unresolved": 2,
				"import/order": [
					1,
					{
						"groups": [
							"type",
							"object",
							"builtin",
							"external",
							"internal",
							["parent", "sibling", "index"],
						],
						"newlines-between": "always",
						"alphabetize": {
							order: "asc",
							caseInsensitive: true,
						},
					},
				],
				"node/file-extension-in-import": 0,
				"node/no-unsupported-features/es-syntax": [
					"error",
					{ ignores: ["dynamicImport", "modules"] },
				],
				"node/no-missing-import": 0,
				"sort-imports": 0,
			},
		},

		node: {
			env: { node: true },
			extends: ["plugin:node/recommended", "plugin:node/recommended-script", "hardcore/node"],
			parserOptions: { ecmaVersion: 10 },

			rules: {
				"id-match": [
					2,
					/^_?(?:[A-Za-z]+(?:[A-Z][a-z]{1,10}){0,2}|[A-Z]+(?:_[A-Z]+)?)?$/.source,
					{ ignoreDestructuring: false, onlyDeclarations: false, properties: true },
				],

				"no-unused-vars": [2, { args: "all", argsIgnorePattern: "_", caughtErrors: "all" }],

				"node/callback-return": 0,

				"node/exports-style": 2,

				"node/handle-callback-err": 2,

				"node/no-callback-literal": 2,

				"node/no-mixed-requires": 0,

				"node/no-new-require": 2,

				"node/no-path-concat": 2,

				"node/no-process-env": 0,

				"node/no-restricted-import": 2,

				"node/no-restricted-require": 2,

				"node/no-sync": 0,

				"node/no-unpublished-require": 0,

				"unicorn/escape-case": 0,

				"unicorn/prefer-node-protocol": 0,

				"unicorn/prevent-abbreviations": [
					2,
					{
						allowList: { jQuery: true },
						checkDefaultAndNamespaceImports: true,
						checkProperties: true,
						checkShorthandImports: true,
						checkShorthandProperties: true,
					},
				],

				"unicorn/no-hex-escape": 0,
			},
		},

		recommended: {
			env: { es2020: false, es6: true },

			extends: [
				"eslint:all",
				"plugin:eslint-comments/recommended",
				"plugin:regexp/recommended",
				"plugin:optimize-regex/all",
				"plugin:markdown/recommended",
				"plugin:promise/recommended",
				"plugin:unicorn/recommended",
				"prettier",
				"plugin:import/recommended",
				"hardcore",
				"hardcore/fp",
			],

			ignorePatterns: [
				"!**",
				"node_modules",
				".git",
				"plugin_packages",
				".npm",
				".upm",
				"dist",
				"build",
				".parcel-cache",
				".nvm",
				".eslintcache",
				".node_repl_history",
			],

			overrides: [
				{
					extends: ["plugin:@onedotprojects/cli"],
					files: ["bin/**.js", ".github/**.js"],
				},
				{
					files: [".github/**.js"],
					rules: {
						"import/no-extraneous-dependencies": [
							2,
							{
								bundledDependencies: false,
								peerDependencies: false,
								optionalDependencies: false,
								devDependencies: true,
							},
						],
					},
				},
				{
					extends: ["plugin:@onedotprojects/esm"],
					files: ["**.esm"],
				},
				{
					extends: ["plugin:@onedotprojects/config"],
					files: [
						"**.config.js",
						"**rc.js",
						"**.config.mjs",
						"**rc.mjs",
						"**.config.cjs",
						"**rc.cjs",
					],
				},
				{
					extends: ["plugin:@onedotprojects/sample"],
					files: ["**.md"],
					processor: "markdown/markdown",
				},
				{ extends: ["plugin:@onedotprojects/sample"], files: ["**.md/**"] },
				{
					extends: ["plugin:@onedotprojects/browser"],
					files: ["**.html", "**.htm"],
					rules: { "putout/putout": 0 },
				},
				{ files: ["**.json*"], rules: { "jsdoc/require-file-overview": 0 } },
			],

			parserOptions: {
				ecmaVersion: 6,
				sourceType: "script",
			},

			plugins: ["html", "jsdoc", "regexp", "switch-case", "@onedotprojects"],

			reportUnusedDisableDirectives: true,

			root: true,

			rules: {
				"@html-eslint/require-doctype": 0,
				"arrow-body-style": 2,
				"capitalized-comments": 2,
				"class-methods-use-this": 1,
				"comma-dangle": [1, "always-multiline"],
				"consistent-return": 2,
				"curly": [1, "multi-or-nest", "consistent"],
				"dot-location": [1, "property"],
				"eslint-comments/require-description": 2,
				"fp/no-let": 0,
				"fp/no-loops": 0,
				"fp/no-mutating-methods": 0,
				"fp/no-mutation": 0,
				"fp/no-this": 0,
				"func-style": [1, "declaration", { allowArrowFunctions: true }],
				"function-call-argument-newline": [1, "consistent"],
				"function-paren-newline": 0,
				"id-length": [1, { exceptions: ["_"], max: 20, min: 3 }],

				"id-match": [
					2,
					/^(?:_?[A-Za-z]+(?:[A-Z][a-z]{1,10}){0,2}|(?:_?[A-Z]+){1,2}|_(?:_(?:filename|dirname))?)$/
						.source,
					{ ignoreDestructuring: false, onlyDeclarations: false, properties: true },
				],

				"import/extensions": [
					1,
					"always",
					{
						js: "never",
						json: "ignorePackages",
						jsx: "never",
						ts: "never",
						tsx: "never",
					},
				],

				"import/first": 2,
				"import/group-exports": 0,
				"import/max-dependencies": 0,
				"import/newline-after-import": 2,
				"import/no-absolute-path": 2,
				"import/no-amd": 2,
				"import/no-anonymous-default-export": 2,
				"import/no-commonjs": 0,
				"import/no-unresolved": 2,

				"import/no-cycle": 2,
				"import/no-dynamic-require": 0,
				"import/no-extraneous-dependencies": [
					2,
					{
						bundledDependencies: false,
						peerDependencies: false,
						optionalDependencies: false,
						devDependencies: false,
					},
				],
				"import/no-import-module-exports": 2,
				"import/no-mutable-exports": 2,
				"import/no-named-default": 2,
				"import/no-namespace": 2,
				"import/no-relative-parent-imports": 0,
				"import/no-self-import": 2,
				"import/no-unassigned-import": 2,
				"import/no-unused-modules": 0,
				"import/no-useless-path-segments": 2,
				"import/no-webpack-loader-syntax": 2,
				"import/order": 0,
				"import/prefer-default-export": 2,
				"import/unambiguous": 2,
				"indent": [1, "tab"],
				"indent-legacy": 0,
				"init-declarations": 0,
				"jsdoc/check-access": 1,
				"jsdoc/check-alignment": 1,
				"jsdoc/check-examples": 1,
				"jsdoc/check-line-alignment": 1,
				"jsdoc/check-param-names": 1,
				"jsdoc/check-property-names": 1,
				"jsdoc/check-syntax": 1,
				"jsdoc/check-tag-names": 1,
				"jsdoc/check-types": 1,
				"jsdoc/check-values": 1,
				"jsdoc/empty-tags": 1,
				"jsdoc/implements-on-classes": 1,
				"jsdoc/match-description": 1,
				"jsdoc/newline-after-description": 1,
				"jsdoc/no-bad-blocks": 1,
				"jsdoc/no-defaults": 1,
				"jsdoc/no-undefined-types": 0,
				"jsdoc/require-asterisk-prefix": 1,
				"jsdoc/require-description": 1,
				"jsdoc/require-description-complete-sentence": 1,
				"jsdoc/require-file-overview": 1,
				"jsdoc/require-hyphen-before-param-description": 1,
				"jsdoc/require-jsdoc": 1,
				"jsdoc/require-param": 1,
				"jsdoc/require-param-description": 1,
				"jsdoc/require-param-name": 1,
				"jsdoc/require-param-type": 1,
				"jsdoc/require-property": 1,
				"jsdoc/require-property-description": 1,
				"jsdoc/require-property-name": 1,
				"jsdoc/require-property-type": 1,
				"jsdoc/require-returns": 1,
				"jsdoc/require-returns-check": 1,
				"jsdoc/require-returns-description": 1,
				"jsdoc/require-returns-type": 1,
				"jsdoc/require-throws": 1,
				"jsdoc/require-yields": 1,
				"jsdoc/require-yields-check": 1,
				"json/*": 0,
				"linebreak-style": 0,
				"lines-around-comment": 0,

				"max-len": [
					1,
					{
						code: 100,
						comments: 120,
						ignoreRegExpLiterals: true,
						ignoreStrings: false,
						ignoreTemplateLiterals: false,
						ignoreUrls: true,
						tabWidth: 0,
					},
				],

				"max-lines": [1, { max: 500, skipBlankLines: true, skipComments: true }],

				"max-lines-per-function": [
					1,
					{ IIFEs: true, max: 100, skipBlankLines: true, skipComments: true },
				],

				"max-params": [1, { max: 5 }],
				"max-statements": 0,
				"multiline-comment-style": [1, "separate-lines"],
				"multiline-ternary": [1, "always-multiline"],
				"new-cap": [1, { capIsNew: true, newIsCap: true, properties: true }],
				"no-confusing-arrow": 0,
				"no-console": 1,
				"no-continue": 0,
				"no-extra-parens": 0,
				"no-implicit-coercion": 0,
				"no-invalid-this": 0,
				"no-magic-numbers": 0,
				"no-mixed-operators": 0,
				"no-nested-ternary": 0,
				"no-plusplus": 0,
				"no-process-exit": 2,
				"no-tabs": 0,
				"no-ternary": 0,
				"no-undefined": 0,
				"no-unused-vars": [2, { args: "all", argsIgnorePattern: "_", caughtErrors: "all" }],
				"no-warning-comments": [1, { location: "anywhere" }],
				"object-curly-spacing": [1, "always"],
				"one-var": [1, "consecutive"],
				"optimize-regex/optimize-regex": 2,
				"padded-blocks": [1, "never"],
				"prefer-arrow-callback": 2,
				"prettier/prettier": 0,
				"promise/no-callback-in-promise": 0,
				"promise/no-nesting": 0,
				"promise/prefer-await-to-then": 0,

				"putout/putout": [
					"error",
					{
						rules: {
							"convert-template-to-string": "off",
							"remove-console": "off",
							"split-variable-declarations": "off",
						},
					},
				],

				"quote-props": [1, "consistent-as-needed"],
				"quotes": [1, "double", { avoidEscape: true }],
				"regexp/confusing-quantifier": 2,
				"regexp/control-character-escape": 2,
				"regexp/hexadecimal-escape": 2,
				"regexp/letter-case": 2,
				"regexp/negation": 2,
				"regexp/no-dupe-disjunctions": 2,
				"regexp/no-empty-alternative": 2,
				"regexp/no-lazy-ends": 2,
				"regexp/no-legacy-features": 2,
				"regexp/no-non-standard-flag": 2,
				"regexp/no-obscure-range": 2,
				"regexp/no-optional-assertion": 2,
				"regexp/no-potentially-useless-backreference": 2,
				"regexp/no-standalone-backslash": 2,
				"regexp/no-super-linear-backtracking": 0,
				"regexp/no-super-linear-move": 0,
				"regexp/no-trivially-nested-assertion": 2,
				"regexp/no-trivially-nested-quantifier": 2,
				"regexp/no-useless-assertions": 2,
				"regexp/no-useless-character-class": 2,
				"regexp/no-useless-dollar-replacements": 2,
				"regexp/no-useless-escape": 2,
				"regexp/no-useless-flag": 2,
				"regexp/no-useless-lazy": 2,
				"regexp/no-useless-non-capturing-group": 2,
				"regexp/no-useless-non-greedy": 2,
				"regexp/no-useless-quantifier": 2,
				"regexp/no-useless-range": 2,
				"regexp/no-zero-quantifier": 2,
				"regexp/optimal-lookaround-quantifier": 0,
				"regexp/prefer-character-class": 2,
				"regexp/prefer-escape-replacement-dollar-char": 2,
				"regexp/prefer-named-backreference": 2,
				"regexp/prefer-predefined-assertion": 2,
				"regexp/prefer-quantifier": 2,
				"regexp/prefer-range": 2,
				"regexp/prefer-regexp-exec": 2,
				"regexp/prefer-regexp-test": 2,
				"regexp/prefer-unicode-codepoint-escapes": 2,
				"regexp/sort-character-class-elements": 2,
				"regexp/sort-flags": 2,
				"regexp/strict": 0,
				"regexp/unicode-escape": 2,
				"require-unicode-regexp": 0,
				"security/detect-non-literal-regexp": 0,
				"security/detect-non-literal-require": 0,
				"security/detect-object-injection": 2,
				"security/detect-unsafe-regex": 0,
				"sonarjs/cognitive-complexity": 0,
				"sonarjs/no-duplicate-string": [2, 3],
				"sort-keys": 1,
				"sort-vars": 1,

				"space-before-function-paren": [
					1,
					{ anonymous: "always", asyncArrow: "always", named: "never" },
				],

				"strict": [2, "global"],
				"switch-case/newline-between-switch-case": 1,
				"unicorn/consistent-function-scoping": 0,
				"unicorn/custom-error-definition": 2,
				"unicorn/escape-case": 0,
				"unicorn/expiring-todo-comments": 1,
				"unicorn/filename-case": 0,
				"unicorn/import-index": [1, { ignoreImports: true }],
				"unicorn/no-array-for-each": 1,
				"unicorn/no-keyword-prefix": 2,
				"unicorn/no-unsafe-regex": 0,
				"unicorn/no-unused-properties": 2,
				"unicorn/no-useless-undefined": 1,
				"unicorn/numeric-separators-style": [1, { onlyIfContainsSeparator: true }],
				"unicorn/prefer-module": 0,
				"unicorn/prefer-node-protocol": 0,
				"unicorn/prefer-object-has-own": 0,
				"unicorn/prefer-prototype-methods": 2,
				"unicorn/prefer-spread": 0,
				"unicorn/prefer-string-replace-all": 0,

				"unicorn/prevent-abbreviations": [
					2,
					{
						allowList: { jQuery: true },
						checkDefaultAndNamespaceImports: true,
						checkProperties: true,
						checkShorthandImports: true,
						checkShorthandProperties: true,
					},
				],

				"vars-on-top": 1,
				"wrap-iife": [2, "inside"],
			},

			settings: { html: { "xml-extensions": [".svg"] } },
		},

		sample: {
			env: { browser: true, es2020: true, es6: true, node: true },

			parserOptions: {
				ecmaVersion: 12,
			},

			rules: {
				"eol-last": [2, "never"],
				"import/no-extraneous-dependencies": [2, { devDependencies: false }],
				"jsdoc/require-file-overview": 0,
				"no-console": 0,
			},
		},
	},
};
