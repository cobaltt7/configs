# @redguy12/eslint-plugin

My ESLint Style Guide

## Adding To A Project

0.  Note: this project is meant to be used alongside `@redguy12/prettier-config` so install that first.

1.  Install the plugin by running:

    ```bash
    npm install @redguy12/eslint-plugin --save-dev
    ```

2.  Copy the `peerDependencies` section from our **package.json** file into your project's **package.json** file's `devDependencies`.
3.  Run

    ```bash
    npm install
    ```

4.  Add a **.eslintrc.js** file with the following contents:

        ```js
        /** @file ESLint Configuration file. */
        "use strict";

        /** @type {import("eslint").Linter.Config} */

    const config = { extends: ["plugin:@redguy12/recommended"],

        	overrides: [
        		{
        			files: ["!**.md/*"],
        			parserOptions: { project: "./jsconfig.json" },
        		},
        	],

        	root: true,
        };
        ```

5.  Add more overrides for specific files. Keep `!**.md/*` (added in the previous step) last.

    ```js
    [
    	{
    		extends: ["plugin:@redguy12/typescript"],
    		// TypeScript files
    		files: ["**.ts"],
    	},
    	{
    		extends: ["plugin:@redguy12/node"],
    		// Node.JS scripts
    		files: [],
    	},
    	{
    		extends: ["plugin:@redguy12/esm"],
    		// ESM files
    		files: ["**.mjs"],
    	},
    	{
    		extends: ["plugin:@redguy12/cli"],
    		// CLIs (including JS GitHub Actions)
    		files: ["bin/**.js", ".github/**.js"],
    	},
    	{
    		extends: ["plugin:@redguy12/config"],

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
    		extends: ["plugin:@redguy12/browser"],
    		// Client-side scripts (including HTML files)
    		files: ["**.html", "**.htm", "**.vue"],
    	},
    	{
    		extends: ["plugin:@redguy12/sample"],
    		// Files including samples (AKA docs) (including HTML and Markdown files)
    		files: ["**.md", "**.md/*"],
    	},
    	{
    		extends: ["plugin:@redguy12/vue"],
    		// Vue SFC (v2)
    		files: ["**.vue"],
    	},
    ];
    ```

    You can remove any objects that have an empty or unchanged `files` array. However, please make sure that the entries stay in this order.

6.  Add project-specific configuration (such as `ecmaVersion` or change the `parserOptions.project`). Note that `ecmaVersion` is overridden in some plugins, so you may want to put it in the `!**.md/*` entry. (You should not need to add more rules; it'd probably be better to update the plugin in that case).

7.  Add an npm script to lint your code. It should be named `lint:eslint` and have the following content:

    ```bash
    eslint --fix --cache .
    ```

8.  To lint your code, simply run

    ```bash
    npm run lint:eslint
    ```

Congrats! You've successfully integrated ESLint into your project with @redguy12/eslint-plugin!

## For All

While this was made specifically for me, anyone can use it! If you have any feedback or require support, please open a discussion and I will get back to you as soon as I can.

## Contributing

Feel free to open pull requests, but don't be surprised when we close them. This project rarely changes. However, if you **really** feel like it _should_ change, open an issue so we can discuss it!

## Authors

-   [@RedGuy12](https://www.github.com/RedGuy12)
