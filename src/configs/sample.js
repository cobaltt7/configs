module.exports = {
	env: { browser: true, es2020: true, es6: true, node: true },

	parserOptions: {
		ecmaVersion: 12,
	},

	rules: {
		"eol-last": [2, "never"],
		"import/no-extraneous-dependencies": [2, { devDependencies: false }],
		"jsdoc/require-file-overview": 0,
		"no-console": 0,
		"no-undef": 0,
		"jsdoc/require-jsdoc": 0,
		"import/no-unresolved": 0,
		"import/unambiguous": 0,
		"node/no-missing-import": 0,
		"node/no-missing-require": 0,
		"strict": 0,
	},
};
