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
		files: ["**.js"], // Node.JS scripts
	},
	{
		extends: ["plugin:@onedotprojects/cli"],
		files: [".github/**"], // CLIs (including JS GitHub Actions)
	},
	{
		extends: ["plugin:@onedotprojects/mjs"],
		files: ["**.mjs"], // MJS files
	},
	{
		extends: ["plugin:@onedotprojects/config"],
		files: ["**.config.js", "**rc.js"], // Configuration files (This usually catches all of them)
	},
	{
		extends: ["plugin:@onedotprojects/sample"],
		files: ["**.md/**", "**.md"], // Files including samples (AKA docs) (also include HTML and Markdown files)
	},
	{
		extends: ["plugin:@onedotprojects/browser"],
		files: ["**.html", "**.htm"], // Client-side scripts (also include HTML files)
	},
],

```

You can remove any objects that end up with an empty `files` array. Make sure that the scripts stay
in this order. Otherwise, you might get some false-positive errors.

1. Add project-specific configuration (such as `ecmaVersion`). (You should not need to add more
   rules; it'd probably be better to update the plugin in that case).

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

If you have any feedback or require support, please open a discussion and I will get back to you as
soon as I can.

## Contributing

Feel free to open pull requests, but don't be surprised when we close them. This project rarely
changes. However, if you really feel like it _should_ change, open an issue so we can discuss it!

## Authors

-   [@RedGuy12](https://www.github.com/RedGuy12)
