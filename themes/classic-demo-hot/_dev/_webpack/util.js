const mapObject = obj => fn => Object.keys(obj).map(key => fn(obj[key], key));

module.exports = {
	port: 3000,
	open: false,
	outputFolderName: 'assets/js',
	themeFolderName: 'classic-demo-hot',
	get publicPath(){
		return `http://localhost:${this.port}/themes/${this.themeFolderName}/${this.outputFolderName}/`;
	},
	DEV: process.env.NODE_ENV !== "production",

	addHotMiddleware(entry) {
		const newEntry = {};

		mapObject(entry)((val, name) => {
			val = (Array.isArray(val) ? val : [val]).slice();
			val.unshift("webpack/hot/dev-server", "webpack-hot-middleware/client");
			newEntry[name] = val;
		});
		return newEntry;
	}
};
