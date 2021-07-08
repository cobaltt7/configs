# @onedotprojects/eslint-plugin

![Logo](https://cdn.onedot.cf/brand/SVG/NoPadding/One%20Dot%20NoPad.svg)

OneDot Projects' ESLint Style Guide

## Adding To A Project

1. Install the plugin and its dependencies by running:

```bash
npm install @onedotprojects/eslint-plugin --save-dev
```

2. Add a .eslintrc.js file with the following contents:

```js
"use strict";

/** @file ESLint Configuration file. */

module.exports = {
	extends: ["plugin:@onedotprojects/recommended"],
};
```

3. Add overrides for specific files by adding an `overrides` key:

```js
overrides: [
	{
		extends: ["plugin:@onedotprojects/node"],

		// Node.JS scripts
		files: ["**.js"],
	},
	{
		extends: ["plugin:@onedotprojects/cli"],

		// CLIs (including JS GitHub Actions)
		files: [".github/**.js", "bin/**.js"],
	},
	{
		extends: ["plugin:@onedotprojects/esm"],

		// ESM files
		files: ["**.esm"],
	},
	{
		extends: ["plugin:@onedotprojects/config"],

		// Configuration files (This usually catches all of them)
		files: ["**.config.js", "**rc.js","**.config.mjs", "**rc.mjs","**.config.cjs", "**rc.cjs"],
	},
	{
		extends: ["plugin:@onedotprojects/sample"],

		// Files including samples (AKA docs) (including HTML and Markdown files)
		files: ["**.md/**", "**.md"],
	},
	{
		extends: ["plugin:@onedotprojects/browser"],

		// Client-side scripts (including HTML files)
		files: ["**.html", "**.htm"],
	},
],

```

You can remove any objects that end up with an empty `files` array. Make sure that the scripts stay in this order. Otherwise, you will get some false-positive errors.

1. Add project-specific configuration (such as `ecmaVersion`). (You should not need to add more rules; it'd probably be better to update the plugin in that case).

2. Add an npm script to lint your code:

```json
"lint:eslint": "eslint --fix ."
```

6. To lint your code, simply run

```sh
npm run lint:eslint
```

Congrats! You've set up ESLint with @onedotprojects/eslint-plugin!

## For All

While this was made specifically for OneDot Projects, anyone can use it!

If you have any feedback or require support, please open a discussion and I will get back to you as soon as I can.

## Contributing

Feel free to open pull requests, but don't be surprised when we close them. This project rarely changes. However, if you **really** feel like it _should_ change, open an issue so we can discuss it!

## Authors

-   [@RedGuy12](https://www.github.com/RedGuy12)
