const { resolve } = require("path");
const { sync: delSync } = require("del");
const { HotModuleReplacementPlugin } = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const BrowserSyncHotPlugin = require("browser-sync-dev-hot-webpack-plugin");

const {publicPath, browserSyncPort, browserSyncOpen, browserSyncTarget, themeFolderName} = require('./util.js');

module.exports = {
	output: {
		publicPath
	},
	plugins: [
		{
			apply(){
				delSync([
					resolve(__dirname, `../../assets/css/theme.css`)
				], {force: true});
			}
		},
		new HotModuleReplacementPlugin(),
		new BrowserSyncHotPlugin({
			browserSync: {
				port: browserSyncPort,
				open: browserSyncOpen,
				reloadDelay: 500,
				proxy: {
					target: browserSyncTarget
				},
				plugins: [
					{
						module: "bs-html-injector",
						options: {
							files: [
								/* pwd() + */"../templates/**/*.tpl",
								/* pwd() + */'../modules/**/*.tpl'
							]
						}
					}
				]
			},
			devMiddleware: {
				publicPath,
				stats: { colors: true, chunck: false },
				hot: true
			},
			hotMiddleware: {}
		}),
		new HardSourceWebpackPlugin({
			cacheDirectory: `${resolve(__dirname, "../node_modules/.cache/hard-source/")}[confighash]`,
			recordsPath: `${resolve(__dirname, "../node_modules/.cache/hard-source/")}[confighash]/records.json`,
			configHash: require("node-object-hash")({ sort: false }).hash
		}),
		new BundleAnalyzerPlugin({
			openAnalyzer: false
		}),
	]
};
