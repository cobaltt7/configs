module.exports = {
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

		"unicorn/prevent-abbreviations": 0,
	},
};
