# ESLint and Prettier Presets for Typescript

These are the ESLint and Prettier settings I like to use for Typescript projects.

## Installing

1. Ensure you have `package.json` file
2. Install `eslint-config-justinneff-ts` and it's peer dependencies. (This command works with yarn too)

```
npx install-peerdeps eslint-config-justinneff-js
```

3. Create a `.eslintrc` file in the root of your project that looks like this:

```json
{
	"extends": ["justinneff-ts"]
}
```

4. Create a `.prettierrc` file in the root of your project. These are the default settings I use:

```json
{
	"arrowParens": "always",
	"bracketSpacing": true,
	"jsxSingleQuote": false,
	"semi": false,
	"singleQuote": true,
	"tabWidth": 2,
	"trailingComma": "all",
	"useTabs": true
}
```

5. You can also add these scripts to the `package.json` file to give you simple commands for linting and fixing files.

```json
"scripts": {
	"lint": "eslint .",
	"lint:fix": "eslint . --fix"
},
```
