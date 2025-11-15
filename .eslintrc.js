module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	rules: {
		"prettier/prettier": ["error", { "useTabs": true }],
		"no-unused-vars": "warn"
	},
	env: {
		es2021: true,
		node: true,
		browser: true
	}
};
