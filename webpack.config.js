const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const exec = require('child_process').exec;

module.exports = {
	entry: {
		app: ['./client/app.js'],
	},
	output: {
		path: "dist",
		filename: 'app.bundle.js'
	},
	module: {
		preLoaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}],
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader"},
			{ test:/\.less$/, exclude:'/node_modules', loader:"style!css!less"},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'},
			{ test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader?name=/assets/[name].[ext]"},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	},
	devServer: { inline: true },
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.es6']
	},
	plugins : [
		new CopyWebpackPlugin([{ from: 'client/index.html'}])
	]
}
