const merge = require("webpack-merge");
const { addHotMiddleware, DEV } = require("./_webpack/util.js");

let webpackConfig = require("./_webpack/webpack.default.js");

if (DEV) {
	webpackConfig = merge(
		Array.of(webpackConfig, require("./_webpack/webpack.development.js"))
	);
	webpackConfig.entry = addHotMiddleware(webpackConfig.entry);
} else {
	webpackConfig = merge(
		Array.of(webpackConfig, require("./_webpack/webpack.production.js"))
	);
}

module.exports = webpackConfig;
