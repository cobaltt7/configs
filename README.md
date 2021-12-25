# @redguy12/eslint-plugin

My ESLint Style Guide

## Adding To A Project

1. Install the plugin by running:

    ```bash
    npm install @redguy12/eslint-plugin --save-dev
    ```

2. Copy the `peerDependencies` section from the `package.json` file into the `devDependencies` section in your project's `package.json` and run

    ```bash
    npm install
    ```

3. Add a .eslintrc.js file with the following contents:

    ```js
    "use strict";

    /** @file ESLint Configuration file. */
    module.exports = {
    	extends: ["plugin:@redguy12/recommended"],
    };
    ```

4. Add overrides for specific files by adding an `overrides` key:

    ```js
    [
    	{
    		extends: ["plugin:@redguy12/node"],
    		// Node.JS scripts
    		files: [],
    	},
    	{
    		extends: ["plugin:@redguy12/esm"],
    		// ESM files
    		files: ["**.mjs", "*.mjs"],
    	},
    	{
    		extends: ["plugin:@redguy12/cli"],
    		// CLIs (including JS GitHub Actions)
    		files: ["bin/**.js", "bin/*.js", ".github/**.js", ".github/*.js"],
    	},
    	{
    		extends: ["plugin:@redguy12/config"],

    		// Configuration files
    		files: [
    			"**.config.js",
    			"*.config.js",
    			"**rc.js",
    			"*rc.js",
    			"**.config.mjs",
    			"*.config.mjs",
    			"**rc.mjs",
    			"*rc.mjs",
    			"**.config.cjs",
    			"*.config.cjs",
    			"**rc.cjs",
    			"*rc.cjs",
    		],
    	},
    	{
    		extends: ["plugin:@redguy12/browser"],
    		// Client-side scripts (including HTML files)
    		files: ["**.html", "*.html", "**.htm", "*.htm", "**.md/*.html", "*.md/*.html"],
    	},
    	{
    		extends: ["plugin:@redguy12/sample"],
    		// Files including samples (AKA docs) (including HTML and Markdown files)
    		files: ["**.md", "*.md", "**.md/*", "*.md/*"],
    	},
    ];
    ```

    You can remove any objects that have an empty or unchanged `files` array. However, please make sure that the entries stay in this order.

5. Add project-specific configuration (such as `ecmaVersion`). (You should not need to add more rules; it'd probably be better to update the plugin in that case).

6. Add an npm script to lint your code. It should be named `lint:eslint` and have the following content:

    ```bash
    eslint --fix --cache .
    ```

7. To lint your code, simply run
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
