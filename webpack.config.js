const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './app.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/dist',
		publicPath: '/assets',
	},
	devServer: {
		contentBase: __dirname + '/src',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: [
						'es2015',
					],
				},
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	postcss: [
		autoprefixer({
			browsers: [ 'last 2 versions' ], 
		}),
	],
}