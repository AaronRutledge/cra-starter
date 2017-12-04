const path = require('path');
const loaders = require('loaders');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	plugins : [
		// new FlowWebpackPlugin(),
		// new BundleAnalyzerPlugin({generateStatsFile : 'stats.json'})
	],
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		library: "MkPatternLibrary",
		libraryTarget: "umd"
	},
	resolve: {
		alias: {
			// Override Styleguidist components
			'rsg-components/Logo':
			path.join(__dirname, 'styleguide/components/Logo'),
			'rsg-components/StyleGuide/StyleGuideRenderer':
			path.join(__dirname, 'styleguide/components/StyleGuide'),
		},
	},
	externals: {
		// Use external version of React
		"react": "react"
	},
	module: {
		loaders: [

			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|woff|woff2|ttf|png|svg|jpe?g|gif)(\?\S*)?$/,
				exclude: /node_modules/,
				loader: 'url-loader?importLoaders=1&limit=100000'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-2']
				}
			}
		],
	},
};