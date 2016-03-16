var webpack = require('webpack');
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
	contentBase: 'dist',
	hot: true,
	stats: { colors: true }
}).listen(8080, 'localhost', function(err, result) {
	if (err) {
		console.error('Error', err);
	}

	console.log('Listening at localhost:8080. Ctrl+C to stop.');
});
