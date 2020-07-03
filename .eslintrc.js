module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		project: './tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
		'@typescript-eslint/explicit-function-return-type': ['off'],
		'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
		'no-var': 'error',
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'sort-keys': 'error',
		'sort-vars': 'error',
	},
}
