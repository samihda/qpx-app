module.exports = {
	entry: './src/main.module',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
		],
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.css']
	}
};
