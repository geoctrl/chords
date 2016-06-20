var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: path.resolve(__dirname, 'app', 'app.js'),
	output: {
		path: path.resolve(__dirname, 'app'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'ng-annotate!babel?presets[]=es2015',
				exclude: [/node_modules/, /lib/]
			},
			{
				test: /\.json$/,
				loader: 'json',
				exclude: [/node_modules/, /lib/]
			},
			{
				test: /.html$/,
				loader: 'raw',
				exclude: [/node_modules/, /lib/]
			},
			{
				test: /.scss$/,
				loader: 'style!css!postcss-loader!sass',
				exclude: [/node_modules/, /lib/]
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline?removeTags=true&removingTags[]=style',
				exclude: [/node_modules/, /lib/]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV),
			__PROD__: process.env.NODE_ENV === 'production'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: 'app/index.ejs',
			appMountId: 'chords',
			baseHref: process.env.NODE_ENV === 'production' ? '/' : '/'
		})

	],
	postcss: function() {
		return [require('autoprefixer')];
	}
};

if (process.env.NODE_ENV === 'development') {

}

if (process.env.NODE_ENV === 'production') {
	config.output.path = path.resolve(__dirname, 'dist');
	// config.devtool = 'source-map';
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
