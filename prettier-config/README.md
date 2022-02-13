# `@redguy12/prettier-config`

My Prettier style guide

## Adding To A Project

1. Install the config by running:
    ```bash
    npm install @redguy12/prettier-config prettier-package-json prettier --save-dev;
    ```
2. Add the following to your `package.json`:
    ```json
    "prettier": "@redguy12/prettier-config",
    "prettier-package-json": {
    	"tabWidth": 4,
    	"useTabs": true,
    	"expandUsers": true
    },
    "scripts": {
    	"lint:prettier": "prettier --write \"**\" --ignore-unknown && prettier-package-json --write"
    }
    ```
3. Create a `.prettierignore` file with the following content:

    ```
    !**
    **/logs/
    **/.git/
    **/dist/
    **/node_modules/
    **/.npm/
    **/.upm/
    **/.nvm/
    **/.eslintcache
    **/.node_repl_history
    **/.husky/_/
    ```

4. To format your code, simply run

    ```bash
    npm run lint:prettier;
    ```

Congrats! You've successfully integrated ESLint into your project with `@redguy12/prettier-config`!

## See also

See also [`@redguy12/eslint-config`](https://www.npmjs.com/package/@redguy12/eslint-config) if you want even more consistent stylization and more.
