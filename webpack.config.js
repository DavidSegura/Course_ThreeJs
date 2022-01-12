// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const routeApp = './src'

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	resolve: {
		extensions: ['.js']
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CopyWebpackPlugin({
			patterns: [
				{
					from: `${routeApp}/assets`,
					to: 'assets'
				},
				{
					from: './style',
					to: 'style'
				}
			]
		}
		),
    ],
    module: {
        rules: [
            {
				test: /\.js$/,
				exclude: /node_modules/
			},
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
