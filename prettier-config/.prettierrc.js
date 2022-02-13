/** @type {import("prettier").Config} */
const config = {
	iniSpaceAroundEquals: true,
	printWidth: 100,
	proseWrap: "always",
	quoteProps: "consistent",
	tabWidth: 4,
	trailingComma: "all",
	useTabs: true,
	jsdocSeparateTagGroups: true,
	jsdocDescriptionWithDot: true,
	jsdocPrintWidth: 100,
	jsdocAddDefaultToDescription: false,
	jsdocSeparateReturnsFromParam: true,
	bracketSameLine: false,
	vueIndentScriptAndStyle: true,
	embeddedLanguageFormatting: "auto",
	overrides: [
		{
			files: "**.md",
			options: {
				trailingComma: "es5",
				proseWrap: "never",
				parser: "markdown",
			},
		},
		{
			files: ["**.svg", "**.html", "**.xml"],
			options: {
				trailingComma: "none",
				parser: "html",
			},
		},
		{
			files: ["**.sass", "**.scss", "**.css"],
			options: {
				parser: "scss",
			},
		},
		{
			files: ["**.env", "**.replit", "**/.tx/config"],
			options: {
				parser: "ini",
			},
		},
		{
			files: ["**.json", "**.map"],
			options: {
				parser: "json",
			},
		},
		{
			files: ["package.json", "package-lock.json", "npm-shrinkwrap.json"],
			options: {
				parser: "json-stringify",
			},
		},
		{
			files: ["**/.vscode/*", "**.eslintrc", "**.eslintrc.json", "jsconfig.json"],
			options: {
				parser: "json5",
				quoteProps: "preserve",
				trailingComma: "none",
			},
		},
	],
	plugins: [require.resolve("prettier-plugin-jsdoc"), require.resolve("prettier-plugin-ini")],
};
module.exports = config;
