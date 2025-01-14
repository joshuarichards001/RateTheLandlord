module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
		},
	},

	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json', // tells parser relative path of tsconfig.json
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},

	// all plugins (eslint-plugin-xxx) go here:
	plugins: ['@typescript-eslint'],

	// all configs (eslint-config-xxx) go here:
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking', // contains rules that specifically require type information
		'next', // https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/package.json

		'plugin:import/typescript',
	],
	rules: {
		'jsx-a11y/anchor-is-valid': 'off', // disable this rule
	},
}
