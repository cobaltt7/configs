# `@redguy12/prettier-config`

My Prettier style guide

## Adding To A Project

1. Install the config by running:

    ```bash
    npm install @redguy12/prettier-config prettier --save-dev --save-exact
    ```

2. Add the following to your `package.json`:

    ```json
    "prettier": "@redguy12/prettier-config",
    "scripts": { "format": "prettier --write \"**\" --ignore-unknown --cache" }
    ```

3. Create a `.prettierignore` file with the following content:

    ```ignore
    node_modules
    .eslintcache
    dist/**
    ```

4. To format your code, simply run

    ```bash
    npm run format
    ```

Congrats! You've successfully integrated ESLint into your project with `@redguy12/prettier-config`!

## See also

See also [`@redguy12/eslint-config`](https://www.npmjs.com/package/@redguy12/eslint-config) if you want even more consistent stylization and more.
