# `@redguy12/eslint-config`

My ESLint Style Guide

## Adding To A Project

1.  Note: this project is meant to be used alongside `@redguy12/prettier-config` so install & configure that first.

2.  Install the config by running:

    ```bash
    npm install @redguy12/eslint-config @rushstack/eslint-patch @types/eslint eslint --save-dev
    ```

3.  Add an **.eslintrc.js** file (or **.eslintrc.cjs** if you are using Node _and_ ESM in the rest of your project) with the following content:

    ```javascript
    /** @file ESLint Configuration file. */

    "use strict";

    require("@rushstack/eslint-patch/modern-module-resolution");

    /** @type {import("eslint").Linter.Config} */
    const config = {
    	extends: "@redguy12",

    	overrides: [
    		{
    			files: "!**.md/*",
    			parserOptions: { project: "./jsconfig.json" },
    		},
    	],

    	root: true,
    };

    module.exports = config;
    ```

4.  Add more overrides for specific files. Keep `!**.md/*` (added in the previous step) last.

    ```js
    [
    	{
    		extends: "@redguy12/typescript",
    		// TypeScript files
    		files: "**.ts",
    	},
    	{
    		extends: "@redguy12/node",
    		// Node.JS scripts
    		files: [],
    	},
    	{
    		extends: "@redguy12/esm",
    		// ESM files
    		files: "**.mjs",
    	},
    	{
    		extends: "@redguy12/cli",
    		// CLIs (including JS GitHub Actions)
    		files: ["bin/**.js", ".github/**.js"],
    	},
    	{
    		extends: "@redguy12/config",

    		// Configuration files
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
    		extends: "@redguy12/browser",
    		// Client-side scripts (including HTML files)
    		files: ["**.html", "**.htm", "**.vue"],
    	},
    	{
    		extends: "@redguy12/sample",
    		// Files including samples (AKA docs) (including HTML and Markdown files)
    		files: ["**.md", "**.md/*"],
    	},
    	{
    		extends: "@redguy12/vue",
    		// Vue SFCs (v3)
    		files: "**.vue",
    	},
    ];
    ```

    You can remove any objects that have an empty or unchanged `files` array. However, make sure that the entries stay in this order.

5.  Add project-specific configuration (such as `ecmaVersion` or you can change the `parserOptions.project`). You should not need to add more rules; it'd probably be better to update the config in that case. Note that `ecmaVersion` is overridden in some configs, so you may need to put it in the `!**.md/*` entry.

6.  Add an npm script to lint your code as so:

    ```json
    "lint:eslint": "cd \"node_modules/@redguy12/eslint-config/\" && npx eslint ../../../ --resolve-plugins-relative-to . --fix && cd \"../../../\""
    ```

7.  To lint your code, simply run

    ```bash
    npm run lint:eslint
    ```

Congrats! You've successfully integrated ESLint into your project with `@redguy12/eslint-config`!

## For All

While this was made specifically for me, anyone can use it! If you have any feedback or require support, please open a discussion and I will get back to you as soon as I can.

## Contributing

Feel free to open pull requests, but don't be surprised when we close them. This project rarely changes. However, if you **really** feel like it _should_ change, open an issue so we can discuss it!
