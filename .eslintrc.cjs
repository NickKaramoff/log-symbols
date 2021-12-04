module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:unicorn/recommended",
		"xo",
		"prettier",
	],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},
	rules: {},
};
