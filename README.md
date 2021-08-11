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
		files: [],
	},
	{
		extends: ["plugin:@onedotprojects/esm"],

		// ESM files
		files: ["**.mjs"],
	},
	{
		extends: ["plugin:@onedotprojects/cli"],

		// CLIs (including JS GitHub Actions)
		files: ["bin/**.js", ".github/**.js"],
	},
	{
		extends: ["plugin:@onedotprojects/config"],

		// Configuration files
		files: ["**.config.js", "**rc.js","**.config.mjs", "**rc.mjs","**.config.cjs", "**rc.cjs"],
	},
	{
		extends: ["plugin:@onedotprojects/sample"],

		// Files including samples (AKA docs) (including HTML and Markdown files)
		files: ["**.md/*.js", "**.md/*.javascript", "**.md"],
	},
	{
		extends: ["plugin:@onedotprojects/browser"],

		// Client-side scripts (including HTML files)
		files: ["**.html", "**.htm","**.md/*.html"],
	},
],

```

You can remove any objects that have an empty or unchanged `files` array.

Make sure that the scripts stay in this order. Otherwise, you may get some false-positive errors.

4. Add project-specific configuration (such as `ecmaVersion`). (You should not need to add more rules; it'd probably be better to update the plugin in that case).

5. Add an npm script to lint your code. It should be named `lint:eslint` and have the following content:

```bash
eslint --fix --cache .
```

6. To lint your code, simply run

```bash
npm run lint:eslint
```

7. The first few times you run `npm run lint:eslint`, you may see an error `ESLint couldn't find the plugin ...`. If this happens, run the command it suggests.

Congrats! You've successfully integrated ESLint into your project with @onedotprojects/eslint-plugin!

## For All

While this was made specifically for OneDot Projects, anyone can use it!

If you have any feedback or require support, please open a discussion and I will get back to you as soon as I can.

## Contributing

Feel free to open pull requests, but don't be surprised when we close them. This project rarely changes. However, if you **really** feel like it _should_ change, open an issue so we can discuss it!

## Authors

-   [@RedGuy12](https://www.github.com/RedGuy12)
