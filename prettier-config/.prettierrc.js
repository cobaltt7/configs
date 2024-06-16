/** @type {import("prettier").Config & import("prettier-plugin-jsdoc").Options} */
const config = {
	experimentalTernaries: true,
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
	quoteProps: "consistent",
	proseWrap: "always",
	htmlWhitespaceSensitivity: "ignore",
	iniSpaceAroundEquals: true,
	jsdocDescriptionWithDot: true,
	jsdocPrintWidth: 120,
	jsdocAddDefaultToDescription: false,
	jsdocPreferCodeFences: true,
	overrides: [
		{ files: "**.md", options: { printWidth: 120 } },
		{ files: ["**.svg", "**.xml"], options: { parser: "html" } },
		{ files: ["**.env", "**.replit", "**/.tx/config"], options: { parser: "ini" } },
		{
			files: ["package.json", "package-lock.json", "npm-shrinkwrap.json"],
			options: { parser: "json-stringify" },
		},
		{
			files: ["**/.vscode/*.json", "tsconfig.json", "jsconfig.json"],
			options: { trailingComma: "none", parser: "jsonc" },
		},
	],
	plugins: [
		require.resolve("prettier-plugin-jsdoc"),
		require.resolve("prettier-plugin-ini"),
		require.resolve("prettier-plugin-packagejson"),
	],
};
module.exports = config;
