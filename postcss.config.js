/* eslint-env node */
// we use https://github.com/postcss/postcss-cli

module.exports = {
	map: {
		inline: true
	},
	plugins: [
		// https://github.com/postcss/postcss-import
		// inline @import
		require("postcss-import")({
			path: "./src/"
		}),
	],
};