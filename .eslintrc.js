module.exports = {
	plugins: ['react'],
	extends: [
		'alloy',
		'alloy/react',
		'alloy/typescript',
		'plugin:@next/next/recommended',
		'eslint:recommended',
	],
	settings: {
		react: {
			version: 'detect', // or specify your React version, e.g., "16.8"
		},
	},
	env: {
		// Your environments (which contains several predefined global variables)
		//
		// browser: true,
		// node: true,
		// mocha: true,
		// jest: true,
		// jquery: true
	},
	globals: {
		// Your global variables (setting to false means it's not allowed to be reassigned)
		//
		// myGlobal: false
	},
	rules: {
		// Customize your rules
	},
};
